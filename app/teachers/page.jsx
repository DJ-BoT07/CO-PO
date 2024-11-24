"use client";

import { useState } from "react";

export default function TeachersForm() {
  const [formData, setFormData] = useState({
    name: "",
    academic_year: "",
    semester: "",
    internal_marks: "",
    external_marks: "",
    class: "",
    division: "",
    is_admin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Teacher record successfully added!"); // Alert for successful submission
        setFormData({
          name: "",
          academic_year: "",
          semester: "",
          internal_marks: "",
          external_marks: "",
          class: "",
          division: "",
          is_admin: false,
        });
      } else {
        console.error("Failed to add teacher record.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Academic Year:</label>
          <input
            type="number"
            name="academic_year"
            value={formData.academic_year}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Semester:</label>
          <input
            type="number"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Internal Marks:</label>
          <input
            type="number"
            name="internal_marks"
            value={formData.internal_marks}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">External Marks:</label>
          <input
            type="number"
            name="external_marks"
            value={formData.external_marks}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Division:</label>
          <input
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="is_admin"
              checked={formData.is_admin}
              onChange={handleChange}
            />
            <span>Is Admin</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
