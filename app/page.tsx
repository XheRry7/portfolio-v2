import { ExperienceSection } from "@/components/ExperienceSection";
import { HomeAbout } from "@/components/HomeAbout";
import { PortfolioAndFooter } from "@/components/PortfolioAndFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeAbout />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioAndFooter />
      </main>
    </>
  );
}
