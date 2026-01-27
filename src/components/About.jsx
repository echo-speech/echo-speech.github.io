import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
    const { t } = useTranslation();

    return (
        <div
            className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
            id="about"
        >
            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10 }}
                viewport={{ once: true }}
            >
                <img src="/assets/minjun-kim-sub.jpg" alt="About Me Picture" />
            </motion.div>

            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 10,
                    delay: 0.2,
                }}
                viewport={{ once: true }}
            >
                <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
                    {t("about.title")} <span className="font-extrabold">{t("about.me")}</span>
                </h2>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
                    {t("about.p1")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p2")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p3")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p4")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p5")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p6")}
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    {t("about.p7")}
                </p>
            </motion.div>
        </div>
    );
}
