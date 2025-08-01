import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { year: "2023", title: "Best International School - East Africa", org: "Education Excellence Awards" },
    { year: "2022", title: "Top KCSE Performance - Kiambu County", org: "Ministry of Education" },
    { year: "2021", title: "Cambridge International School Award", org: "Cambridge Assessment" },
    { year: "2020", title: "Innovation in Education Award", org: "Kenya Education Network" }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Pursuing the highest standards in teaching and learning with innovative methods."
    },
    {
      icon: Users,
      title: "Character Development", 
      description: "Building integrity, leadership, and moral values in every student."
    },
    {
      icon: Trophy,
      title: "Global Citizenship",
      description: "Preparing students to be responsible leaders in the global community."
    },
    {
      icon: Calendar,
      title: "Innovation & Creativity",
      description: "Fostering creative thinking and innovative problem-solving skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Mulandi's High International
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to provide world-class education in Kenya, we have grown to become 
            a leading institution that bridges local excellence with global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Our Story */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established in 2010, Mulandi's High International was born from a vision to create 
                an educational institution that would serve as a bridge between Kenyan educational 
                excellence and international standards.
              </p>
              <p>
                Our founder, Dr. Margaret Mulandi, believed that every child in Kenya deserved access 
                to world-class education without having to leave their homeland. This vision has guided 
                our growth from a small primary school to a comprehensive K-12 institution.
              </p>
              <p>
                Today, we proudly serve over 800 students from diverse backgrounds, maintaining our 
                commitment to affordable excellence and holistic development.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                Mission & Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-primary mb-2">Our Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading international school in East Africa, nurturing global citizens 
                  who are academically excellent, morally upright, and culturally grounded.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To provide affordable, world-class education that combines the best of Kenyan 
                  values with international standards, preparing students for success in the 21st century.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-card border-0 group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements Timeline */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary text-center flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6" />
              Recent Achievements & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-subtle rounded-lg">
                  <Badge variant="secondary" className="mt-1">{achievement.year}</Badge>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* School Leadership */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">School Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👩🏾‍🎓
                </div>
                <h4 className="font-bold text-primary mb-2">Dr. Margaret Mulandi</h4>
                <p className="text-sm text-muted-foreground mb-3">Founder & School Director</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  PhD in Education, 25+ years experience in international education and curriculum development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👨🏿‍🏫
                </div>
                <h4 className="font-bold text-primary mb-2">Mr. David Kiprotich</h4>
                <p className="text-sm text-muted-foreground mb-3">Principal</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Masters in Educational Leadership, Cambridge trained educator with 15+ years in school management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-0">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👩🏽‍💼
                </div>
                <h4 className="font-bold text-primary mb-2">Ms. Grace Wanjiku</h4>
                <p className="text-sm text-muted-foreground mb-3">Deputy Principal - Academics</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Masters in Curriculum & Instruction, specialist in international curriculum implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;