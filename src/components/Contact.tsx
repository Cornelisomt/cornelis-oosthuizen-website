
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/+27774849149?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20fascia%20release%20therapy%20services.`, "_blank");
  };
  return <section id="contact" className="section-padding bg-white">
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
                  <p>Block B, 457 Jan Smuts Ave<br />Blairgowrie, Randburg, 2194</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-massage-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Phone:</p>
                  <a href="tel:0774849149" className="hover:text-massage-primary transition-colors">+27 77 484 9149</a>
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
            </div>
          </div>

          {/* WhatsApp and Map */}
          <div className="space-y-8">
            <div>
              <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Find Us</h3>
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0743445505!2d28.00127871503667!3d-26.13302398346919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c60013770c3%3A0x9c908c9cfd688c0c!2s457%20Jan%20Smuts%20Ave%2C%20Blairgowrie%2C%20Randburg%2C%202194%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1713531067635!5m2!1sen!2sus" width="100%" height="300" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
