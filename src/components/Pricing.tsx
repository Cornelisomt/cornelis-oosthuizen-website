
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
const Pricing = () => {
  return <section id="prices" className="section-padding bg-massage-light/50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Pricing & Packages</h2>
          <p className="text-body max-w-3xl mx-auto">
            Flexible options designed to support your unique healing journey, from single sessions to comprehensive packages.
          </p>
        </div>

        <Tabs defaultValue="pain-relief" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pain-relief">Pain Relief Massage</TabsTrigger>
            <TabsTrigger value="full-body">Full Body Relaxation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pain-relief">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PriceCard title="Single Session" price="R500" description="One-time 60-minute session" />
              <PriceCard title="3 Sessions" price="R1,250" description="Save R250" popular />
              <PriceCard title="5 Sessions" price="R2,050" description="Save R450" />
              <PriceCard title="10 Sessions" price="R4,000" description="Save R1,000" />
              <PriceCard title="1 Month Package" price="R1,700" description="4 sessions (weekly)" />
              <PriceCard title="2 Month Package" price="R3,200" description="8 sessions (weekly)" />
            </div>
          </TabsContent>
          
          <TabsContent value="full-body">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PriceCard title="Single Session" price="R400" description="One-time 60-minute session" />
              <PriceCard title="3 Sessions" price="R1,050" description="Save R150" popular />
              <PriceCard title="5 Sessions" price="R1,700" description="Save R300" />
              <PriceCard title="10 Sessions" price="R3,200" description="Save R800" />
              <PriceCard title="1 Month Package" price="R1,350" description="4 sessions (weekly)" />
              <PriceCard title="2 Month Package" price="R2,650" description="8 sessions (weekly)" />
            </div>
          </TabsContent>
        </Tabs>
        
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
  description: string;
  popular?: boolean;
}
const PriceCard = ({
  title,
  price,
  description,
  popular = false
}: PriceCardProps) => <Card className={`card-shadow ${popular ? 'border-2 border-massage-primary relative' : ''}`}>
    {popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-massage-primary text-white text-sm font-medium py-1 px-3 rounded-full">
        Most Popular
      </div>}
    <CardHeader className="text-center pb-4">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-massage-dark/80">{description}</CardDescription>
    </CardHeader>
    <CardContent className="text-center pt-0">
      <p className="text-3xl font-bold text-massage-primary mb-6">{price}</p>
      <Button asChild className="w-full bg-massage-primary hover:bg-massage-primary/90">
        <a href="https://calendly.com/cornelismassagetherapy/full-body-massage" target="_blank" rel="noopener noreferrer">Book Now</a>
      </Button>
    </CardContent>
  </Card>;
export default Pricing;
