import Project from "@/app/components/projects/Project";

function Landscape() {
  const projectImages = [
    {
      alt: "landscape",
      src: "/images/landscape/1.webp",
    },
    {
      alt: "landscape",
      src: "/images/landscape/2.webp",
    },
    {
      alt: "landscape",
      src: "/images/landscape/3.webp",
    },
    {
      alt: "landscape",
      src: "/images/landscape/up.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Landscape" />
    </>
  );
}

export default Landscape;
