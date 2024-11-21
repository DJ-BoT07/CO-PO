"use client";
import { auth } from "@/utils/firebase";
import { motion } from "framer-motion";

export const UserProfile = () => {
  const user = auth.currentUser;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md border border-purple-100"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium">Email:</span>
          <span className="text-purple-600">{user?.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium">User ID:</span>
          <span className="text-purple-600">{user?.uid}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium">Email Verified:</span>
          <span className={`${user?.emailVerified ? 'text-green-600' : 'text-red-600'}`}>
            {user?.emailVerified ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}; 