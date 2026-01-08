"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Mail, Users } from "lucide-react";
import Image from "next/image";

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
      {/* Profile Image */}
      <div
        className="relative w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700 cursor-pointer group"
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
          <h1 className="text-4xl md:text-4xl font-bold">Allen Alipio</h1>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <MapPin size={18} />
          <span>Tarlac, Philippines</span>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Software Engineer \ Front End Developer
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
            <Calendar size={18} />
            Schedule a Call
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Mail size={18} />
            Send Email
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle (Optional) */}
      <div className="flex-shrink-0">
        <button className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          ☀️
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;