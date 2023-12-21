import Project from "@/app/components/projects/Project";

const Graduation = () => {
  const projectImages = [
    {
      alt: "graduation",
      src: "/images/graduation/1.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/2.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/3.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/4.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/5.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/6.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/7.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/8.webp",
    },
    {
      alt: "graduation",
      src: "/images/graduation/9.webp",
    },
  ];

  return (
    <Project images={projectImages} title="Graduation"/>
  );
};

export default Graduation;
