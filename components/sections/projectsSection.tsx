import React from "react";
import Project from "../project";
import {
  projectsConfig,
  Project as ProjectType,
} from "../../config/projectsConfig";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-navbar-height bg-primary-black px-4 py-10 pt-navbar-height md:px-20 md:py-16"
    >
      <div className="mb-4 text-center md:mb-8">
        <h1 className="text-display-medium font-regular text-primary-white">
          My <span className="font-extrabold">Projects</span>
        </h1>
      </div>
      {projectsConfig.map((project: ProjectType) => (
        <Project
          key={project.id}
          number={project.number}
          title={project.title}
          description={project.description}
          imageLight={project.imageLight}
          imageDark={project.imageDark}
          reverse={project.reverse}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
