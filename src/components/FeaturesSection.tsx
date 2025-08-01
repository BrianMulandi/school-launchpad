import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Computer, Heart, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "CBC-compliant curriculum with international standards, preparing students for global opportunities."
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Qualified, passionate educators dedicated to nurturing each child's unique potential and growth."
    },
    {
      icon: Award,
      title: "Excellence Focus",
      description: "Consistent track record of academic achievement and holistic student development."
    },
    {
      icon: Computer,
      title: "Digital Learning",
      description: "State-of-the-art technology integration with tablets, smart boards, and online resources."
    },
    {
      icon: Heart,
      title: "Pastoral Care",
      description: "Comprehensive student support system with counseling and character development programs."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International exposure through exchange programs and multicultural learning environment."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose EduCare Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive educational experience that combines academic excellence 
            with character development, preparing students for success in the 21st century.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;