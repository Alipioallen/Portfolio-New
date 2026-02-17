"use client";
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  icon?: ReactNode;
  iconBg?: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, icon, iconBg, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className={`p-2 rounded-lg ${iconBg || "bg-gray-100 dark:bg-gray-700"}`}>
            {icon}
          </div>
        )}
        <h2 className="text-lg font-bold text-black dark:text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;