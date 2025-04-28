
import { CheckIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Our Specialized Services</h2>
          <p className="text-body max-w-3xl mx-auto">
            Focused treatments tailored to your unique needs, whether you're seeking relief from pain or simply a moment of deep relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pain Relief Massage */}
          <Card className="card-shadow">
            <CardHeader className="bg-massage-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl">Pain Relief Massage</CardTitle>
              <CardDescription className="text-white/90">
                Targeted deep tissue treatment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-8 px-6">
              <p className="mb-6">
                A deep, focused treatment designed to target the root causes of pain, tension, and restricted movement. Using slow, deliberate pressure, I work through layers of muscle and connective tissue to release chronic tightness, reduce inflammation, and restore mobility.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Perfect for athletes and active individuals</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Addresses sport-related soreness and strain</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Targets chronic tightness and restricted movement</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Focused on lasting relief, not just temporary relaxation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Body Relaxation Massage */}
          <Card className="card-shadow">
            <CardHeader className="bg-massage-secondary text-massage-dark rounded-t-lg">
              <CardTitle className="text-2xl">Full Body Relaxation</CardTitle>
              <CardDescription className="text-massage-dark/80">
                Gentle, flowing treatment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-8 px-6">
              <p className="mb-6">
                This is your time to slow down, breathe deeply, and let go. A gentle, flowing treatment designed to calm the nervous system, ease muscle tension, and bring your body and mind back into balance using long, smooth strokes and a grounded, attentive pace.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Promotes deep relaxation and stress relief</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Improves circulation and overall well-being</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Perfect for those feeling burnt out or overwhelmed</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon className="text-massage-primary h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Creates space to reconnect with yourself</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
