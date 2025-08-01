import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, Trophy, Lightbulb, Users, Target } from "lucide-react";

const AcademicSection = () => {
  const programs = [
    {
      level: "Early Years (PP1 - PP2)",
      ageRange: "3-5 years",
      curriculum: "Cambridge Early Years Foundation Stage",
      highlights: ["Play-based Learning", "Numeracy & Literacy", "Creative Arts", "Physical Development"],
      color: "from-pink-500 to-rose-500"
    },
    {
      level: "Primary School (Grade 1-6)",
      ageRange: "6-11 years", 
      curriculum: "Cambridge Primary + Kenyan CBC",
      highlights: ["Core Subjects", "STEM Focus", "Language Arts", "Cultural Studies"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      level: "Junior Secondary (Grade 7-9)",
      ageRange: "12-14 years",
      curriculum: "Cambridge Lower Secondary + CBC",
      highlights: ["Advanced Sciences", "Critical Thinking", "Digital Literacy", "Leadership Skills"],
      color: "from-green-500 to-emerald-500"
    },
    {
      level: "Senior Secondary (Form 1-4)",
      ageRange: "15-18 years",
      curriculum: "Cambridge IGCSE + KCSE Preparation",
      highlights: ["University Prep", "Career Guidance", "Research Projects", "Global Perspectives"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const specialPrograms = [
    {
      icon: Globe,
      title: "International Exchange",
      description: "Student exchange programs with partner schools in UK, USA, and across Africa."
    },
    {
      icon: Trophy,
      title: "Gifted & Talented",
      description: "Specialized programs for high-achieving students with advanced coursework."
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab",
      description: "Entrepreneurship and innovation programs with real-world project experience."
    },
    {
      icon: Users,
      title: "Special Needs Support",
      description: "Inclusive education with specialized support for diverse learning needs."
    }
  ];

  return (
    <section id="academic" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Academic Excellence Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum combines the best of Kenyan CBC and Cambridge International 
            systems, preparing students for success both locally and globally.
          </p>
        </div>

        {/* Academic Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-card border-0 overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">{program.level}</CardTitle>
                  <Badge variant="secondary" className="text-xs">{program.ageRange}</Badge>
                </div>
                <p className="text-primary font-semibold">{program.curriculum}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-muted-foreground">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Target className="h-3 w-3 text-secondary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Programs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Special Programs & Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="text-center shadow-card border-0 group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-3">{program.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Academic Excellence Stats */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Academic Achievement Record</h3>
            <p className="text-xl opacity-90">Consistently delivering outstanding results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">92%</div>
              <div className="text-lg opacity-90">KCSE A- and above</div>
              <div className="text-sm opacity-75">Class of 2023</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">88%</div>
              <div className="text-lg opacity-90">Cambridge IGCSE A*-B</div>
              <div className="text-sm opacity-75">International Standards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg opacity-90">University Acceptance</div>
              <div className="text-sm opacity-75">Top Local & International Universities</div>
            </div>
          </div>
        </div>

        {/* University Partnerships */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">University Partnerships & Pathways</h3>
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-xl font-bold text-primary mb-2">University of Nairobi</div>
                <div className="text-sm text-muted-foreground">Medicine, Engineering</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-2">Strathmore University</div>
                <div className="text-sm text-muted-foreground">Business, IT</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-2">USIU-Africa</div>
                <div className="text-sm text-muted-foreground">International Programs</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-2">UK Universities</div>
                <div className="text-sm text-muted-foreground">Direct Entry Pathways</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;