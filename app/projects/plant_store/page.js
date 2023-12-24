import Project from "@/app/components/projects/Project";

function PlantStore() {
  const projectImages = [
    {
      alt: "plant store",
      src: "/images/plant_store/1.webp",
      placeholder: "/images/plant_store/low_1.webp",
    },
    {
      alt: "plant_store",
      src: "/images/plant_store/2.webp",
      placeholder: "/images/plant_store/low_2.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/3.webp",
      placeholder: "/images/plant_store/low_3.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/4.webp",
      placeholder: "/images/plant_store/low_4.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/5.webp",
      placeholder: "/images/plant_store/low_5.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/6.webp",
      placeholder: "/images/plant_store/low_6.webp",
    },
    {
      alt: "plant store",
      src: "/images/plant_store/7.webp",
      placeholder: "/images/plant_store/low_7.webp",
    },
  ];
  return (
    <>
      <Project images={projectImages} title="Plant Store" />
    </>
  );
}

export default PlantStore;
