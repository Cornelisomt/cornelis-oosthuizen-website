import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/0774849149?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20massage%20therapy%20services.`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Get in Touch</h2>
          <p className="text-body max-w-3xl mx-auto">
            Ready to start your journey to wellness? Contact us today to book your session or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-massage-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Address:</p>
                  <p>94 6th Street, Linden<br />Johannesburg, 2195</p>
                  <p className="text-sm text-massage-dark/70 mt-2">
                    Studio Address:<br />Block B, 457 Jan Smuts Ave, Blairgowrie, Randburg, 2194
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-massage-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Phone:</p>
                  <a href="tel:0774849149" className="hover:text-massage-primary transition-colors">
                    077 484 9149
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-massage-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Email:</p>
                  <a href="mailto:cornelisomt@gmail.com" className="hover:text-massage-primary transition-colors">
                    cornelisomt@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="pt-4 space-y-4">
                <Button 
                  onClick={handleWhatsApp} 
                  className="w-full bg-green-500 hover:bg-green-600 flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                
                <Button asChild className="w-full bg-massage-primary hover:bg-massage-primary/90 flex items-center gap-2">
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book an Appointment
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-medium mb-4">Find Us</h3>
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0743445505!2d28.00127871503667!3d-26.13302398346919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c60013770c3%3A0x9c908c9cfd688c0c!2s457%20Jan%20Smuts%20Ave%2C%20Blairgowrie%2C%20Randburg%2C%202194%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1713531067635!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-medium mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-massage-primary hover:bg-massage-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
