import {
  HeroSection,
  PhilosophySection,
  FeaturesSection,
  CommunitySection,
  Footer,
} from '@nutrizen/components';

export default function Home() {
  return (
    <div id="top">
      <main className="overflow-hidden bg-s1 pt-[100px]">
        <HeroSection />
        <PhilosophySection />
        <FeaturesSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
