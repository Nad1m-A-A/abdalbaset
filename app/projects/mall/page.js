import Project from "@/app/components/projects/Project";

function Mall() {
  const projectImages = [
    {
      alt: "mall",
      src: "/images/mall/1.webp",
    },
    {
      alt: "mall",
      src: "/images/mall/2.webp",
    },
    {
      alt: "mall",
      src: "/images/mall/3.webp",
    },
    {
      alt: "mall",
      src: "/images/mall/4.webp",
    },
    {
      alt: "mall",
      src: "/images/mall/5.webp",
    },
  ]
  return (
    <>
      <Project images={projectImages} title="Mall" large={true}/>
    </>
  )
}

export default Mall