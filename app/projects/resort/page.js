import Project from "@/app/components/projects/Project";
function Resort() {
  const projectImages = [
    {
      alt: "resort",
      src: "/images/resort/1.webp",
    },
    {
      alt: "resort",
      src: "/images/resort/2.webp",
    },
    {
      alt: "resort",
      src: "/images/resort/3.webp",
    },
    {
      alt: "resort",
      src: "/images/resort/4.webp",
    },
    {
      alt: "resort",
      src: "/images/resort/5.webp",
    },
    {
      alt: "resort",
      src: "/images/resort/up.webp",
    },
  ]
  return (
    <>
      <Project images={projectImages} title="Resort"/>
    </>
  )
}

export default Resort