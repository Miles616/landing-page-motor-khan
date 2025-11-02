import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import HeroSectionOne from '@/components/ui/hero-section-demo-1';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.16 14.3c-.2-.1-.59-.29-.68-.33-.09-.03-.16-.05-.24-.05-.08 0-.16.03-.24.1l-.4.48c-.08.1-.18.13-.28.1-.1 0-.23-.04-.5-.18-.48-.24-1.1-1.02-1.18-1.12s-.08-.15 0-.23l.1-.13c.08-.08.13-.18.18-.28.05-.1.03-.18 0-.25-.03-.08-.15-.38-.2-.53-.06-.15-.13-.13-.18-.13h-.15c-.08 0-.2.03-.3.13-.1.1-.38.35-.38.85s.38 1 .43 1.08c.05.08.75 1.23 1.83 1.7.98.44 1.18.35 1.4.33.23-.03.59-.24.68-.48.08-.23.08-.43.05-.48-.03-.05-.08-.08-.18-.13z" />
  </svg>
);


export default function Home() {
  const workshopImage = PlaceHolderImages.find(p => p.id === 'workshop-photo');

  const reviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      text: "Motor Khan is the best! They fixed a huge dent on my car, and it looks brand new. The paint job is flawless. Highly recommended for their professionalism and affordable prices."
    },
    {
      name: "Priya Singh",
      rating: 5,
      text: "I've been a customer since 2010. Their service is consistently excellent. They use genuine parts and the staff is very knowledgeable. Trustworthy and reliable workshop in Rohini."
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: "Fantastic experience! The team at Motor Khan provided a quick and accurate quote. The work was completed on the same day as promised. I'm very impressed with the quality."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background font-body font-thin">
      <main className="flex-1">
        
        <HeroSectionOne />

        {/* Why Choose Us Section */}
        <FeaturesSectionDemo />

        {/* Customer Reviews Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-black italic tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 font-headline uppercase">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <Card key={index} className="flex flex-col shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-black italic">{review.name}</CardTitle>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-thin">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full py-12 md:py-24 bg-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-black italic tracking-tighter md:text-4xl/tight font-headline uppercase">
                Get Your Free Quote Today
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-thin">
                Visit us or get in touch for a no-obligation estimate for your car.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
              <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                <a href="https://wa.me/919876543210" target="_blank"><WhatsAppIcon className="mr-2 h-4 w-4" /> WhatsApp</a>
              </Button>
            </div>
            <div className="mt-8 space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="font-medium font-thin">Shop No 12, near Rice Mill, Vijay vihar Phase I, Block B, Rithala, Rohini, New Delhi, Delhi, 110085</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111971.50894224923!2d77.01392298339492!3d28.716268794936916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0741eb2800b3%3A0x45640f1a595f4ff7!2sKhan%20Motors!5e0!3m2!1sen!2sin!4v1762077217305!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
