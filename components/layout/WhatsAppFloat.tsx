"use client";

import { MessageCircle } from "lucide-react";
import { profile } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_0_24px_rgba(37,211,102,0.35)] transition-transform hover:scale-110 sm:right-6 sm:bottom-6 sm:h-14 sm:w-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
