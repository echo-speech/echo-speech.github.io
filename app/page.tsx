import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ExperienceSection from "@/components/sections/experienceSection";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/heroSection";
import Navbar from "@/components/sections/navbar";
import ProjectsSection from "@/components/sections/projectsSection";
import SkillsSection from "@/components/sections/skillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 dark:bg-zinc-800">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
