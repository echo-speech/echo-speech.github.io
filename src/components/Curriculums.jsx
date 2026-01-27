import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export default function Curriculums() {
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(null);

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const curriculums = [
        {
            id: 1,
            title: t("curriculums.c1.title"),
            description: t("curriculums.c1.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 2,
            title: t("curriculums.c2.title"),
            description: t("curriculums.c2.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 3,
            title: t("curriculums.c3.title"),
            description: t("curriculums.c3.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 4,
            title: t("curriculums.c4.title"),
            description: t("curriculums.c4.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 5,
            title: t("curriculums.c5.title"),
            description: t("curriculums.c5.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 6,
            title: t("curriculums.c6.title"),
            description: t("curriculums.c6.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 7,
            title: t("curriculums.c7.title"),
            description: t("curriculums.c7.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 8,
            title: t("curriculums.c8.title"),
            description: t("curriculums.c8.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 9,
            title: t("curriculums.c9.title"),
            description: t("curriculums.c9.description"),
            image: "/assets/project1.png",
            link: "#",
        },
        {
            id: 10,
            title: t("curriculums.c10.title"),
            description: t("curriculums.c10.description"),
            image: "/assets/project1.png",
            link: "#",
        },
    ];

    return (
        <div
            className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
            id="curriculums"
        >
            <h2 className="text-2xl lg:text-4xl text-center text-white">
                {t("curriculums.title")} <span className="font-extrabold">{t("curriculums.subtitle")}</span>
            </h2>

            <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
                {curriculums.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`flex justify-between items-center flex-col ${
                            index % 2 === 0
                                ? "lg:flex-row"
                                : "lg:flex-row-reverse"
                        }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 10,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
                            {/* <img
                                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                                src={project.image}
                                alt={project.title}
                            /> */}
                        </div>

                        <div 
                            className="lg:w-1/2 lg:space-y-8 space-y-6 cursor-pointer"
                            onClick={() => toggleOpen(project.id)}
                        >
                            <h2 className="font-extrabold text-white mt-6 lg:mt-0 text-3xl lg:text-5xl">
                                {String(project.id).padStart(2, "0")}
                            </h2>
                            <p className="font-bold text-white text-xl lg:text-3xl leading-snug group-hover:text-[#FFD400] transition-colors">
                                {project.title}
                            </p>
                            
                            <div className="text-gray-300 text-base leading-relaxed lg:text-lg lg:leading-loose">
                                <div className="font-semibold text-white mb-2 hover:text-[#FFD400] transition-colors flex items-center gap-2">
                                    {t("curriculums.more")}
                                    <span className={`transition-transform text-xs ${openId === project.id ? "rotate-180" : ""}`}>▼</span>
                                </div>
                                <AnimatePresence>
                                    {openId === project.id && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden mt-2"
                                        >
                                            {project.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* <a
                                href={project.link}
                                className="text-white mt-3 block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TbExternalLink size={23} />
                            </a> */}
                        </div>
                    </motion.div>
                ))}

                <h2 className="text-xl lg:text-2xl text-center text-white">
                    {t("curriculums.footer")}
                </h2>
            </div>
        </div>
    );
}
