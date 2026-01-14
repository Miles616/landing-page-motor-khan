
'use client';

import { IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function StickyChat() {
  return (
    <Link
      href="https://wa.me/918595853918"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 1.5,
        }}
        whileHover={{ scale: 1.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
      >
        <IconBrandWhatsapp className="h-8 w-8" />
      </motion.div>
    </Link>
  );
}
