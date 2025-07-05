
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
const Pricing = () => {
  return <section id="prices" className="section-padding bg-massage-light/50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Pricing</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            <PriceCard title="30 minutes" price="R350" />
            <PriceCard title="60 minutes" price="R600" popular />
            <PriceCard title="90 minutes" price="R800" />
          </div>
        </div>
        
        {/* Home Visit Options Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="border-t border-massage-primary/20 pt-12">
            <h3 className="heading-tertiary text-center mb-6">Home Visit Options</h3>
            <p className="text-body mb-8 text-center">
              For clients who prefer the comfort of home, we offer professional massage visits within a 10km radius of our studio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-white p-6 rounded-lg card-shadow flex-1">
                <h4 className="font-semibold text-lg mb-6 text-massage-primary">Travel Charges</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-massage-primary mr-2 font-bold">•</span>
                    <span>Within 5km – <span className="font-semibold text-massage-primary">R150</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-massage-primary mr-2 font-bold">•</span>
                    <span>Within 10km – <span className="font-semibold text-massage-primary">R200</span></span>
                  </li>
                </ul>
                
                
              </div>
              
              <div className="bg-white p-6 rounded-lg card-shadow flex-1">
                <h4 className="font-semibold text-lg mb-4 text-massage-primary">Home Visit Notes</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-massage-primary mr-2 font-bold">•</span>
                    <span>Travel charges are added to the standard session rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-massage-primary mr-2 font-bold">•</span>
                    <span>Please provide a clean, quiet space with room for our massage table</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-massage-primary mr-2 font-bold">•</span>
                    <span>Bookings require 24-hour advance notice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
interface PriceCardProps {
  title: string;
  price: string;
  popular?: boolean;
}

const PriceCard = ({
  title,
  price,
  popular = false
}: PriceCardProps) => {
  const getDescription = (title: string) => {
    switch (title) {
      case "30 minutes":
        return "A targeted session designed to gently lengthen and release specific muscle groups using Active Isolation Stretching (AIS). Ideal for warm-ups, recovery, or unlocking restricted movement in a particular area.";
      case "60 minutes":
        return "A full-body fascia release session that restores movement, reduces tension, and supports postural alignment. Includes selected AIS stretches to reinforce fascial hydration and mobility.";
      case "90 minutes":
        return "Our most comprehensive session. Combines broad fascia release with extended AIS work for deeper muscular and fascial release. Ideal for recovery, structural rebalancing, or high-stress bodies.";
      default:
        return "";
    }
  };

  return (
    <Card className={`card-shadow ${popular ? 'border-2 border-massage-primary relative' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-massage-primary text-white text-sm font-medium py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm text-massage-dark/70 mt-2">
          {title === "30 minutes" ? "Active Isolation Stretching Focus" :
           title === "60 minutes" ? "Fascia Release with added AIS Integration" :
           title === "90 minutes" ? "Deep Fascia Release with Extended AIS Work" : ""}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center pt-0">
        <p className="text-3xl font-bold text-massage-primary mb-4">{price}</p>
        <p className="text-sm text-massage-dark/80 text-left leading-relaxed">
          {getDescription(title)}
        </p>
      </CardContent>
    </Card>
  );
};
export default Pricing;
