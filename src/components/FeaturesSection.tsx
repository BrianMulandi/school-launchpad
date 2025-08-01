import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Computer, Heart, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Kenyan & International Curriculum",
      description: "KICD-approved CBC curriculum enhanced with Cambridge International standards for global recognition."
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
      title: "East African Excellence",
      description: "Leading educational institution in Kenya with partnerships across East Africa and globally."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Mulandi's High International?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in Kenya with a global perspective, we provide world-class education 
            that combines local values with international standards, preparing students for global opportunities.
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