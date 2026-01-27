import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [hasShadow, setHasShadow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 110,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
                hasShadow ? "shadow-md" : "shadow-none"
            }`}
        >
            <a
                href="https://kmong.com/category/103102?page=1&sort=RANKING"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD400] w-full text-center py-2 text-sm font-bold block hover:underline whitespace-pre-line"
            >
                {t("navbar.banner")}
            </a>
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-28 py-4">
                {/* <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection("home")}
                    className="h-9 cursor-pointer"
                    src="/assets/logo.svg"
                    alt="Logo"
                /> */}
                <motion.h2
                    className="font-black"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {t("navbar.title")}
                </motion.h2>

                <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
                    {["about", "skills", "experience", "curriculums", "contact"].map(
                        (section) => (
                            <motion.li
                                key={section}
                                className="group"
                                whileHover={{ scale: 1.1 }}
                            >
                                <button
                                    onClick={() => scrollToSection(section)}
                                >
                                    {t(`navbar.${section}`)}
                                </button>
                                <motion.span
                                    className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                                    layout
                                ></motion.span>
                            </motion.li>
                        )
                    )}
                </ul>

                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex gap-2 font-bold">
                        <button
                            onClick={() => i18n.changeLanguage("ko")}
                            className={
                                i18n.language === "ko"
                                    ? "text-black"
                                    : "text-gray-400"
                            }
                        >
                            KO
                        </button>
                        <span>|</span>
                        <button
                            onClick={() => i18n.changeLanguage("en")}
                            className={
                                i18n.language === "en"
                                    ? "text-black"
                                    : "text-gray-400"
                            }
                        >
                            EN
                        </button>
                    </div>
                </div>

                <motion.button
                    className="lg:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.2 }}
                >
                    {isOpen ? <HiX /> : <HiOutlineMenu />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow"
                    >
                        <button
                            className="absolute top-5 right-5 text-2xl"
                            onClick={() => setIsOpen(false)}
                        >
                            <HiX />
                        </button>
                        <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
                            {["about", "skills", "experience", "curriculums", "contact"].map(
                                (section) => (
                                    <motion.li
                                        key={section}
                                        className="border-b"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <button
                                            onClick={() =>
                                                scrollToSection(section)
                                            }
                                        >
                                            {t(`navbar.${section}`)}
                                        </button>
                                    </motion.li>
                                )
                            )}
                        </ul>

                        <div className="flex gap-2 font-bold ml-16 mt-6">
                            <button
                                onClick={() => {
                                    i18n.changeLanguage("ko");
                                    setIsOpen(false);
                                }}
                                className={
                                    i18n.language === "ko"
                                        ? "text-black"
                                        : "text-gray-400"
                                }
                            >
                                KO
                            </button>
                            <span>|</span>
                            <button
                                onClick={() => {
                                    i18n.changeLanguage("en");
                                    setIsOpen(false);
                                }}
                                className={
                                    i18n.language === "en"
                                        ? "text-black"
                                        : "text-gray-400"
                                }
                            >
                                EN
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
