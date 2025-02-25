import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:my-16 lg:px-28 my-8 px-5 flex flex-col items-center"
            id="contact"
        >
            <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl lg:text-4xl text-center mb-8"
            >
                Contact <span className="font-extrabold">Me</span>
            </motion.h2>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="text-[#71717A] text-sm/6 lg:text-base mt-0 lg:mt-0">
                    사실 저는 말을 잘 하는 강사가 아닙니다.
                    <br /> 말을 잘 할 수 있게 만들어주는 게 제일 중요한 말 잘
                    하는 스피치 강사. <br />
                    누구?
                </p>
                <div className="font-extrabold text-2xl lg:text-5xl mt-2 lg:mt-4 space-y-1 lg:space-y-3">
                    <h2>
                        <span
                            className="text-white"
                            style={{ WebkitTextStroke: "1px black" }}
                        >
                            김민준
                        </span>{" "}
                        입니다.
                    </h2>
                </div>

                <div className="font-semibold text-sm lg:text-xl flex items-center mt-6 gap-2 lg:gap-4">
                    <motion.a
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 group"
                        href="mailto:firelikeboy@naver.com"
                    >
                        <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                            <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
                        </span>
                        firelikeboy@naver.com
                    </motion.a>

                    <motion.a
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 group"
                        href="tele:01049308974"
                    >
                        <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                            <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
                        </span>
                        010-4930-8974
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
}
