import Footer from "@/components/footer/Footer";
import HeaderHome from "@/components/header/HeaderHome";
import CTASection from "@/components/pages/home/cta/CTASection";
import FeaturesSection from "@/components/pages/home/features/FeaturesSection";
import HeroSection from "@/components/pages/home/HeroSection";
import PricingSection from "@/components/pages/home/pricing/PricingSection";
import TutorialSection from "@/components/pages/home/tutorials/TutorialSection";

export default function Home() {
  return <main className="min-h-screen w-full">
    <HeaderHome />
    <HeroSection />
    <FeaturesSection />
    <TutorialSection />
    <PricingSection />
    <CTASection />
    <Footer />
  </main>
}
