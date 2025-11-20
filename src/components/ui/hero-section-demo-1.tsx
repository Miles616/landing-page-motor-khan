
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Spotlight } from "./spotlight";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(120, 50, 50, 0.4)"
        />
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
          {"Car Denting, Painting, Repair & Servicing Experts in Rohini"
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
                {word.replace(",", "") === "Denting" || word === "Painting" ? (
                  <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer">{word}</a>
                ) : (
                  word
                )}
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
          Get same-day <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer">denting</a>, <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer">painting</a> & restoration from Motor Khan – trusted
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
            containerClassName="rounded-full"
            as="a"
            href="https://wa.me/918595853918"
            target="_blank"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <IconBrandWhatsapp />
            <span>WhatsApp</span>
          </HoverBorderGradient>
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
