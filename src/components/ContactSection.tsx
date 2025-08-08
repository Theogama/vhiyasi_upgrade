import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">CONNECT WITH US AND LET US WORK TOGETHER</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
                <p className="text-muted-foreground text-sm sm:text-base">(+27) 76 913-4205</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg">Email</h3>
                <p className="text-muted-foreground text-sm sm:text-base break-all">info@vhiyasim3.co.za</p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg">Address</h3>
                <div className="text-muted-foreground text-sm sm:text-base">
                  <p>Office no 16 Lorna court C/N Rothsay Street</p>
                  <p>Bedford Ave</p>
                  <p>Benoni, 1500</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name (required)</label>
                  <Input 
                    required 
                    className="border-border focus:ring-accent focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Surname (required)</label>
                  <Input 
                    required 
                    className="border-border focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email (required)</label>
                  <Input 
                    type="email" 
                    required 
                    className="border-border focus:ring-accent focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Contact number</label>
                  <Input 
                    type="tel" 
                    className="border-border focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Province</label>
                  <Select>
                    <SelectTrigger className="border-border focus:ring-accent focus:border-accent">
                      <SelectValue placeholder="Select Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                      <SelectItem value="free-state">Free State</SelectItem>
                      <SelectItem value="gauteng">Gauteng</SelectItem>
                      <SelectItem value="limpopo">Limpopo</SelectItem>
                      <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                      <SelectItem value="northern-cape">Northern Cape</SelectItem>
                      <SelectItem value="north-west">North West</SelectItem>
                      <SelectItem value="kwazulu-natal">Kwazulu Natal</SelectItem>
                      <SelectItem value="western-cape">Western Cape</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">How can we assist you?</label>
                  <Select>
                    <SelectTrigger className="border-border focus:ring-accent focus:border-accent">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="hire">I would like to hire you</SelectItem>
                      <SelectItem value="feedback">Feedback/Testimonial</SelectItem>
                      <SelectItem value="developer">I am a property developer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Please tell us more about your inquiry</label>
                <Textarea 
                  rows={4}
                  className="border-border focus:ring-accent focus:border-accent resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full text-white bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};