
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
          <div className="relative bg-gradient-to-br from-massage-light/30 to-white p-8 rounded-xl card-shadow border-l-4 border-massage-primary hover-scale animate-fade-in">
            <div className="absolute top-4 right-4 w-12 h-12 bg-massage-primary/10 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-massage-primary/20 rounded-full pulse"></div>
            </div>
            <div className="space-y-4">
              <p className="text-body text-lg leading-relaxed">
                Fascia is the connective tissue web that holds your entire body together — wrapping around muscles, bones, organs, and nerves. It's what gives your body structure, supports your posture, and allows for smooth, coordinated movement. When fascia is healthy, it's flexible and fluid. But when it tightens — often from stress, injury, or repetitive movement — it can create pain, stiffness, and tension throughout the body.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-massage-primary/30 to-transparent my-6"></div>
              <p className="text-body text-lg leading-relaxed">
                Unlike traditional massage that focuses on local muscles, fascia release therapy works on this deeper system of interconnected lines and planes. By targeting the fascial network, we release long-held patterns of restriction, improve alignment, and restore the body's natural ease. It's not just about feeling better — it's about moving better, breathing better, and living with more freedom.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-massage-secondary/20 to-white p-8 rounded-xl card-shadow border-l-4 border-massage-secondary hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-4 right-4 w-12 h-12 bg-massage-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-massage-secondary/30 rounded-full pulse"></div>
            </div>
            <h3 className="heading-tertiary mb-6 text-massage-primary">Fascia's Contribution to Muscle Stiffness</h3>
            <p className="text-body text-lg leading-relaxed">
              Fascia can become tight, sticky, or dehydrated due to injury, stress, or repetitive movement — locking the body into patterns of tension that make muscles feel stiff, restricted, or painful. This isn't just about tight muscles; it's often the fascia surrounding and interconnecting them that's holding on. Fascia release therapy works by gently loosening these restrictions, restoring the natural glide between muscle layers. When combined with <span className="font-semibold text-massage-primary">Active Isolation Stretching (AIS)</span> — a method of using controlled, repetitive movements to activate and lengthen specific muscles — we help rehydrate and unwind the fascia, restoring balance, freedom, and ease to the entire body.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-massage-light/40 to-white p-8 rounded-xl card-shadow border-l-4 border-massage-primary hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-4 right-4 w-12 h-12 bg-massage-primary/15 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-massage-primary/25 rounded-full pulse"></div>
            </div>
            <h3 className="heading-tertiary mb-6 text-massage-primary">What Are Anatomy Trains?</h3>
            <p className="text-body text-lg leading-relaxed">
              Anatomy Trains is a way of understanding how the body is connected — not just through bones and muscles, but through long, continuous lines of fascia (connective tissue). These lines, or "trains," run through the body from head to toe, linking areas that seem unrelated at first glance.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-massage-primary/30 to-transparent my-6"></div>
            <p className="text-body text-lg leading-relaxed">
              For example, tension in your feet can affect your neck or back, because they're part of the same fascial line. Instead of treating one spot in isolation, Anatomy Trains helps us work with the entire chain — releasing restrictions, restoring balance, and allowing the whole body to move more freely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
