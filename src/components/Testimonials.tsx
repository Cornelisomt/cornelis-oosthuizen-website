
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">What Our Clients Say</h2>
          <p className="text-body max-w-3xl mx-auto">
            Don't just take our word for it. Hear from people who've experienced the difference firsthand.
          </p>
          <a
            href="https://www.google.com/maps/place/Cornelis+Massage+Therapy/@-26.1330321,28.0012787,17z/data=!4m8!3m7!1s0x1e950c60013770c3:0x9c908c9cfd688c0c!8m2!3d-26.13304!4d28.0038536!9m1!1b1!16s%2Fg%2F11t82_8hvj?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-massage-primary hover:underline inline-block mt-4"
          >
            View all Google reviews →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            name="Sarah M."
            quote="After struggling with lower back pain for months, I found real relief after just a few sessions. The focus on root causes rather than just symptoms made all the difference."
            rating={5}
          />
          <TestimonialCard 
            name="James T."
            quote="As an avid runner, I've tried many massage therapists over the years. This approach is different - thoughtful, thorough, and actually focused on long-term improvement."
            rating={5}
          />
          <TestimonialCard 
            name="Priya K."
            quote="The full body relaxation massage was exactly what I needed during a particularly stressful time. I left feeling renewed and balanced in a way I hadn't experienced before."
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ name, quote, rating }: TestimonialCardProps) => (
  <Card className="h-full card-shadow">
    <CardHeader>
      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </CardHeader>
    <CardContent>
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-medium">— {name}</p>
    </CardContent>
  </Card>
);

export default Testimonials;
