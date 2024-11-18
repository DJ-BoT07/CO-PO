"use client";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Award, BarChart3 } from "lucide-react";
import { useRouter } from "next/navigation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 border-b bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white"
          >
            DYPCOE Attainment
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2 rounded-full bg-purple-600/80 text-white hover:bg-purple-700/80 transition-colors"
          >
            Sign Up
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <BackgroundBeamsWithCollision className="absolute inset-0 w-full min-h-screen" />
        
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-faculty text-4xl md:text-6xl lg:text-7xl text-white mb-6">
                CO PO Attainment Mapping
                <span className="text-purple-400"> Made Simple</span>
              </h1>
              <p className="font-faculty text-lg md:text-xl text-gray-300 mb-12">
                Streamline your Course Outcome and Program Outcome mapping process
                for the Computer Department of DYPCOE Akurdi
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/dashboard')}
                className="px-8 py-4 rounded-full bg-purple-600/80 text-white hover:bg-purple-700/80 transition-colors flex items-center gap-2 mx-auto text-lg"
              >
                Go to Dashboard
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-300">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-6 rounded-full bg-purple-400"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Course Mapping",
                description: "Easily map your course outcomes to program outcomes with our intuitive interface"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Analytics",
                description: "Get detailed insights and visualizations of your attainment progress"
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Assessment",
                description: "Track and measure student performance against defined outcomes"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
