"use client";
import React from "react";
import Card from "./Card";
import { Briefcase } from "lucide-react";

const ExperienceCard = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Fullstack HQ",
      year: "February 2024 – 2026",
      current: true,
    },
    {
      title: "Web Developer (Training)",
      company: "My Creative Panda INC.",
      year: "October 2023 – December 2023",
      current: false,
    },
    {
      title: "Web Developer – Frontend (Internship)",
      company: "Wireless Access for Health Inc.",
      year: "January 2023 – June 2023",
      current: false,
    },
  ];

  return (
    <Card
      title="Experience"
      icon={<Briefcase className="text-green-600 dark:text-green-400" size={24} />}
      iconBg="bg-green-100 dark:bg-green-900/30"
    >
      <div className="relative">
        {/* Continuous timeline line */}
        <div className="absolute left-[17px] top-6 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start gap-3 p-3 cursor-pointer group">
            {/* Timeline bullet */}
            <div className="relative flex-shrink-0 z-10">
              <div
                className={`w-3 h-3 rounded-full mt-1.5 transition-colors duration-200 border-2 ${
                  exp.current
                    ? 'bg-green-500 border-green-500'
                    : 'bg-gray-100 dark:bg-gray-800 border-gray-400 group-hover:bg-green-500 group-hover:border-green-500'
                }`}
              />
            </div>
            <div className="flex-1 pb-2">
              <h3 className="font-semibold text-lg text-black dark:text-gray-100">
                {exp.title}
              </h3>
              <p className="text-[14px] text-black dark:text-gray-400">
                {exp.company} • {exp.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;