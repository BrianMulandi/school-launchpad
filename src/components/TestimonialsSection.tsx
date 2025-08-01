import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Parent - Grade 8 Student",
      location: "Nairobi",
      image: "👩🏾",
      content: "Mulandi's High International has transformed my daughter's learning experience. The teachers are caring, the facilities are outstanding, and the international curriculum has opened doors we never imagined.",
      rating: 5
    },
    {
      name: "Dr. James Mutua",
      role: "Parent - Form 2 Student",
      location: "Kiambu",
      image: "👨🏾‍⚕️",
      content: "As a medical professional, I appreciate the school's focus on science and technology. My son is excelling in his studies and has developed a passion for research. The fees are very reasonable for the quality offered.",
      rating: 5
    },
    {
      name: "Amina Hassan",
      role: "Alumni - Class of 2023",
      location: "Currently at University of Nairobi",
      image: "👩🏽‍🎓",
      content: "Mulandi's High prepared me exceptionally well for university. The international exposure and quality education I received here gave me confidence to pursue my dreams. I'm now studying Medicine thanks to the solid foundation I got.",
      rating: 5
    },
    {
      name: "Peter Kimani",
      role: "Parent - Grade 5 Student",
      location: "Thika",
      image: "👨🏿",
      content: "The school's emphasis on character development alongside academics is impressive. My son has grown not just intellectually but also morally. The bus service makes it convenient for us in Thika.",
      rating: 5
    },
    {
      name: "Sarah Njeri",
      role: "Parent - PP2 Student", 
      location: "Ruiru",
      image: "👩🏾‍💼",
      content: "Starting my daughter's education journey here was the best decision. The early childhood program is exceptional, and the teachers truly care about each child's development. The fees are affordable for working parents like us.",
      rating: 5
    },
    {
      name: "Emmanuel Otieno",
      role: "Alumni - Class of 2022",
      location: "Currently at Strathmore University",
      image: "👨🏿‍💼",
      content: "The leadership skills and international mindset I developed at Mulandi's High have been invaluable. I'm now studying Business and already running my own startup. The school truly prepares you for the real world.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Families Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from parents, students, and alumni 
            who have experienced the Mulandi's High International difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm relative"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Trusted by Families Across Kenya</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Student Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">University Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Counties Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;