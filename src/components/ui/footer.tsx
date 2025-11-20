'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
    {children}
  </Link>
);

const FooterHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-sm font-semibold text-foreground tracking-wider mb-4">{children}</h3>
);

export default function Footer() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCoords({ x, y });
    }
  };


  return (
    <footer className="bg-black border-t">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo and Copyright */}
            <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4">
                    <Image src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-lighttheme.png" alt="MOTOR KHAN Logo" width={60} height={16} className="dark:hidden" />
                    <Image src="https://delhi.motorkhan.com/images/logo/motor-khan-rithala-rohini-delhi-darktheme.png" alt="MOTOR KHAN Logo" width={100} height={100} className="hidden dark:block object-contain" />
                </Link>
            </div>
            
            {/* Contact */}
            <div>
                <FooterHeader>Contact Us</FooterHeader>
                <div className="flex flex-col space-y-3">
                    <p className="text-sm text-muted-foreground">Shop No. 12, Near Rice Mill, Vijay Vihar Phase I, Block B, Rithala, Rohini, Delhi 110085, India</p>
                </div>
            </div>

            {/* Socials */}
            <div>
                <FooterHeader>Get in Touch</FooterHeader>
                <div className="flex flex-col space-y-3">
                    <FooterLink href="tel:+918595853918">+91 8595853918</FooterLink>
                    <FooterLink href="tel:+919871358670">+91 9871358670</FooterLink>
                    <FooterLink href="mailto:motorkhandelhi@gmail.com">motorkhandelhi@gmail.com</FooterLink>
                </div>
            </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative text-center"
        >
          <span
            className="font-headline font-bold text-transparent transition-colors duration-300"
            style={{
              // @ts-ignore
              "--x": `${coords.x}px`,
              "--y": `${coords.y}px`,
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              lineHeight: 1,
              background: `radial-gradient(400px circle at var(--x) var(--y), hsl(0 0% 100%) 0%, hsla(0, 0%, 100%, 0.1) 25%, transparent 50%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            MOTOR KHAN
          </span>
        </div>

      </div>
       <div className="container mx-auto px-4 pb-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <p>&copy; {new Date().getFullYear()} MOTOR KHAN. All Rights Reserved.</p>
            <div className="flex gap-4">
                 <FooterLink href="#">Privacy Policy</FooterLink>
                 <FooterLink href="#">Terms of Service</FooterLink>
            </div>
        </div>
      </div>
    </footer>
  );
}