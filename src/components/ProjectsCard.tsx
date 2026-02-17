    "use client";
import React from "react";
import Link from "next/link";
import { FolderGit2, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  url: string;
}

const ProjectsCard = () => {
  const projects: Project[] = [
    {
      title: "WAH COOP",
      description: "Internship Project (COOP web app)",
      url: "https://github.com/dznice/WAHIE-COOP",
    },
    {
      title: "Chunk Nibbles (SHOPIFY)",
      description: "Online store for premium snack products ",
      url: "https://chunknibbles.com",
    },
    {
      title: "Radical (Next.js)",
      description: "Multimedia site for artists and studios",
      url: "http://radicalmusic.netlify.app/",
    },
    {
      title: "Clohane (Wordpress)",
      description: "Site for beautiful Interiors",
      url: "https://clohane.ie",
    },
  ];

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
            <FolderGit2 className="text-orange-600 dark:text-orange-400" size={24} />
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white">Recent Projects</h2>
        </div>
        <button className="text-sm text-black dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 flex items-center gap-1">
          View All
          <ExternalLink size={14} />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 cursor-pointer group overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />
            <h3 className="relative font-semibold text-black dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="relative text-sm text-black dark:text-gray-400 mb-3">
              {project.description}
            </p>
            <div className="relative inline-flex items-center gap-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-xs font-mono text-black dark:text-gray-300">
              {project.url}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;