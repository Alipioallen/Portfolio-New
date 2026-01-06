"use client";
import React from "react";
import Card from "./Card";
import { User } from "lucide-react";

const AboutCard = () => {
  return (
    <Card
      title="About"
      icon={<User className="text-blue-600 dark:text-blue-400" size={24} />}
      iconBg="bg-blue-100 dark:bg-blue-900/30"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Frontend Developer with a solid foundation in web development, eager to
        continue growing technical skills in a collaborative team environment.
        Demonstrated ability to contribute effectively to diverse projects while
        maintaining a focus on frontend development.
      </p>
      <br />
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Motivated to take on new challenges and responsibilities that support
        both personal learning and team success in creating quality web
        solutions.
      </p>
    </Card>
  );
};

export default AboutCard;
