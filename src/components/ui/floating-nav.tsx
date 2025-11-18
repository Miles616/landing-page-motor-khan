'use client';

import Link from 'next/link';
import { Home, Phone, Mail } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function FloatingNav() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', link: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'WhatsApp', link: 'https://wa.me/918595853918', icon: <IconBrandWhatsapp className="h-5 w-5" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="h-5 w-5" /> },
    { name: 'Call', link: 'tel:+919871358670', icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 w-full">
      <div className="bg-background border-t border-border shadow-t-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target={item.link.startsWith('http') || item.link.startsWith('tel') ? '_blank' : '_self'}
              className={cn(
                'flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors',
                (pathname === item.link || (item.link === '#contact' && pathname.includes('#contact'))) && 'text-primary'
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
