import Project from "@/app/components/projects/Project";

function Apartment() {
  const projectImages = [
    {
      alt: "apartment",
      src: "/images/apartment/1.webp",
      placeholder: "/images/apartment/low_1.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/2.webp",
      placeholder: "/images/apartment/low_2.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/3.webp",
      placeholder: "/images/apartment/low_3.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/4.webp",
      placeholder: "/images/apartment/low_4.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/5.webp",
      placeholder: "/images/apartment/low_5.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/6.webp",
      placeholder: "/images/apartment/low_6.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/7.webp",
      placeholder: "/images/apartment/low_7.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/8.webp",
      placeholder: "/images/apartment/low_8.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/9.webp",
      placeholder: "/images/apartment/low_9.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/10.webp",
      placeholder: "/images/apartment/low_10.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/11.webp",
      placeholder: "/images/apartment/low_11.webp",
    },
    {
      alt: "apartment",
      src: "/images/apartment/12.webp",
      placeholder: "/images/apartment/low_12.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Apartment" />
    </>
  );
}

export default Apartment;
