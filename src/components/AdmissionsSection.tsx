import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AdmissionsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    previousSchool: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.studentName || !formData.parentName || !formData.email || !formData.phone || !formData.grade) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // For now, just show success message
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to schedule an interview.",
    });

    // Reset form
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      previousSchool: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Join Our School Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your child's educational journey with us. Our admissions process is designed 
            to understand your child's unique needs and potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Admission Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  📅 Admission Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-semibold">Application Deadline</span>
                  <span className="text-primary font-bold">March 31, 2024</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                  <span className="font-semibold">Interviews & Assessment</span>
                  <span className="text-secondary font-bold">April 1-15, 2024</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-lg">
                  <span className="font-semibold">Results Notification</span>
                  <span className="text-accent-foreground font-bold">April 30, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  💰 Fee Structure (Per Term)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Pre-Primary (3-5 years)</span>
                  <span className="font-bold text-primary">KSh 45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Primary (6-13 years)</span>
                  <span className="font-bold text-primary">KSh 65,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Secondary (14-17 years)</span>
                  <span className="font-bold text-primary">KSh 85,000</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
                  * Includes tuition, meals, transport, and learning materials
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                Quick Application Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student's Full Name *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange("studentName", e.target.value)}
                      placeholder="Enter student's name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      placeholder="Enter parent's name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+254 700 000 000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade/Level Applying For *</Label>
                    <Select value={formData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pp1">PP1 (3 years)</SelectItem>
                        <SelectItem value="pp2">PP2 (4 years)</SelectItem>
                        <SelectItem value="grade1">Grade 1</SelectItem>
                        <SelectItem value="grade2">Grade 2</SelectItem>
                        <SelectItem value="grade3">Grade 3</SelectItem>
                        <SelectItem value="grade4">Grade 4</SelectItem>
                        <SelectItem value="grade5">Grade 5</SelectItem>
                        <SelectItem value="grade6">Grade 6</SelectItem>
                        <SelectItem value="grade7">Grade 7</SelectItem>
                        <SelectItem value="grade8">Grade 8</SelectItem>
                        <SelectItem value="form1">Form 1</SelectItem>
                        <SelectItem value="form2">Form 2</SelectItem>
                        <SelectItem value="form3">Form 3</SelectItem>
                        <SelectItem value="form4">Form 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousSchool">Previous School (Optional)</Label>
                    <Input
                      id="previousSchool"
                      value={formData.previousSchool}
                      onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                      placeholder="Enter previous school name"
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Application
                </Button>

                <div className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our admission terms and privacy policy.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;