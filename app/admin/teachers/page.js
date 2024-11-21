"use client";
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Loader } from "@/components/ui/loader";

export default function TeacherProfiles() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersSnapshot = await getDocs(collection(db, "teachers"));
        const teachersList = teachersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTeachers(teachersList);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Teacher Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div 
            key={teacher.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-purple-200 transition-all"
          >
            <h2 className="text-xl font-semibold mb-4">{teacher.fullName}</h2>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Department:</span> {teacher.department}</p>
              <p><span className="font-medium">Designation:</span> {teacher.designation}</p>
              <p><span className="font-medium">Specialization:</span> {teacher.specialization}</p>
              <p><span className="font-medium">Employee ID:</span> {teacher.employeeId}</p>
              <p><span className="font-medium">Email:</span> {teacher.email}</p>
              <p><span className="font-medium">Contact:</span> {teacher.contactNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 