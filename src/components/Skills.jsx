import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaJava,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
    const { t } = useTranslation();

    // todo: change icon
    const skills = [
        {
            id: 1,
            name: <Trans i18nKey="skills.s1.name" components={{ br: <br /> }} />,
            icon: <FaJs size={50} />,
        },
        {
            id: 2,
            name: <Trans i18nKey="skills.s2.name" components={{ br: <br /> }} />,
            icon: <FaReact size={50} />,
        },
        {
            id: 3,
            name: <Trans i18nKey="skills.s3.name" components={{ br: <br /> }} />,
            icon: <FaNodeJs size={50} />,
        },
        {
            id: 4,
            name: <Trans i18nKey="skills.s4.name" components={{ br: <br /> }} />,
            icon: <FaPython size={50} />,
        },
        {
            id: 5,
            name: <Trans i18nKey="skills.s5.name" components={{ br: <br /> }} />,
            icon: <FaDatabase size={50} />,
        },
        {
            id: 6,
            name: <Trans i18nKey="skills.s6.name" components={{ br: <br /> }} />,
            icon: <FaJava size={50} />,
        },
    ];

    const experienceData = [
        { id: 1, key: "kmong", logo: "/assets/youtube.svg" },
        { id: 2, key: "hrf", logo: "/assets/hrf.svg" },
        { id: 3, key: "kma", logo: "/assets/korea.svg" },
        { id: 4, key: "lql", logo: "/assets/lql.svg" },
        { id: 5, key: "mrt", logo: "/assets/mrt.svg" },
        { id: 6, key: "uiwang", logo: "/assets/youtube.svg" },
        { id: 7, key: "hana", logo: "/assets/hanabank.svg" },
        { id: 8, key: "uber", logo: "/assets/uber.svg" },
        { id: 9, key: "incheon", logo: "/assets/youtube.svg" },
        { id: 10, key: "owners", logo: "/assets/hospital.svg" },
        { id: 11, key: "welovesis", logo: "/assets/youtube.svg" },
        { id: 12, key: "gunpo", logo: "/assets/youtube.svg" },
        { id: 13, key: "yoonart", logo: "/assets/youtube.svg" },
    ];

    return (
        <div className="mt-3 lg:mt-16" id="skills">
            <div className="px-5 lg:px-28">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {t("skills.title")} <span className="font-extrabold">{t("skills.subtitle")}</span>
                </motion.h2>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: skill.id * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            {/* {skill.icon} */}
                            <p className="text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16" id="experience">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {t("experience.title")}
                </motion.h2>

                {/* Experience Cards */}
                <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`bg-black p-5 border rounded-md hover:bg-[#27272A] transition-all cursor-pointer ${
                                exp.key === "kmong"
                                    ? "border-[#FFD400] border-2"
                                    : "border-[#D4D4D8]"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                                <div className="flex items-center gap-5">
                                    {/* <img
                                        className="w-7"
                                        src={exp.logo}
                                        alt=""
                                    /> */}
                                    <h2 className="font-semibold text-white text-lg lg:text-xl">
                                        {t(`experience.${exp.key}.role`)}
                                    </h2>
                                </div>
                                {/* <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                                    {exp.period}
                                </span> */}
                            </div>
                            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                                {t(`experience.${exp.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
