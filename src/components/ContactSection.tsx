import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Visit Our Campus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience our world-class facilities firsthand. Located in the heart of Kenya 
            with easy access from Nairobi and surrounding counties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Mulandi's High International</p>
                    <p className="text-muted-foreground">
                      Kimathi Street, Kiambu County<br />
                      P.O. Box 1234-00100, Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">+254 700 123 456</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">admissions@mulandishigh.ac.ke</p>
                    <p className="text-sm text-muted-foreground">General inquiries & admissions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">www.mulandishigh.ac.ke</p>
                    <p className="text-sm text-muted-foreground">Official website</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-primary">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-bold text-primary">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-bold text-secondary">Closed</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
                  📞 Emergency contact available 24/7 for boarding students
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Users className="h-6 w-6" />
                Schedule a Campus Tour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name *</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Tour Date</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Book Campus Tour
                </Button>
                
                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    Call Us Directly: +254 700 123 456
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-16">
          <Card className="shadow-card border-0">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Interactive Campus Map</h3>
                  <p className="text-muted-foreground">
                    Located 30 minutes from Nairobi CBD • Easy access via Thika Road
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;