import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, MapPin, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';

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
    <div className="flex flex-col min-h-screen bg-background font-body">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:gap-12 items-center justify-center">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-foreground">
                  Car Denting & Painting Experts in Rohini, Delhi
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                  Get same-day denting, painting & restoration from Motor Khan – trusted since 1995.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  <a href="https://wa.me/919876543210" target="_blank"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</a>
                </Button>
              </div>
              {workshopImage && (
                <div className="w-full max-w-4xl mx-auto pt-8">
                  <Image
                    src={workshopImage.imageUrl}
                    alt={workshopImage.description}
                    width={1200}
                    height={800}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                    data-ai-hint={workshopImage.imageHint}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <FeaturesSectionDemo />

        {/* Customer Reviews Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 font-headline">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <Card key={index} className="flex flex-col shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{review.name}</CardTitle>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full py-12 md:py-24 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Get Your Free Quote Today
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Visit us or get in touch for a no-obligation estimate for your car.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
              <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                <a href="https://wa.me/919876543210" target="_blank"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</a>
              </Button>
            </div>
            <div className="mt-8 space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="font-medium">Shop No 12, near Rice Mill, Vijay vihar Phase I, Block B, Rithala, Rohini, New Delhi, Delhi, 110085</p>
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
