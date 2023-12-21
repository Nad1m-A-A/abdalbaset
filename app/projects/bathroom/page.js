import Project from "@/app/components/projects/Project";

function Bathroom() {
  const projectImages = [
    {
      alt: "bathroom",
      src: "/images/bathroom/1.webp",
    },
    {
      alt: "bathroom",
      src: "/images/bathroom/2.webp",
    },
    {
      alt: "bathroom",
      src: "/images/bathroom/3.webp",
    },
    {
      alt: "bathroom",
      src: "/images/bathroom/4.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Bathroom" large={true} />
    </>
  );
}

export default Bathroom;
