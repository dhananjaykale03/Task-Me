import Navbar from "@/components/landing/Navbar";
import LandingHero from "@/components/landing/LandingHero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import AIGeneratorSection from "@/components/landing/AIGeneratorSection";
import RolesSection from "@/components/landing/RolesSection";
import AdminSection from "@/components/landing/AdminSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LandingHero />
      <FeaturesSection />
      <DashboardPreview />
      <AIGeneratorSection />
      <RolesSection />
      <AdminSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
