import Project from "@/app/components/projects/Project";
function Terrace() {
  const projectImages = [
    {
      alt: "terrace",
      src: "/images/terrace/1.webp",
      placeholder: "/images/terrace/low1.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/2.webp",
      placeholder: "/images/terrace/low2.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/3.webp",
      placeholder: "/images/terrace/low3.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/4.webp",
      placeholder: "/images/terrace/low4.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/5.webp",
      placeholder: "/images/terrace/low5.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/6.webp",
      placeholder: "/images/terrace/low6.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/7.webp",
      placeholder: "/images/terrace/low7.webp",
    },
    {
      alt: "terrace",
      src: "/images/terrace/8.webp",
      placeholder: "/images/terrace/low8.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Terrace" />
    </>
  );
}

export default Terrace;
