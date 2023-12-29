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
  const [imgAnimation, setImgAnimation] = useState("");
  useEffect(() => {
    setInterval(() => {
      setImgAnimation("home_img_animation");
      setImgNumber((prev) => (prev + 1) % images.length);
      setTimeout(() => {
        setImgAnimation("");
      }, 500);
    }, 3000);
  }, []);
  return (
    <div className="lg:self-start fade_in">
      <Image
        draggable={false}
        className={`${imgAnimation} mx-auto rounded-sm home_preview_img`}
        src={images[imgNumber].src}
        placeholder="blur"
        blurDataURL={images[imgNumber].placeholder}
        alt={images[imgNumber].alt}
        width={700}
        height={400}
      />
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
