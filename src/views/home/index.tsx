"use client";
import React from "react";
import ProfileCard from "@/src/components/ProfileCard";
import AboutCard from "@/src/components/AboutCard";
import TechStackCard from "@/src/components/TechStackCard";
import SocialLinksCard from "@/src/components/SocialLinksCard";
import ExperienceCard from "@/src/components/ExperienceCard";
import ProjectsCard from "@/src/components/ProjectsCard";
import CertificationsCard from "@/src/components/CertificationsCard";

const HomeView = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-12">
      {/* Profile Section - Standalone at top */}
      <ProfileCard />

      {/* Masonry Grid Layout - Cards only */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Left Column */}
        <div className="space-y-6">
          <AboutCard />
          <TechStackCard />
          <SocialLinksCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ExperienceCard />
          <ProjectsCard />
          <CertificationsCard />
        </div>
      </div>
    </section>
  );
};

export default HomeView;