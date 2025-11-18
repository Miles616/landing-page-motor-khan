
'use client';

import Link from 'next/link';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function FloatingNav() {
  const pathname = usePathname();
  const navItems = [
    { name: 'WhatsApp', link: 'https://wa.me/918595853918', icon: <IconBrandWhatsapp className="h-5 w-5" /> },
    { name: 'Location', link: '#contact', icon: <MapPin className="h-5 w-5" /> },
    { name: 'Home', link: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="h-5 w-5" /> },
    { name: 'Call', link: 'tel:+919871358670', icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-4 inset-x-0 z-50 w-full flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        className="bg-background/80 backdrop-blur-sm border border-border shadow-lg rounded-full"
      >
        <div className="flex justify-around items-center h-14 px-2 space-x-1">
          {navItems.map((item) => {
            const isActive = (pathname === item.link && item.name === 'Home') || (item.link.startsWith('#') && pathname.includes(item.link));
            return (
                <Link
                key={item.name}
                href={item.link}
                aria-label={item.name}
                target={item.link.startsWith('http') || item.link.startsWith('tel') ? '_blank' : '_self'}
                className={cn(
                    'relative flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors w-14 h-12 rounded-full',
                    isActive && 'text-primary'
                )}
                >
                {isActive && (
                    <motion.span
                    layoutId="floating-nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    />
                )}
                <div className="relative z-10">
                    {item.icon}
                </div>
                </Link>
            )
          })}
        </div>
      </motion.div>
    </div>
  );
}
