"use client";
import React from "react";
import Card from "./Card";
import { Code2 } from "lucide-react";

const TechStackCard = () => {
  const techStacks = {
    Frontend: [
      "HTML",
      "CSS",
      "SCSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Shadcn UI",
      "Chakra UI",
      "Radix UI",
      "JQuery",
    ],
    Backend: ["PHP"],
    Platforms: [
      "Wordpress (Elementor, Breakdance, WPBakery, ACF, Divi, Gutenburg Block)",
      "Shopify",
      "Webflow",
      "Framer",
    ],
    Tools: [
      "Visual Studio Code",
      "Git",
      "GitHub",
      "GitHub Desktop",
      "GitHub Copilot",
      "Strapi",
      "Netlify",
      "Vercel",
      "Render",
      "Expo GO",
      "Mapbox",
      "Mailchimp",
      "Rebuy App",
      "Replo",
    ],
  };

  return (
    <Card
      title="Tech Stack"
      icon={<Code2 className="text-purple-600 dark:text-purple-400" size={24} />}
      iconBg="bg-purple-100 dark:bg-purple-900/30"
    >
      {Object.entries(techStacks).map(([category, techs]) => (
        <div key={category} className="mb-4 last:mb-0">
          <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-2">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="relative px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-[14px] font-medium text-gray-700 dark:text-gray-300 overflow-hidden cursor-default transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 group"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />
                <span className="relative">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TechStackCard;