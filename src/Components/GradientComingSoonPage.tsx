"use client";
import React, { useState } from "react";

const GradientComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="h-screen bg-[#141414] text-white relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 md:p-8">
        {/* Logo */}
        <div className="flex items-center">
          {/* <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg transform rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg transform -rotate-12 opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 rounded-lg opacity-60"></div>
          </div> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
        {/* Main Heading with Gradient */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-12 leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Coming
          </span>
          <span className="text-white"> </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-300 mb-16 max-w-2xl leading-relaxed">
          From bold bowls to iconic brands —
          <br />
          the future of food is cooking at Byte and Bite Foods.
        </p>

        {/* Email Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-1/3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email address"
            className="flex-1 px-6 py-4 bg-[#292929] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Notify Me
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center p-6 md:p-8">
        {/* Privacy Policy */}
        {/* <div>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </a>
        </div> */}

        {/* Social Media Links */}
        {/* <div className="flex items-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors text-sm">
            Facebook
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors text-sm">
            Instagram
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors text-sm">
            LinkedIn
          </a>
        </div> */}
      </footer>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default GradientComingSoonPage;
