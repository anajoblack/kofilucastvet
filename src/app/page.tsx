"use strict";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import Initiatives from "@/components/Initiatives";
import MessagesSection from "@/components/MessagesSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import JourneyWithUs from "@/components/JourneyWithUs";
import FeaturedNews from "@/components/FeaturedNews";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import ImpactStats from "@/components/ImpactStats";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Breaking News Ticker */}
        <NewsTicker />

        {/* 4. Strategic Initiatives (Proposed Building & Courtesy Call) */}
        <Initiatives />

        {/* 5. Director's Goodwill & Holiday Messages Series */}
        <MessagesSection />

        {/* 6. Official Welcome Message to the Website */}
        <WelcomeMessage />

        {/* 7. Journey With Us (Hidden as requested) */}
        {/* <JourneyWithUs /> */}

        {/* 8. Featured News (National Agric Awards) */}
        <FeaturedNews />

        {/* 9. Administrative Structure of Oti Region & Regional Map */}
        <AdministrativeStructure />

        {/* 10. Regional Impact Metrics & Counters */}
        <ImpactStats />

        {/* 11. Support & Partnership Banner */}
        <CallToAction />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
