"use client";
import NextImg from "next/image";
import { useState } from "react";
function Preview() {
  const images = [
    { src: "/images/prev/front-villa-prev.jpg", alt: "front villa" },
    { src: "/images/prev/resort-prev.jpg", alt: "resort" },
    { src: "/images/prev/mall-prev.jpg", alt: "mall" },
    { src: "/images/prev/terrace-prev.jpg", alt: "terrace" },
    { src: "/images/prev/landscape-prev.jpg", alt: "landscape" },
    { src: "/images/prev/side-villa-prev.jpg", alt: "side villa" },
    { src: "/images/prev/plants-shop-prev.jpg", alt: "plants shop" },
  ];
  const [imgNumber, setImgNumber] = useState(0);
  const [imgAnimation, setImgAnimation] = useState("");
  const imgClickHandler = () => {
    setImgAnimation("home_img");
    setImgNumber((prev) => (prev + 1) % images.length);
    setTimeout(() => {
      setImgAnimation("");
    }, 500);
  };
  return (
    <div className="lg:self-start fade_in">
      <NextImg
      draggable={false}
        className={`${imgAnimation} mx-auto rounded-sm cursor-pointer preview_img`}
        onClick={imgClickHandler}
        src={images[imgNumber].src}
        alt={images[imgNumber].alt}
        width={700}
        height={400}
        sizes="(max-width: 600px) 50vw, (max-width: 1200px) 80vw, 80vw"
        // priority // what about this?
      />
      <div className="invisible">
        {images.map((img, i) => {
          return (
            <NextImg
            key={i}
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="(max-width: 600px) 50vw, (max-width: 1200px) 50vw, 100vw"
          />
          )
        })}
      </div>
    </div>
  );
}

export default Preview;
