import { PageLoader } from "@/components/layout/PageLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Recommendations } from "@/components/sections/Recommendations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageLoader>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubSection />
        <Education />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </PageLoader>
  );
}
