"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
function PreviewImg() {
  const images = [
    {
      src: "/images/apartment/5.webp",
      placeholder: "/images/apartment/low_5.webp",
      alt: "walk-in closet",
    },
    {
      src: "/images/facade_1/1.webp",
      placeholder: "/images/facade_1/low_1.webp",
      alt: "villa facade",
    },
    {
      src: "/images/facade_2/3.webp",
      placeholder: "/images/facade_2/low_3.webp",
      alt: "villa facade",
    },
    {
      src: "/images/landscape/1.webp",
      placeholder: "/images/landscape/low_1.webp",
      alt: "landscape",
    },
    {
      src: "/images/nostalgic/1.webp",
      placeholder: "/images/nostalgic/low_1.webp",
      alt: "nostalgic room with statues",
    },
    {
      src: "/images/terrace/5.webp",
      placeholder: "/images/terrace/low_5.webp",
      alt: "terrace",
    },
    {
      src: "/images/plant_store/2.webp",
      placeholder: "/images/plant_store/low_2.webp",
      alt: "plants shop",
    },
  ];
  const [imgNumber, setImgNumber] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNumber((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Update active index when imgNumber changes to trigger crossfade
  useEffect(() => {
    setActiveIndex(imgNumber);
  }, [imgNumber]);

  return (
    <div className="lg:self-start fade_in relative w-full max-w-[700px]">
      <div className="relative w-full aspect-[7/4]">
        {images.map((img, i) => (
          <div
            key={`img-${i}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <Image
              draggable={false}
              className="rounded-sm object-cover"
              src={img.src}
              placeholder="blur"
              blurDataURL={img.placeholder}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="invisible">
        {images.map((img, i) => {
          return (
            <Image key={i} src={img.src} alt={img.alt} width={0} height={0} />
          );
        })}
      </div>
    </div>
  );
}

export default PreviewImg;
