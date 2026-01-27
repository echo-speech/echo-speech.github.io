import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import LogoNaver from "/assets/naver.svg";
import LogoKakaoTalk from "/assets/kakaotalk.svg";
import LogoKmong from "/assets/kmong.svg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const { t, i18n } = useTranslation();
    const socialLinks = [
        {
            Icon: LogoNaver,
            href: "mailto:firelikeboy@naver.com",
            bgColor: "bg-green-500",
            size: 32,
        },
        {
            Icon: LogoKmong,
            href: "https://kmong.com/gig/431560",
            bgColor: "bg-white",
            size: 28,
        },
        {
            Icon: LogoKakaoTalk,
            href: "https://open.kakao.com/o/sfTeJJng",
            bgColor: "bg-yellow-400",
            size: 28,
        },
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
                            {t("home.title1")}{" "}
                            <TypeAnimation
                                key={i18n.language}
                                sequence={[t("home.title2"), 1000]}
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
                            {t("home.title3")}{" "}
                            <TypeAnimation
                                key={i18n.language + "2"}
                                sequence={[t("home.title4"), 1000]}
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
                            {t("home.title5")}{" "}
                            <TypeAnimation
                                key={i18n.language + "3"}
                                sequence={[t("home.title6"), 1000]}
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
                            <span className="font-extrabold">{t("home.role")}</span>{" "}
                            <span
                                className="text-white font-extrabold"
                                style={{ WebkitTextStroke: "1px black" }}
                            >
                                {t("home.name")}
                            </span>
                        </motion.h2>
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
                        {socialLinks.map(
                            ({ Icon, href, bgColor, size }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    // className={`${bgColor} p-2 lg:p-3 rounded border-2 border-black`}
                                    className={`${bgColor} w-12 h-12 p-2 lg:p-3 rounded border-2 border-black flex justify-center items-center`}
                                    whileHover={{
                                        scale: 1.1,
                                        // backgroundColor: "#000",
                                        backgroundColor: null,
                                        color: "#fff",
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {/* <Icon className="w-4 h-4 lg:w-5 lg:h-5" /> */}
                                    <img
                                        src={Icon}
                                        alt="icon"
                                        // className="w-4 h-4 lg:w-5 lg:h-5"
                                        className={`max-w-[${size}px] max-h-[${size}px] object-contain`}
                                    />
                                </motion.a>
                            )
                        )}
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
                        className="w-auto h-auto max-w-full rounded-lg shadow-lg"
                        src="/assets/minjun-kim-main.jpg"
                        alt="Minjun Kim"
                    />
                </motion.div>
            </div>
        </div>
    );
}
