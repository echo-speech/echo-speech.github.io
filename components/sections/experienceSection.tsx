import Image from "next/image";
import React from "react";
import { experienceConfig, Experience } from "../../config/experienceConfig";

const ExperienceSection: React.FC = () => {
  interface ExperienceCardProps {
    companyLogo: string;
    companyName: string;
    role: string;
    duration: string;
    description: string;
  }

  const ExperienceCard: React.FC<ExperienceCardProps> = ({
    companyLogo,
    companyName,
    role,
    duration,
    description,
  }) => {
    return (
      <div className="flex flex-col rounded-md border-2 border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-transparent hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-zinc-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 flex items-center md:mb-0">
            <Image
              src={companyLogo}
              alt={`${companyName} Logo`}
              className="mr-2 size-8 object-contain"
              width={32}
              height={32}
            />
            <h2 className="mt-2 text-h5 tracking-wide text-primary-white">
              <span className="font-semibold">{role} </span>
              at
              <span className="font-semibold"> {companyName}</span>
            </h2>
          </div>
          <span className="text-sm text-zinc-300 ">{duration}</span>
        </div>
        <p className="mt-6 text-paragraph-p3 font-light text-zinc-300">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="md:py-15 scroll-mt-navbar-height bg-primary-black px-4 py-10 pt-navbar-height md:px-20"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h1 className="text-display-medium font-light text-primary-white">
            My <span className="font-extrabold">Experience</span>
          </h1>
        </div>

        {/* Experiences Grid */}
        <div className="space-y-6">
          {experienceConfig.map((experience: Experience) => (
            <ExperienceCard
              key={experience.id}
              companyLogo={experience.companyLogo}
              companyName={experience.companyName}
              role={experience.role}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
