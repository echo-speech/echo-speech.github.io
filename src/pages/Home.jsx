import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const socialLinks = [
        { Icon: BiLogoGmail, href: "mailto:firelikeboy@naver.com" },
        {
            Icon: IoLogoLinkedin,
            href: "https://kmong.com/gig/431560",
        },
        { Icon: IoLogoTwitter, href: "https://open.kakao.com/o/sfTeJJng" },
    ];

    return (
        <div className="mt-20" id="home">
            <div className="flex justify-around py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
                <motion.div
                    // className="lg:w-[45%]"
                    className="lg:w-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <motion.div
                        className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    staggerChildren: 0.2,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            재밌지만{" "}
                            <TypeAnimation
                                sequence={["진지하게", 1000]}
                                speed={10}
                                style={{ fontWeight: 600 }}
                                repeat={Infinity}
                                cursor={false}
                            />
                        </motion.h2>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            이상적이지만{" "}
                            <TypeAnimation
                                sequence={["현실적이게", 1000]}
                                speed={10}
                                style={{ fontWeight: 600 }}
                                repeat={Infinity}
                                cursor={false}
                            />
                        </motion.h2>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            당신의 말에{" "}
                            <TypeAnimation
                                sequence={["매력과 힘을 만들어 줄", 1000]}
                                speed={10}
                                style={{ fontWeight: 600 }}
                                repeat={Infinity}
                                cursor={false}
                            />
                        </motion.h2>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <span className="font-extrabold">스피치 강사</span>{" "}
                            <span
                                className="text-white font-extrabold"
                                style={{ WebkitTextStroke: "1px black" }}
                            >
                                [ 김민준 ]
                            </span>
                        </motion.h2>
                        {/* <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            Based In{" "}
                            <span className="font-extrabold">India.</span>
                        </motion.h2> */}
                    </motion.div>

                    {/* <motion.p
                        className="text-[#71717A] text-sm lg:text-base mt-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Passionate about technology, I specialize in Web
                        Development and Web Designing. I’m focused on building
                        innovative solutions and continuously expanding my
                        skills. My goal is to grow as a developer and contribute
                        to impactful projects in the tech industry.
                    </motion.p> */}

                    <motion.div
                        className="flex items-center gap-x-5 mt-10 lg:mt-14"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        {socialLinks.map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#000",
                                    color: "#fff",
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    // todo: resizing text and image together
                    // className="lg:w-[50%] w-full"
                    className="lg:w-auto w-full flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <img
                        // className="h-full w-full"
                        className="w-auto h-auto max-w-full rounded-lg shadow-lg blur-[1px]"
                        src="/assets/minjun-kim-main.jpg"
                        alt="Minjun Kim"
                    />
                </motion.div>
            </div>
        </div>
    );
}
