import Image from "next/image";
import React from "react";

interface ProjectProps {
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({
  number,
  title,
  description,
  imageLight,
  imageDark,
  reverse = false,
  link = "",
}) => {
  return (
    <div>
      <div
        className={`mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Conditionally rendered image on the left or right based on "reverse" prop */}
        <div className={`${reverse ? "order-last" : ""} flex`}>
          {/* Light Mode Image */}
          <Image
            className="w-full rounded-lg dark:hidden"
            src={imageLight}
            alt={`${title} Project Image Light`}
            width={1100}
            height={900}
          />
          {/* Dark Mode Image */}
          <Image
            className="hidden w-full rounded-lg dark:block"
            src={imageDark}
            alt={`${title} Project Image Dark`}
            width={1100}
            height={900}
          />
        </div>
        <div className="my-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-white">
            {number}
          </h2>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-white">
            {title}
          </h2>
          <p className="mb-6 font-light text-zinc-500 md:text-lg">
            {description}
          </p>
          {link && (
            <a
              type="button"
              className="inline-flex items-center p-1 text-center text-xs text-primary-white hover:text-black hover:underline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mr-1"
                src="/button/linkWhite.svg"
                alt="Link Icon"
                width={16}
                height={16}
              />
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
