import Project from "@/app/components/projects/Project";
function Resort() {
  const projectImages = [
    {
      alt: "resort",
      src: "/images/resort/1.webp",
      placeholder: "/images/resort/low_1.webp",

    },
    {
      alt: "resort",
      src: "/images/resort/2.webp",
      placeholder: "/images/resort/low_2.webp",

    },
    {
      alt: "resort",
      src: "/images/resort/3.webp",
      placeholder: "/images/resort/low_3.webp",

    },
    {
      alt: "resort",
      src: "/images/resort/4.webp",
      placeholder: "/images/resort/low_4.webp",

    },
    {
      alt: "resort",
      src: "/images/resort/5.webp",
      placeholder: "/images/resort/low_5.webp",

    },
    {
      alt: "resort",
      src: "/images/resort/up.webp",
      placeholder: "/images/resort/low_up.webp",

    },
  ]
  return (
    <>
      <Project images={projectImages} title="Resort"/>
    </>
  )
}

export default Resort