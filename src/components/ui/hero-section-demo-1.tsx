"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="flex justify-center py-4">
        <Image
          src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png"
          alt="Motor Khan Logo"
          width={80}
          height={80}
          className="size-20"
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
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-foreground">
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-muted-foreground"
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
            <MessageSquare className="h-4 w-4" /> WhatsApp
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
