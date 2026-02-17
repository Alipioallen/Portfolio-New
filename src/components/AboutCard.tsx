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
      <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
        Frontend Developer with a solid foundation in web development, eager to
        continue growing technical skills in a collaborative team environment.
        Demonstrated ability to contribute effectively to diverse projects while
        maintaining a focus on frontend development.
      </p>
      <br />
      <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
        Motivated to take on new challenges and responsibilities, I continuously
        strive to improve my skills and stay updated with modern frontend
        practices.
      </p>
      <br />
      <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
        {" "}
        I enjoy collaborating with teammates, sharing ideas, and contributing to
        efficient, user-focused web solutions that help projects move forward
        successfully. I take pride in being reliable and adaptable, especially
        when timelines change or priorities shift.
      </p>
      <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
        <br />
        My goal is always to learn from every project while helping the team
        deliver clean, responsive, and meaningful digital experiences.
      </p>
    </Card>
  );
};

export default AboutCard;
