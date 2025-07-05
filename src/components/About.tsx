
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-massage-light/30">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-center mb-12">Your Journey to Wellness</h2>
          
          <Card className="card-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-massage-primary mb-4">Our Mission</h3>
              <p className="text-body mb-6">
                At Cornelis Oosthuizen Massage Therapy, I believe that you deserve to live without the limits of pain and tension. When discomfort holds you back, I'm here to help you reclaim strength, mobility, and peace of mind — through the power of focused, effective deep tissue massage.
              </p>
              <p className="text-body mb-6">
                With every session, my goal is to listen deeply — not just to what you say, but to what your body needs. Whether you're recovering from injury, managing stress, or simply ready to feel better in your skin, I guide you toward real, lasting relief.
              </p>
              <p className="text-body font-medium">
                This is your journey back to balance. I'm here to support you every step of the way.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-massage-primary mb-4">My Approach</h3>
              <p className="text-body mb-6">
                My work is rooted in the understanding that the body is an interconnected system of fascia, not isolated parts. Using the Anatomy Trains framework, I focus on releasing tension along the body's myofascial meridians — long lines of connective tissue that link movement and posture across multiple regions. These fascial lines often hold chronic tension and compensation patterns from past injuries, poor posture, or emotional stress.
              </p>
              <p className="text-body font-medium">
                To restore fluidity and balance, I combine manual fascia release with Active Isolation Stretching (AIS). While fascia release softens restrictions in the tissue network, AIS uses precise, repeated movements to stimulate circulation, rehydrate the fascia, and improve neuromuscular control. This combination allows for deep, lasting change — not just short-term relief — helping the body reorganize itself into a more open, aligned, and pain-free state.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
