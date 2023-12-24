import Project from "@/app/components/projects/Project";

function Villa() {
  const projectImages = [
    {
      alt: "villa",
      src: "/images/villa/2.webp",
      placeholder: "/images/villa/low_2.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/3.webp",
      placeholder: "/images/villa/low_3.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/4.webp",
      placeholder: "/images/villa/low_4.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/5.webp",
      placeholder: "/images/villa/low_5.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/6.webp",
      placeholder: "/images/villa/low_6.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/7.webp",
      placeholder: "/images/villa/low_7.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/8.webp",
      placeholder: "/images/villa/low_8.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Villa" />
    </>
  );
}

export default Villa;
