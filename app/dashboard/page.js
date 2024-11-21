"use client";
import { motion } from "framer-motion";
import { BarChart3, Users, BookOpen, Award } from "lucide-react";
import { UserProfile } from "@/components/ui/userProfile";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Courses",
      value: "12",
      icon: <BookOpen className="w-6 h-6" />,
      change: "+2 this semester"
    },
    {
      title: "Students",
      value: "240",
      icon: <Users className="w-6 h-6" />,
      change: "+40 from last year"
    },
    {
      title: "Average Attainment",
      value: "75%",
      icon: <BarChart3 className="w-6 h-6" />,
      change: "+5% improvement"
    },
    {
      title: "POs Achieved",
      value: "9/12",
      icon: <Award className="w-6 h-6" />,
      change: "3 in progress"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
          Generate Report
        </button>
      </div>

      {/* User Profile Section */}
      <UserProfile />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                {stat.icon}
              </div>
              <span className="text-sm text-gray-500">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            "CO1 mapping updated for Data Structures",
            "New assessment added for Computer Networks",
            "PO attainment calculated for semester 5",
            "Student performance data updated"
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors"
            >
              {activity}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 