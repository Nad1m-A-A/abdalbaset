"use client";
import Image from "next/image";
import { useState } from "react";
function Preview() {
  const images = [
    { src: "/images/apartment/5.webp", alt: "walk-in closet" },
    { src: "/images/facade_1/1.webp", alt: "villa facade" },
    { src: "/images/facade_2/3.webp", alt: "villa facade" },
    { src: "/images/landscape/1.webp", alt: "landscape" },
    { src: "/images/nostalgic/1.webp", alt: "nostalgic room with statues" },
    { src: "/images/terrace/5.webp", alt: "terrace" },
    { src: "/images/plant_store/2.webp", alt: "plants shop" },
  ];
  const [imgNumber, setImgNumber] = useState(0);
  const [imgAnimation, setImgAnimation] = useState("");
  const imgClickHandler = () => {
    setImgAnimation("home_img_animatioin");
    setImgNumber((prev) => (prev + 1) % images.length);
    setTimeout(() => {
      setImgAnimation("");
    }, 500);
  };
  return (
    <div className="lg:self-start fade_in">
      <Image
        draggable={false}
        className={`${imgAnimation} mx-auto rounded-sm cursor-pointer preview_img`}
        onClick={imgClickHandler}
        src={images[imgNumber].src}
        alt={images[imgNumber].alt}
        width={700}
        height={400}
      />
      <div className="invisible">
        {images.map((img, i) => {
          return (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={0}
              height={0}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Preview;
