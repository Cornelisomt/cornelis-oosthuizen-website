
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-massage-light to-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-massage-dark mb-6 leading-tight">
            Reclaim Movement, <span className="text-massage-primary">Restore Balance</span>
          </h1>
          <p className="text-lg md:text-xl text-massage-dark/80 mb-10 max-w-2xl mx-auto">
            Experience focused, effective deep tissue massage that helps you move freely and live without the limits of pain and tension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary" size="lg">
              <a href="https://calendly.com/cornelismassagetherapy/full-body-massage" target="_blank" rel="noopener noreferrer">Book a Session</a>
            </Button>
            <Button asChild className="btn-secondary" size="lg">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
