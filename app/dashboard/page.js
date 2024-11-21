"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, BookOpen, Award, UserCircle, Mail, Building, GraduationCap } from "lucide-react";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const teacherDoc = await getDoc(doc(db, "teachers", user.uid));
          if (teacherDoc.exists()) {
            setUserProfile(teacherDoc.data());
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const profileSections = [
    {
      title: "Personal Information",
      icon: <UserCircle className="w-6 h-6" />,
      fields: [
        { label: "Full Name", value: userProfile?.fullName || "Not set" },
        { label: "Employee ID", value: userProfile?.employeeId || "Not set" },
        { label: "Contact", value: userProfile?.contactNumber || "Not set" }
      ]
    },
    {
      title: "Academic Details",
      icon: <GraduationCap className="w-6 h-6" />,
      fields: [
        { label: "Department", value: userProfile?.department || "Not set" },
        { label: "Designation", value: userProfile?.designation || "Not set" },
        { label: "Specialization", value: userProfile?.specialization || "Not set" }
      ]
    },
    {
      title: "Teaching Information",
      icon: <BookOpen className="w-6 h-6" />,
      fields: [
        { label: "Subjects", value: userProfile?.subjects?.join(", ") || "Not set" },
        { label: "Experience", value: userProfile?.experience ? `${userProfile.experience} years` : "Not set" }
      ]
    }
  ];

  const stats = [
    {
      title: "Profile Completion",
      value: userProfile?.profileCompleted ? "100%" : "Incomplete",
      icon: <UserCircle className="w-6 h-6" />,
      change: userProfile?.profileCompleted ? "Fully Set Up" : "Setup Required"
    },
    {
      title: "Courses Assigned",
      value: userProfile?.subjects?.length || "0",
      icon: <BookOpen className="w-6 h-6" />,
      change: "Current Semester"
    },
    {
      title: "Assessments Created",
      value: "5",
      icon: <BarChart3 className="w-6 h-6" />,
      change: "+2 this week"
    },
    {
      title: "Students Evaluated",
      value: "120",
      icon: <Users className="w-6 h-6" />,
      change: "Across all courses"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        {!userProfile?.profileCompleted && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/profile-setup')}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            Complete Profile Setup
          </motion.button>
        )}
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {profileSections.map((section, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{section.title}</CardTitle>
              {section.icon}
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                {section.fields.map((field, fieldIdx) => (
                  <div key={fieldIdx} className="flex justify-between">
                    <dt className="text-sm font-medium text-gray-500">{field.label}:</dt>
                    <dd className="text-sm text-gray-900">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>

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
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Profile information updated",
              "New course subjects added",
              "Assessment criteria defined",
              "Student data imported"
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
        </CardContent>
      </Card>
    </div>
  );
} 