
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
                I don't believe in rushing through a session or chasing quick fixes. My approach is slow, intentional, and deeply focused, because real results — especially in sport recovery — come from giving the body the time and consistency it needs to heal and adapt.
              </p>
              <p className="text-body mb-6">
                Instead of trying to do everything at once, I give full attention to the areas that matter most, working methodically to release deep tension and support lasting change.
              </p>
              <p className="text-body font-medium">
                It's not just about feeling better today — it's about helping your body perform, recover, and stay strong over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
