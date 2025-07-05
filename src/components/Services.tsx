
import { CheckIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">What is Fascia</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg card-shadow">
            <p className="text-body text-lg leading-relaxed">
              Fascia is the connective tissue web that holds your entire body together — wrapping around muscles, bones, organs, and nerves. It's what gives your body structure, supports your posture, and allows for smooth, coordinated movement. When fascia is healthy, it's flexible and fluid. But when it tightens — often from stress, injury, or repetitive movement — it can create pain, stiffness, and tension throughout the body.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg card-shadow">
            <p className="text-body text-lg leading-relaxed">
              Unlike traditional massage that focuses on local muscles, fascia release therapy works on this deeper system of interconnected lines and planes. By targeting the fascial network, we release long-held patterns of restriction, improve alignment, and restore the body's natural ease. It's not just about feeling better — it's about moving better, breathing better, and living with more freedom.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg card-shadow">
            <h3 className="heading-tertiary mb-4">Fascia's Contribution to Muscle Stiffness</h3>
            <p className="text-body text-lg leading-relaxed">
              Fascia can become tight, sticky, or dehydrated due to injury, stress, or repetitive movement — locking the body into patterns of tension that make muscles feel stiff, restricted, or painful. This isn't just about tight muscles; it's often the fascia surrounding and interconnecting them that's holding on. Fascia release therapy works by gently loosening these restrictions, restoring the natural glide between muscle layers. When combined with Active Isolation Stretching (AIS) — a method of using controlled, repetitive movements to activate and lengthen specific muscles — we help rehydrate and unwind the fascia, restoring balance, freedom, and ease to the entire body.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
