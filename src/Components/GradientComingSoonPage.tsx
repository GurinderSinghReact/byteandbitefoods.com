"use client";
import imagePath from "@/constants/imagePath";
import Image from "next/image";
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
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 pt-8 md:p-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-56">
            <Image
              src={imagePath.appLogo}
              height={1264}
              width={1264}
              alt="project"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Main Heading with Gradient */}
        <h1 className="mb-12 text-6xl font-bold leading-tight md:text-8xl">
          <span className="text-[#A695FF]">Coming</span>
          <span className="text-white"> </span>
          <span className="text-[#A695FF]">Soon</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mb-16 text-lg leading-relaxed text-white md:text-2xl">
          From bold bowls to iconic brands —
          <br />
          the future of food is cooking at Byte and Bite Foods.
        </p>

        {/* Email Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 mb-8 md:flex-row md:max-w-1/3"
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
            className="px-8 py-4 font-medium text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-100"
          >
            Notify Me
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-6 md:p-8">
        {/* Privacy Policy */}
        {/* <div>
          <a
            href="#"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
        </div> */}

        {/* Social Media Links */}
        {/* <div className="flex items-center space-x-6 text-gray-400">
          <a href="#" className="text-sm transition-colors hover:text-white">
            Facebook
          </a>
          <span>/</span>
          <a href="#" className="text-sm transition-colors hover:text-white">
            Instagram
          </a>
          <span>/</span>
          <a href="#" className="text-sm transition-colors hover:text-white">
            LinkedIn
          </a>
        </div> */}
      </footer>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-1/4 left-1/4 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
        <div className="absolute w-40 h-40 rounded-full bottom-1/4 right-1/4 bg-gradient-to-br from-blue-500 to-green-500 opacity-10 blur-3xl"></div>
        <div className="absolute w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default GradientComingSoonPage;
