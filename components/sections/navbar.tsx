"use client";

import React, { useState } from "react";
import Button from "../button";
import { IconDownload } from "@tabler/icons-react";
import Logo from "../logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="h-navbar-height fixed start-0 top-0 z-20 w-full border-b border-primary-neutral bg-primary-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <Logo />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Resume Button */}
          <a
            href="/resume/resume_Justin_Osagie.pdf"
            download="Justin-Osagie-Resume.pdf"
          >
            <Button size={"medium"} variant={"default"}>
              <span className="mr-2">Resume</span>
              <IconDownload stroke={2} />
            </Button>
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-primary-neutral hover:bg-primary-neutral hover:text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-neutral dark:text-primary-white dark:hover:bg-primary-neutral dark:focus:ring-primary-neutral md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          {/* Links */}
          <ul className="mt-4 flex flex-col rounded-lg  bg-primary-white p-4 font-medium md:mt-0 md:flex-row md:space-x-6 md:space-y-0 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block rounded px-3 py-1.5 text-sm text-primary-black hover:bg-primary-neutral hover:text-primary-white md:px-4 md:py-2"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="block rounded px-3 py-1.5 text-sm text-primary-black hover:bg-primary-neutral hover:text-primary-white md:px-4 md:py-2"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded px-3 py-1.5 text-sm text-primary-black hover:bg-primary-neutral hover:text-primary-white md:px-4 md:py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block rounded px-3 py-1.5 text-sm text-primary-black hover:bg-primary-neutral hover:text-primary-white md:px-4 md:py-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded px-3 py-1.5 text-sm text-primary-black hover:bg-primary-neutral hover:text-primary-white md:px-4 md:py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
