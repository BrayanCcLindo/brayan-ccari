"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectPhoto } from "@/types";

export function PhotoGallery({ photos }: { photos: ProjectPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const items = photos.slice(0, 4);

  if (items.length === 0) return null;

  if (items.length === 1) {
    return (
      <div className="relative h-[420px] rounded-2xl overflow-hidden border border-gray-600">
        <Image src={items[0].src} alt={items[0].alt} fill className="object-cover" sizes="100vw" />
      </div>
    );
  }

  return (
    <div className="flex gap-2 rounded-2xl overflow-hidden" style={{ height: "420px" }}>
      {items.map((photo, i) => (
        <button
          key={photo.id}
          type="button"
          aria-label={photo.alt}
          className="relative overflow-hidden rounded-2xl border border-gray-600 cursor-pointer"
          style={{
            flex: active === i ? 3.5 : 1,
            minWidth: 0,
            padding: 0,
            background: "transparent",
            transition: "flex 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
        >
          {/* Image with subtle scale on expand */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: active === i ? 1.04 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>

          {/* Dim overlay on inactive panels */}
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: active !== null && active !== i ? 0.45 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Collapsed: number label */}
          <motion.div
            className="absolute bottom-3 left-0 right-0 flex justify-center"
            animate={{ opacity: active === i ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white/60 text-xs font-bold tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Expanded: gradient + counter */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent pointer-events-none"
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-5"
            animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 10 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <span className="text-white/60 text-xs font-bold tracking-widest">
              {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </motion.div>
        </button>
      ))}
    </div>
  );
}
