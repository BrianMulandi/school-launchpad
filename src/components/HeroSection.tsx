import { Button } from "@/components/ui/button";
import heroImage from "@/assets/school-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning together" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Excellence in
          <span className="block text-accent"> Education</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Empowering students to achieve their full potential through innovative learning, 
          dedicated teachers, and a nurturing environment that fosters growth and success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-48">
            Enroll Your Child
          </Button>
          <Button variant="outline" size="lg" className="min-w-48 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary">
            Schedule Tour
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-accent mb-2">500+</h3>
            <p className="text-lg opacity-90">Happy Students</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-accent mb-2">98%</h3>
            <p className="text-lg opacity-90">Success Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-accent mb-2">25+</h3>
            <p className="text-lg opacity-90">Expert Teachers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;