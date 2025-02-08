// src/components/ContactSection.tsx

import React from "react";
import { contactConfig } from "../../config/contactConfig"; // Import the config

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-navbar-height bg-primary-white px-4 py-16 pt-navbar-height md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-screen-lg justify-items-center gap-8 text-center ">
        {/* Right Section: Text */}
        <div className="space-y-4">
          <h1 className="text-display-medium font-extrabold text-primary-black">
            Let&apos;s{" "}
            <mark className="rounded bg-primary-black px-2 text-primary-white">
              talk
            </mark>{" "}
            for <br />
            Something <span className="text-primary-black">special</span>
          </h1>
          <p className="text-paragraph-p2 font-light text-zinc-500">
            {contactConfig.description}
          </p>
          <p className="pb-6 text-h4 font-semibold text-primary-black">
            {contactConfig.email} {/* Display the email from the config */}
          </p>
          <a
            href={`mailto:${contactConfig.email}?subject=Contact&body=Hello,%0D%0A%0D%0AI would like to get in touch!`}
            className="mx-auto mt-10 w-full rounded-md bg-primary-black px-5 py-3 text-sm font-medium text-primary-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-black md:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
