import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Timeline3D from "@/components/Timeline3D";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <Timeline3D/>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;