
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Star, Mail, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import HeroSectionOne from '@/components/ui/hero-section-demo-1';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';


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
        
        <div className="flex justify-center py-4">
            <Image
            src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png"
            alt="Motor Khan Logo"
            width={80}
            height={80}
            className="size-20 object-contain"
            />
        </div>

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
                          <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
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
            <div className="flex flex-col items-center gap-4 min-[400px]:flex-row justify-center">
              <HoverBorderGradient
                as="a"
                href="tel:+919871358670"
                containerClassName="rounded-full"
                className="bg-white text-black dark:bg-white dark:text-black flex items-center space-x-2"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>Call Now</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                href="https://wa.me/918595853918"
                target="_blank"
                containerClassName="rounded-full"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <IconBrandWhatsapp className="mr-2 h-4 w-4" />
                <span>WhatsApp</span>
              </HoverBorderGradient>
            </div>
            <div className="mt-8 space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
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
      <footer className="bg-black text-muted-foreground py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+919871358670" className="hover:text-primary">+91 9871358670</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <IconBrandWhatsapp className="h-4 w-4" />
                    <a href="https://wa.me/918595853918" target="_blank" className="hover:text-primary">+91 8595853918</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@motorkhan.com" className="hover:text-primary">info@motorkhan.com</a>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm">
                <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                    Main Website <Globe className="h-4 w-4" />
                </a>
                <p>
                  © {new Date().getFullYear()} Motor Khan. All Rights Reserved.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
