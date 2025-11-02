
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Expert Denting & Painting",
      description:
        "Our skilled technicians use advanced techniques to restore your car's body to its original condition. We ensure a flawless finish every time.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Quality You Can Trust",
      description:
        "We use only genuine paints and materials to ensure a long-lasting and high-quality finish for your vehicle.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
        title: "Car Buy & Sell",
        description:
          "Looking to buy or sell a car? We offer a hassle-free experience with fair pricing and a wide selection of quality vehicles.",
        skeleton: <SkeletonFive />,
        className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Our Workshop in Action",
      description:
        "Watch a tour of our workshop and see our expert technicians at work. We take pride in our craft and transparency.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
    {
        title: "Trusted Since 1995",
        description:
          "With decades of experience serving Delhi, we have built a reputation for reliable service and customer satisfaction. Your car is in safe hands.",
        skeleton: <SkeletonFour />,
        className: "col-span-1 lg:col-span-6 border-b lg:border-none",
    }
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-black italic text-black dark:text-white uppercase">
          Why Choose Motor Khan?
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-thin dark:text-neutral-300">
          We combine decades of experience with modern technology to provide the best car <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">denting</a> and <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">painting</a> services in Delhi.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>
                {feature.title.includes("Denting") ? (
                  <>
                    Expert <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Denting</a> & <a href="https://motorkhan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Painting</a>
                  </>
                ) : (
                  feature.title
                )}
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug font-black italic uppercase">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-thin dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
    const images = [
      "https://delhi.motorkhan.com/images/landing-page/car-paint.png",
      "https://delhi.motorkhan.com/images/landing-page/car-wheel.png",
      "https://delhi.motorkhan.com/images/landing-page/clutch-repair.png",
      "https://delhi.motorkhan.com/images/landing-page/bumper-repair.png",
    ];
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full items-center justify-center">
        <Carousel
          className="w-full max-w-xs group"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 rounded-xl overflow-hidden">
                    <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg">
                      <Image
                        src={src}
                        alt="Car service image"
                        fill
                        className="object-cover transition-transform duration-300 scale-125 group-hover:scale-150"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="transition-opacity opacity-0 group-hover:opacity-100" />
          <CarouselNext className="transition-opacity opacity-0 group-hover:opacity-100" />
        </Carousel>
      </div>
    );
  };

export const SkeletonThree = () => {
  return (
    <a
      href="https://youtu.be/c03y89SJqiQ?si=GezkoUA6gdYbSahi"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png"
            alt="Motor Khan Logo White"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-contain object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://delhi.motorkhan.com/images/car-painting.png",
    "https://delhi.motorkhan.com/images/landing-page/car-detailing.png",
    "https://delhi.motorkhan.com/images/landing-page/car-finishing.png",
    "https://delhi.motorkhan.com/images/landing-page/car-painting.png",
    "https://delhi.motorkhan.com/images/landing-page/car-repair.png",
    "https://delhi.motorkhan.com/images/landing-page/engine-repair.png",
    "https://delhi.motorkhan.com/images/landing-page/car-window-repair.png"
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    // This effect runs only on the client, after hydration
    const newRotations = images.map(() => Math.random() * 20 - 10);
    setRotations(newRotations);
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.slice(0, 4).map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: rotations[idx] || 0,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="car repair images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.slice(4).map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
                rotate: rotations[idx + 4] || 0,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="car painting images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const SkeletonFive = () => {
    return (
      <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2">
            <Image
              src="https://delhi.motorkhan.com/images/about/motor-khan-rithala-rohini-delhi-audi.jpg"
              alt="Car showroom with new cars"
              width={800}
              height={800}
              data-ai-hint="car showroom"
              className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
            />
          </div>
        </div>
        <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
      </div>
    );
};
  

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [28.7041, 77.1025], size: 0.1 }, // Delhi
        { location: [28.6139, 77.2090], size: 0.1 }, // New Delhi
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
    

    




