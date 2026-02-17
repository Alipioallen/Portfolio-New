"use client";
import React, { useState, useEffect } from "react";
import { MapPin, FileText, Mail, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
      {/* Profile Image */}
      <div
        className="relative w-44 h-44 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? "/allen-hover.png" : "/allen.png"}
          alt="Profile"
          fill
          className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Profile Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-4xl md:text-2xl font-bold text-black dark:text-white">Allen Alipio</h1>
        </div>

        <div className="flex items-center gap-2 text-black dark:text-gray-400 mb-4">
          <MapPin size={18} />
          <span>Tarlac, Philippines</span>
        </div>

        <p className="text-lg text-black dark:text-gray-300 mb-6">
          Software Engineer \ Front End Developer
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/Alipio-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <FileText size={18} />
            Resume
          </Link>
          <Link
            href="mailto:alipioallen5@gmail.com"
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <Mail size={18} />
            Send Email
          </Link>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex-shrink-0">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;