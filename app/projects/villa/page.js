import Project from "@/app/components/projects/Project";

function Villa() {
  const projectImages = [
    {
      alt: "villa",
      src: "/images/villa/1.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/2.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/3.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/4.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/5.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/6.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/7.webp",
    },
    {
      alt: "villa",
      src: "/images/villa/8.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Villa"/>
    </>
  )
}

export default Villa;
