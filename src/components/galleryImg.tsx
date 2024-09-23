"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

export default function GaleriaImagenes({ images }: { images: Image[] }) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [actualIndex, setActualIndex] = useState(0);

  const newImage = (direccion: number) => {
    setActualIndex(prevIndice => {
      const newIndex = (prevIndice + direccion + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKeyBoard = (e: KeyboardEvent) => {
      if (selectedImage) {
        switch (e.key) {
          case "ArrowLeft":
            newImage(-1);
            break;
          case "ArrowRight":
            newImage(1);
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyBoard);
    return () => window.removeEventListener("keydown", handleKeyBoard);
  }, [selectedImage]);

  return (
    <div className="hidden grid-cols-1 gap-4 p-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
      {images.map((imagen, index) => (
        <Dialog.Root
          key={imagen.id}
          open={selectedImage === imagen}
          onOpenChange={open => {
            if (open) {
              setSelectedImage(imagen);
              setActualIndex(index);
            } else {
              setSelectedImage(null);
            }
          }}
        >
          <Dialog.Trigger asChild>
            <button
              className="w-full h-auto aspect-[3/2] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple"
              aria-label={`Ver ${imagen.alt}`}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-10 bg-white/50" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[70vh] w-[70vw] sm:h-[80vh] sm:w-[80vw] z-50 translate-x-[-50%] translate-y-[-50%] rounded-lg focus:outline-none flex items-center justify-center">
              <div className="shadow-xl ">
                <img
                  src={images[actualIndex].src}
                  alt={imagen.alt}
                  className="object-cover w-full rounded-lg"
                />
                <button
                  className="absolute p-1 text-black transform -translate-y-1/2 bg-gray-600 rounded-full left-2 top-1/2 focus:outline-none focus:ring-2 focus:ring-purple"
                  onClick={e => {
                    e.stopPropagation();
                    newImage(-1);
                  }}
                  aria-label="Previous Image"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  className="absolute p-1 text-black transform -translate-y-1/2 bg-gray-600 rounded-full right-2 top-1/2 focus:outline-none focus:ring-2 focus:ring-purple"
                  onClick={e => {
                    e.stopPropagation();
                    newImage(1);
                  }}
                  aria-label="Next Image"
                >
                  <ChevronRightIcon />
                </button>
                <div className="absolute hidden px-4 py-2 text-sm text-center text-black transform -translate-x-1/2 bg-white rounded-full bottom-4 left-1/2 lg:flex">
                  Use las flechas ← → para navegar, Esc para cerrar
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
