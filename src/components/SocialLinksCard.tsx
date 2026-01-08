"use client";
import React from "react";
import Link from "next/link";
import { Link2, Linkedin, Github, Instagram, Twitter, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SocialLinksCard = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
    },
    {
      name: "YouTube",
      icon: <Youtube size={20} />,
      url: "https://youtube.com",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
          <Link2 className="text-pink-600 dark:text-pink-400" size={24} />
        </div>
        <h2 className="text-xl font-bold">Social Links</h2>
      </div>

      {/* Social Links List */}
      <div className="space-y-3">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-200 group overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />
            <div className="relative text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
              {social.icon}
            </div>
            <span className="relative font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksCard;