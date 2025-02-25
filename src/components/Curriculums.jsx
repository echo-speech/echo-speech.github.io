import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const curriculums = [
    {
        id: 1,
        title: "대화를 잘 하는 비밀-듣기 그리고 말하기",
        description:
            "말 하는게 어렵다고 하시는 분들일수록 말을 잘 하려고 합니다. 이러다 보니 듣는 것을 잘 못하게 되고, 잘 듣질 못 하니 말은 더 못 하게 되는 상황이 반복됩니다. 대화가 두렵고 어려워지는 분들을 위한 클래스.대화를 즐기고 관계를 만들고 삶을 행복하게 만들어 드리는 듣기와 말하기에 정수에 대하여 강의해 드립니다.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 2,
        title: "말을 잘 하는 사람들은 말에 [힘]이 있다.",
        description:
            "“설명”이 아닌 “말”에는 힘이 있습니다. 힘이 있는 말은 매력과 설득력을 가지며 화자의 가치를 더해주기도, 만들어 주기도 합니다. 우리는 말을 잘 하고 싶어 하면서도 (말을 잘 한다는 것이 무엇이다)라고 설명하기 어려워 합니다. 말을 잘 하는 사람이 무엇인지 깨닫게 하고 이를 통해 자신의 고칠 점과 발전시킬 방향을 제시해 주는 클래스. 말 잘 하는 사람이 되기 위한 발돋움을 만들어주는 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 3,
        title: "여유로운 면접을 위한 여유로운 나 만들기.",
        description:
            "면접이 재밌는 게 생각만 해도 긴장이 되고, 당일은 더 긴장이 되고, 면접장에선 절 하얗게 만듭니다. 하지만 우리가 사회에 살아가면서 어디를 들어간다고 할지라도 면접은 피할 수 없는 긴장되는 상황입니다. 시작을 알리는 총성이 울리기 전 긴장해서 몸이 경직된 달리기 선수가 100m를 뛰던 500m를 뛰던 과연 잘 뛸 수 있을까요? 어떤 곳(기업,공기업,공무원,교육기관,공공기관,오디션등)에서 면접을 본다고 하더라도 긴장돼 있다면 난 나를 보여줄 수도 그리고 기억에 남을 수도 없을 겁니다. 심지어 내가 뭘 했는지도 기억이 안 남을 겁니다. 이런 문제를 야기하는 [긴장]을 안 하게 만드는 것이 아닌 자신감을 가지게 만들어서 여유가 따라올 수 있도록 만드는 클래스. 여러분을 면접에서 승리하게 할 핵심 키포인트 코칭과 , 실패와 도전에 대한 두려움,자신감 결핍을 해결해 줄 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 4,
        title: "매력적인 목소리와 효과적인 전달을 위한 클래스",
        description:
            "목소리고 작은 분들. 내 목소리가 매력이 없다고 생각하는 분들. 발음이 좋지 않고 전달력이 부족한 분들. 말을 흐리거나 제대로 끝맺지 못하고 자신감이 없어 보인다는 말을 듣는 분들을 위한 클래스. 문제점 파악과 트레이닝 방식까지 알려주는 클래스",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 5,
        title: "발표 혹은 다수의 앞에서 자신있는 나 만들기",
        description:
            "무대나 사람들 앞에 서면 머리가 하얗게 되며 모든 것을 망각하거나, 마치기에 급급한 분들이 많습니다. 갑작스러운 변수나,예상치 못한 질문을 받았을 때 횡설수설하게 되며 망치게 된 경우도 많을 겁니다. 이러한 여러분들이 놓치고 있는 중요한 포인트들을 말씀드리고 유연한 사고와 긴장된 분위기에서도 내 안에 여유를 가질 수 있도록 도와드리는 클래스. 우린 잘 하기 위해 하는 거지 겨우겨우 끝마치려고 하는 게 아닙니다. 강의를 들으셔도 여전히 긴장감은 있을 겁니다. 하지만 긴장감만 있는 것이 아니라 설렘과 기대감 그리고 이런 상황속에서 여유까지 가질 수 있도록 마인드를 강하게 만들어 드리는 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 6,
        title: "완벽한 사람은 없다. 너도 나도 우리 모두",
        description:
            "주변 사람들( 직장동료,친구,가족등 ) 의 눈치를 보고 “날 어떻게 생각하지 않을까” “내가 이렇게 말해도 되나?”  “나는 항상 왜 이러지” 이러한 자책과 위축의 늪에 빠져있는 분들에게 자존감과 자신감을 찾아 드리는 클래스.  완벽하지 않은 자신을 탓하며 상처 주거나 받는 걸 두려워하게 되고 소통의 단절로 마무리되는   안타까운 결말을 바꿔버릴 저와 함께! 나도 좋은 사람,멋진 사람, 잘 할 수 있는 사람이라는 것을 느끼며   대화를 통한 관계의 발전과 소통이 되는 직장 생활로 능률까지 올릴 수 있는 클래스",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 7,
        title: "실패하고 실패해도 스스로 일어날 수 있는 이유에 대하여",
        description:
            "자신을 변화시키고 싶으신 분들과 도전을 앞둔 분들 실패에 좌절중인 분들에게 굉장히 필요한 클래스.  우리는 항상 선택에 노출이 됩니다. 선택은 성공과 실패라는 두 결과 중에 하나를 꼭 쥐여주는데  보통 우리는 성공보단 실패를 많이 쥐게 되고 지난 선택을 후회하며 다시 일어나지 못하거나  다음 선택을 두려워하게 됩니다. 도전엔 선택이 필요하고 사람은 날 바꾸고자,발전시키고자 할 때  도전이 필요합니다. 이러한 도전과 선택이 또 실패해서 “날 괴롭히지 않을까” “ 안 변하지 않을까”라는 걱정보다는   실패를 받아 들이고 말할 수 있는 사람으로 만들어서, 오히려 실패한다 할지언정 실패로부터 자유롭게 만들어   자신감있게 자신의 이야기를 말할 수 있도록 만드는 자존감 스피치의 정수",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 8,
        title: "나를 말 할 수 있는 건 나뿐이다",
        description:
            "똑같은 벚나무라 해도 태어나는 위치가 다르고 꽃이 피는 시기가 다릅니다. 마찬가지로 사람마다 환경이 다르고 성공의 시기가 다릅니다.  누군가는 쉽게 목표를 이룰 수 있고, 누군가는 힘들게 해도 목표를 이루지 못하는 경우도 있습니다.   이렇게 우리는 불합리한 세상에서 살고 있고 이걸 바꿀 수도 없습니다. 내가 선택할 수 없이 던져지는 환경과 상황을 바꿀 순 없습니다.  하지만 나를 바꿀 순 있죠.  내가 어떤 환경에 자랐든 어떤 일을 겪었던 어떤 결핍과 상처가 있다 하더라도 이것들에 갇히지 않고,  환경과 상황에 의해 결정되는 것이 아닌 내가 스스로 바뀌고자 하는 모습으로 나아갈 수 있도록 만들어 주는 클래스.    환경,상황,타인이 정해주고 말하는 내가 아닌, 나 스스로를 말하고 결정할 수 있는 사람으로 만들어주는 자존감 스피치로  이제부턴 나답게,행복하게,자신있게 말하는 [나]로 바뀔 수 있는 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 9,
        title: "표현과 표출의 차이에 대하여",
        description:
            "나의 말은 설득력이 없고,힘이 없고,매력이 없는 것처럼 느껴지는 이유는 표현과 표출에 차이에 대해서 모르기 때문입니다.  표현에는 한계가 없습니다.하지만 표출엔 명확한 한계가 있습니다.  표현과 표출에 대한 제대로 인지하게 해주는 강의를 통해   감정이나 생각을 토해내고 쏟아내며 받아주길 바라는 어리고 이기적인 표출이 아닌,  생각과 감정,가치관과 신념,찬성과 반대를 말할 수 있는 표현이 무엇인지 배우는 것을 통해   대화에는 한계가 없고 무엇이든 말할 수 있다는 것을 느낄 수 있습니다.   말 잘 하고 잘 들어주며 대화가 잘 통하는 사람이 되는 스텝이자   [직장,모임,가족,친구]어떤 관계에서도 필요한 표현을 배우는 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
    {
        id: 10,
        title: "서비스,팀워크,직장,집단에서 반드시 필요한 “NO” 에 대하여",
        description:
            "무조건적인 “YES”는 오히려 일의 효율적인 측면과 동료들과의 팀워크 그리고 소비자 서비스에 하나도 도움이 되지 않습니다.  “NO”라고 말할 때 더 좋은 아이디어를 만들어낼 수 있고,”NO”라고 말해도 소비자에게 좋은 서비스를 제공할 수 있습니다.  하지만 우리는 “NO”를 두려워하고 어려워합니다. 이 두려움과 어려움을 무색하게 만드는 클래스.  왜 NO가 필요하고 NO를 말할 수 있는 이유를 가르쳐 드리고 더 나아가 NO를 통해 수많은 YES를 만들어내는 능력을 만들어주는 클래스.",
        image: "/assets/project1.png",
        link: "#",
    },
];

export default function Curriculums() {
    return (
        <div
            className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
            id="curriculums"
        >
            <h2 className="text-2xl lg:text-4xl text-center text-white">
                My <span className="font-extrabold">Curriculums</span>
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
                            <img
                                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                            <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                                {String(project.id).padStart(2, "0")}
                            </h2>
                            <p className="font-bold text-white text-xl lg:text-3xl">
                                {project.title}
                            </p>

                            <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                className="text-white mt-3 block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TbExternalLink size={23} />
                            </a>
                        </div>
                    </motion.div>
                ))}

                <h2 className="text-xl lg:text-2xl text-center text-white">
                    위 커리큘럼들은 제가 가지고 있는 커리큘럼 중에서 예시로 보여
                    드리고자 하는 것들이며,보여드린 것 말고도 상황과
                    주제,원하시는 방향성, 개인 및 집단 특수성에 따라서 필요한
                    수업을 제시해 드리거나 만들기도 하니 거침없이 연락 주셔도
                    괜찮습니다.
                </h2>
            </div>
        </div>
    );
}
