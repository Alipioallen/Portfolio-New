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
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${exp.current ? 'bg-green-500' : 'bg-gray-400'}`} />
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              <p className="text-[14px] text-gray-600 dark:text-gray-400">
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