"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    speciality: "",
    tags: "",
    rating: 0,
    avatar: "",
    coverImg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trainer Registration Data:", formData);
    alert("Registration data logged to console!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Register as Instructor</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full p-3 bg-gray-800 text-white rounded border border-gray-600"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-3 bg-gray-800 text-white rounded border border-gray-600"
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
