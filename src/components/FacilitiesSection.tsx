import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Microscope, Wifi, Bus, Utensils, Shield, Gamepad2, Music } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "State-of-the-art classrooms with smart boards, air conditioning, and ergonomic furniture for optimal learning.",
      features: ["40 Smart Classrooms", "Climate Controlled", "Interactive Whiteboards", "Flexible Seating"]
    },
    {
      icon: Microscope,
      title: "Science & Tech Labs",
      description: "Fully equipped laboratories for Physics, Chemistry, Biology, and Computer Science with latest equipment.",
      features: ["6 Science Labs", "2 Computer Labs", "Robotics Lab", "3D Printing Studio"]
    },
    {
      icon: Wifi,
      title: "Digital Learning Hub",
      description: "Campus-wide high-speed Wi-Fi, tablets for each student, and digital library access.",
      features: ["Fiber Internet", "1:1 Device Program", "Digital Library", "Learning Management System"]
    },
    {
      icon: Bus,
      title: "Safe Transportation",
      description: "Modern school buses with GPS tracking, CCTV, and professional drivers for student safety.",
      features: ["15 Modern Buses", "GPS Tracking", "CCTV Monitoring", "Trained Drivers"]
    },
    {
      icon: Utensils,
      title: "Nutrition Center",
      description: "Professional kitchen and dining facilities serving balanced, nutritious meals prepared by qualified chefs.",
      features: ["Industrial Kitchen", "500-Seat Dining Hall", "Qualified Nutritionist", "Halal & Vegan Options"]
    },
    {
      icon: Shield,
      title: "Health & Safety",
      description: "24/7 security, medical center with qualified nurse, and comprehensive safety protocols.",
      features: ["24/7 Security", "Medical Center", "Qualified Nurse", "Emergency Protocols"]
    },
    {
      icon: Gamepad2,
      title: "Sports Complex",
      description: "Professional sports facilities including swimming pool, football pitch, basketball courts, and gymnasium.",
      features: ["Olympic Pool", "Football Pitch", "Basketball Courts", "Modern Gymnasium"]
    },
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Dedicated spaces for music, drama, art, and cultural activities with professional equipment.",
      features: ["Music Studio", "Art Gallery", "Drama Theater", "Cultural Center"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="facilities">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our campus features state-of-the-art facilities designed to provide the best learning 
            environment, ensuring every student has access to modern resources and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                        {facility.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Campus Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Campus by Numbers</h3>
            <p className="text-xl opacity-90">Infrastructure that supports excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25</div>
              <div className="text-lg opacity-90">Acres Campus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1,200</div>
              <div className="text-lg opacity-90">Student Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg opacity-90">Specialized Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg opacity-90">Wi-Fi Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;