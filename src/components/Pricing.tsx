import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Pricing = () => {
  return (
    <section id="prices" className="section-padding bg-massage-light/50">
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
                
                <a 
                  href="https://maps.googleapis.com/maps/api/staticmap?center=-26.112879%2C28.01827&zoom=13&size=600x500&maptype=roadmap&markers=color:red%7Clabel:C%7C-26.112879%2C28.01827&path=fillcolor:0x006eff44|color:0x006eff88|weight:2|-26.06774831965799,28.01827|-26.067995456422853,28.023493288211817|-26.06873416207704,28.028659414202355|-26.06995635219947,28.033711839188577|-26.071648650771266,28.038595264556967|-26.073792536092345,28.043256235248958|-26.076364542860226,28.04764372329756|-26.079336518234367,28.051709685214497|-26.082675929124676,28.055409587194426|-26.08634621738806,28.058702892433566|-26.090307199095584,28.06155350524989|-26.094515503550937,28.063930167140203|-26.09892504730467,28.065806800409817|-26.103487538021607,28.067162795559952|-26.108153002726056,28.067983239212257|-26.11287033467483,28.06825907998046|-26.11758785289478,28.067987230364583|-26.122253868271788,28.06717060343232|-26.12681724999573,28.065818083761148|-26.13122798614969,28.063944432834486&path=fillcolor:0x33cc3344|color:0x33cc3388|weight:2|-26.159617639315978,28.01827|-26.159966087055707,28.027064981640294|-26.16101096258723,28.03579872428059|-26.16274730019126,28.044411024738004|-26.16516640154246,28.052843145186466|-26.168255905765335,28.06103855912299|-26.171999031062874,28.06894362214173|-26.176374894126683,28.0765082875273|-26.181358897080237,28.08368671806624|-26.186922251007315,28.090437883372544|-26.19303258605117,28.096725093888474|-26.19965463280619,28.10251649817489|-26.206750941946174,28.10778561573231|-26.214282694802464,28.112511748842146|-26.22221057489192,28.11667934732969|-26.23049563758198,28.120278340223583&key=AIzaSyB9Wp3xHL6DdpiVUAFDDZXV1viLjTvs784" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-[#006eff] text-white rounded-md hover:bg-[#006eff]/90 transition-colors font-medium flex items-center"
                >
                  View Service Areas <ExternalLink className="ml-1 h-4 w-4" />
                </a>
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
    </section>
  );
};

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  popular?: boolean;
}

const PriceCard = ({ title, price, description, popular = false }: PriceCardProps) => (
  <Card className={`card-shadow ${popular ? 'border-2 border-massage-primary relative' : ''}`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-massage-primary text-white text-sm font-medium py-1 px-3 rounded-full">
        Most Popular
      </div>
    )}
    <CardHeader className="text-center pb-4">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-massage-dark/80">{description}</CardDescription>
    </CardHeader>
    <CardContent className="text-center pt-0">
      <p className="text-3xl font-bold text-massage-primary mb-6">{price}</p>
      <Button asChild className="w-full bg-massage-primary hover:bg-massage-primary/90">
        <a href="#contact">Book Now</a>
      </Button>
    </CardContent>
  </Card>
);

export default Pricing;
