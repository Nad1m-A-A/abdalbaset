import Project from "@/app/components/projects/Project";

const Hospital = () => {
  const projectImages = [
    {
      alt: "hospital",
      src: "/images/hospital/1.webp",
      placeholder: "/images/hospital/low_1.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/2.webp",
      placeholder: "/images/hospital/low_2.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/3.webp",
      placeholder: "/images/hospital/low_3.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/4.webp",
      placeholder: "/images/hospital/low_4.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/5.webp",
      placeholder: "/images/hospital/low_5.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/6.webp",
      placeholder: "/images/hospital/low_6.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/7.webp",
      placeholder: "/images/hospital/low_7.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/8.webp",
      placeholder: "/images/hospital/low_8.webp",
    },
    {
      alt: "hospital",
      src: "/images/hospital/9.webp",
      placeholder: "/images/hospital/low_9.webp",
    },
  ];

  return (
    <Project images={projectImages} title="Hospital"/>
  );
};

export default Hospital;
