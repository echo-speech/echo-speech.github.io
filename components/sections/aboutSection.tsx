import Image from "next/image";
import React from "react";
import { aboutConfig, AboutContent } from "../../config/aboutConfig";

const AboutSection: React.FC = () => {
  const { title, imageSrc, imageAlt, paragraphs } = aboutConfig;

  return (
    <section
      id="about"
      className="md:py-15 scroll-mt-navbar-height bg-primary-white px-4 py-10 pt-navbar-height md:px-20"
    >
      <div className="mx-auto grid max-w-screen-xl gap-y-8 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-x-12">
        {/* Image Content */}
        <div className="order-first flex justify-center lg:order-none lg:col-span-5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-contain"
            width={600}
            height={600}
          />
        </div>

        {/* Text Content */}
        <div className="order-last text-center lg:order-none lg:col-span-7 lg:text-left">
          <h1 className="text-display-medium font-light text-primary-black">
            {title.split(" ")[0]}{" "}
            <span className="font-extrabold">{title.split(" ")[1]}</span>
          </h1>
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className="mb-6 max-w-2xl text-paragraph-p2 font-light text-zinc-500 lg:mb-8"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
