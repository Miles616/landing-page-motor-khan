
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Star, Mail, Globe, Home as HomeIcon } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import HeroSectionOne from '@/components/ui/hero-section-demo-1';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Toaster } from '@/components/ui/toaster';
import { ContactForm } from '@/components/ui/contact-form';
import { FloatingDock } from '@/components/ui/floating-dock';
import { Spotlight } from '@/components/ui/spotlight';
import Footer from '@/components/ui/footer';
import SparklesPreview from '@/components/sparkles-demo';
import { ElfsightWidget } from '@/components/ui/elfsight-widget';
import { Iphone } from "@/components/ui/iphone";


export default function Home() {
  const workshopImage = PlaceHolderImages.find(p => p.id === 'workshop-photo');
  const navItems = [
    { title: 'Location', link: 'https://maps.app.goo.gl/tBfGy2pgqQvTeM7n9', icon: <MapPin className="h-5 w-5" /> },
    { title: 'WhatsApp', link: 'https://wa.me/918595853918', icon: <IconBrandWhatsapp className="h-5 w-5" /> },
    { title: 'Home', link: '/', icon: <HomeIcon className="h-7 w-7" /> },
    { title: 'Contact', link: '#contact', icon: <Mail className="h-5 w-5" /> },
    { title: 'Call', link: 'tel:+919871358670', icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background font-body font-thin">
      <Toaster />
      <main className="flex-1 pb-20 md:pb-0">
        
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
        <SparklesPreview>
          <FeaturesSectionDemo />
        </SparklesPreview>
        

        {/* Customer Reviews Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-black italic tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 font-headline uppercase">
              What Our Customers Say
            </h2>
            <ElfsightWidget />
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-black italic tracking-tighter md:text-4xl/tight font-headline uppercase">
                Ready for a Flawless Finish?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-thin">
                Just fill out the form below, or give us a call to get a free estimate for your car.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
                <ContactForm />
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
            <div id="map" className="mt-8 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black italic tracking-tighter md:text-3xl/tight font-headline uppercase">
                Find Us
              </h3>
              <div className="w-full max-w-sm mx-auto p-4">
                <Iphone showHeader>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111971.50894224923!2d77.01392298339492!3d28.716268794936916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0741eb2800b3%3A0x45640f1a595f4ff7!2sKhan%20Motors!5e0!3m2!1sen!2sin!4v1762077217305!5m2!1sen!2sin" 
                        style={{border:0, width: '100%', height: '100%'}}
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Iphone>
              </div>
              <a href="https://maps.app.goo.gl/tBfGy2pgqQvTeM7n9" target="_blank" rel="noopener noreferrer">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={navItems} />
      </div>
    </div>
  );
}
