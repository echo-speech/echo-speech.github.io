import React, { useState } from "react";
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
    // todo: change icon
    const [skills] = useState([
        {
            id: 1,
            name: (
                <>
                    자신감
                    <br />
                    자존감
                </>
            ),
            icon: <FaJs size={50} />,
        },
        {
            id: 2,
            name: (
                <>
                    발성
                    <br />
                    전달력
                </>
            ),
            icon: <FaReact size={50} />,
        },
        {
            id: 3,
            name: (
                <>
                    화술
                    <br />
                    목소리
                </>
            ),
            icon: <FaNodeJs size={50} />,
        },
        {
            id: 4,
            name: (
                <>
                    면접
                    <br />
                    발표
                </>
            ),
            icon: <FaPython size={50} />,
        },
        {
            id: 5,
            name: (
                <>
                    CS 교육
                    <br />
                    스크립트
                </>
            ),
            icon: <FaDatabase size={50} />,
        },
        {
            id: 6,
            name: (
                <>
                    연사코칭
                    <br />
                    행사진행
                </>
            ),
            icon: <FaJava size={50} />,
        },
    ]);

    // todo: change company name and adjust company icon
    const [experiences] = useState([
        {
            id: 1,
            company: "Youtube",
            role: "크몽",
            period: "Nov 2019 - Present",
            description:
                "현시점 스피치 분야 1위 ( 거래 횟수 , 리뷰 ) 독보적이고 독창적인 커리큘럼.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 2,
            company: "Youtube",
            role: "HRF 휴먼 프로덕션",
            period: "Jan 2017 - Oct 2019",
            description:
                "“즐거운 강사는 무서울 게 없다” 전문가(교사,미술전공자,요리사,공예사등)들을 위한 전문 강사 스피치 컨설팅.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 3,
            company: "Youtube",
            role: "경기도 “사람책”",
            period: "Jan 2017 - Oct 2019",
            description: "세계 인권 포럼 연사들을 위한 연설 컨설팅 및 코칭.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 4,
            company: "Youtube",
            role: "LQL 르 카르띠에 라탱",
            period: "Jan 2017 - Oct 2019",
            description: "잘 말하고 잘 설득시키는 힘 CS교육.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 5,
            company: "Youtube",
            role: "MRT 여행사 서비스 센터",
            period: "Jan 2017 - Oct 2019",
            description:
                "CS 메뉴얼 및 프로세스 정립 ,스크립트 작성 ,컴플레인 CS 교육.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 6,
            company: "Youtube",
            role: "의왕시 “인생대학”",
            period: "Jan 2017 - Oct 2019",
            description:
                "20~50대 공무원,CEO,영업직,퇴직인들을 위한 “나답게 살고 나답게 말하기” 스피치 강의.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 7,
            company: "Youtube",
            role: "하나금융 (융합기술원)",
            period: "Jan 2017 - Oct 2019",
            description:
                "“나를 말할 수 있는 팀워크와 커뮤니케이션에 대하여”  스피치 강의.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 8,
            company: "Youtube",
            role: "우버 테크놀로지스 개발자",
            period: "Jan 2017 - Oct 2019",
            description:
                "새로운 팀원,새로운 프로젝트에서 자신있는 나를 만들기.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 9,
            company: "Youtube",
            role: "인천 지부 직장인들을 위한 스킬업 모임",
            period: "Jan 2017 - Oct 2019",
            description: "매력적인 끌어당김을 자아내는 자기소개 만들기.",
            logo: "/assets/youtube.svg",
        },
        {
            id: 10,
            company: "Youtube",
            role: "병원,학원,스마트 스토어 오너",
            period: "Jan 2017 - Oct 2019",
            description: "직원과 고객을 상대할 때 오너로써 갖춰야 할 스피치.",
            logo: "/assets/youtube.svg",
        },
    ]);

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
                    My <span className="font-extrabold">Skills</span>
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
                            {skill.icon}
                            <p className="text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span className="font-extrabold">Experience</span>
                </motion.h2>

                {/* Experience Cards */}
                <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
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
                                    <img
                                        className="w-7"
                                        src={exp.logo}
                                        alt=""
                                    />
                                    <h2 className="font-semibold text-white text-lg lg:text-xl">
                                        {exp.role} at {exp.company}
                                    </h2>
                                </div>
                                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
