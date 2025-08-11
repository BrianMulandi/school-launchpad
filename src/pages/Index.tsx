import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AcademicSection from "@/components/AcademicSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import ShowcaseGallerySection from "@/components/ShowcaseGallerySection";
import ResourcesDownloadsSection from "@/components/ResourcesDownloadsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <AcademicSection />
        <FacilitiesSection />
        <ShowcaseGallerySection />
        <TestimonialsSection />
        <AdmissionsSection />
        <ResourcesDownloadsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
