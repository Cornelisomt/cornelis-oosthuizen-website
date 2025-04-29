import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-massage-dark text-white pt-12 pb-8">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cornelis Oosthuizen Massage Therapy</h3>
            <p className="text-white/80 mb-4">
              Specialized massage therapy focused on helping you reclaim strength, mobility, and peace of mind.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#prices" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Pain Relief Massage</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Full Body Relaxation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone className="h-5 w-5 text-massage-secondary flex-shrink-0 mt-1" />
                <a href="tel:0774849149" className="text-white/80 hover:text-white transition-colors">
                  077 484 9149
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-massage-secondary flex-shrink-0 mt-1" />
                <a href="mailto:cornelisomt@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  cornelisomt@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-massage-secondary flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  94 6th Street, Linden<br />Johannesburg, 2195
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/70 text-sm">
          <p>© {currentYear} Cornelis Oosthuizen Massage Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;