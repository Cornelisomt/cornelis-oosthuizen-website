
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
            href="https://www.google.com/search?sca_esv=da1b8a09527d5d5c&biw=1920&bih=945&sxsrf=AHTn8zpfBNqzbee3Vcwk-k21AKPJd-TfIQ:1745826013087&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZeepBK2fnXU7PqUEiA-JD4wGsAGcv5hJwavBU3II-Ir0QYdpzvcTGCvKy-wxwBWsHHjuOWjdQkYWredKE_nF72AxpZ_N8qfMBgFtOb8md_U6BV4lUbhuX0gnbiqdpZAJeqgbjo%3D&q=Cornelis+Oosthuizen+Massage+Therapy+Reviews&sa=X&ved=2ahUKEwjt7uXanPqMAxXyREEAHV6PFQ8Q0bkNegQIIRAD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-massage-primary hover:underline inline-block mt-4"
          >
            View all Google reviews →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            name="Jacques Pienaar"
            quote="Extremely professional, highly knowledgeable and competent. Looking forward to work with him going forward."
            rating={5}
            date="3 months ago"
          />
          <TestimonialCard 
            name="Javier Gameiro"
            quote="Cornelis is incredibly knowledgeable about massage therapy and sports injuries. His technique is precise and effective."
            rating={5}
            date="3 months ago"
          />
          <TestimonialCard 
            name="Stephani Venter"
            quote="Excellent service! Very knowledgeable and professional."
            rating={5}
            date="6 months ago"
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
  date: string;
}

const TestimonialCard = ({ name, quote, rating, date }: TestimonialCardProps) => (
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
      <div className="flex flex-col gap-1">
        <p className="font-medium">— {name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </CardContent>
  </Card>
);

export default Testimonials;
