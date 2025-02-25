import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
                    About <span className="font-extrabold">Me</span>
                </h2>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
                    자존감이 높은 사람 중에 말을 못 하거나 대화를 두려워하는
                    사람들은 거의 없습니다. 자존감이 높다는 건 본인을 존중하고
                    남도 존중할 줄 알기 때문입니다. 이런 모습에서 자신감은
                    자연히 뿜어져 나오고, 여유는 자연히 따라오게 되며, 자신감과
                    여유있는 모습에 사람들은 편안함과 호감,매력을 느낍니다.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    따라 할 수도 없는 방법만 던지는 게 아니라, 이렇게 중요한
                    자존감을 만들어 드리는 강사. 말 잘 하는 사람처럼 보일 수
                    있게 하는 게 아니라, 말 잘 하는 매력적인 사람이 되게 만드는
                    스피치 강사 김 민 준 입니다.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    아무리 좋은 칼이 있어도 이걸 휘두를 근력이 없다면 칼은
                    무용지물입니다. 반대로 내가 무엇이든 들 수 있는 근력이
                    있다면 꼭 칼이 아니라도 무엇이든 들수 있습니다. 중요한 것은
                    “칼” 이라는 [방법]이 아닌 무엇이든 쓸 수 있는 “근력” 이라는
                    [자존감] 입니다.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    무작정 칼만 던져주는 것이 아닌 근력도 같이 기를 수 있게
                    도와주는 스피치 강사 김민준은 정형화되고 형식적인 소모성
                    강의나 실천할 수 없는 방법이 아닌! 저만 할 수 있는! 여태까지
                    그 누구도 하지 못한 스타일! 자존감을 중심으로한 스피치
                    강의를 통해 단순히 쉽고 무책임한 방법론적 강의로 정해진 틀에
                    사람을 맞추는 것에서 벗어나, 개인과 집단의 상태와 필요한
                    것에 맞춰서 그들이 스스로 나아갈 수 있도록 진실되고 유의미한
                    강의를 합니다.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    이를 통해 개인 교육 횟수로는 구체적으로 1의 자릿수까지
                    정확하게 딱 말하긴 어려워도 감히 네 자릿수에 육박한다고 말할
                    수 있으며, 여러 기업,기관,병원등 다양한 단체에 신선한 울림과
                    CS퀄리티,소통과 팀워크에 유쾌한 발전을 만들었습니다.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    그리고 현재,누구도 볼 수 없던 칠흑 같은 밑바닥에서부터
                    저만의 커리큘럼으로 가장 큰 재능마켓 [크몽]에 기라성 같은
                    기존 선배들을 이겨내고 스피치 분야 1등을 쟁취한 사람, 많은
                    분들에게 자존감이라는 나답게 살 수 있는 행복과 말하는
                    즐거움을 드리고 있는 사람,
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    저는 자존감 스피치 강사 김 민 준 입니다. 반갑습니다!
                </p>
            </motion.div>
        </div>
    );
}
