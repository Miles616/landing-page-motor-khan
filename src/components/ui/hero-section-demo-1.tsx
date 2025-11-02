"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

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


export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="flex justify-center py-4">
        <Image
          src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png"
          alt="Motor Khan Logo"
          width={80}
          height={80}
          className="size-20 object-contain"
        />
      </div>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-black italic md:text-4xl lg:text-7xl text-foreground uppercase">
          {"Car Denting & Painting Experts in Rohini"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-thin text-muted-foreground"
        >
          Get same-day denting, painting & restoration from Motor Khan – trusted
          since 1995.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="tel:+919876543210"
            className="w-60 transform rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="w-60 transform rounded-lg border border-border bg-background px-6 py-2 font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-border bg-card p-4 shadow-md"
        >
          <div className="w-full overflow-hidden rounded-xl border border-border">
            <Image
              src="https://delhi.motorkhan.com/images/about/motor-khan-rithala-rohini-delhi-black-car.jpg"
              alt="Car repair in progress"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
