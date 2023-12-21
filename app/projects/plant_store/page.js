import Project from "@/app/components/projects/Project";

function PlantStore() {
  const projectImages = [
    {
      alt: "plant store",
      src: "/images/plant_store/1.webp",
    },
    {
      alt: "plant_store",
      src: "/images/plant_store/2.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/3.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/4.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/5.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/6.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/7.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Plant Store"/>
    </>
  );
}

export default PlantStore;
