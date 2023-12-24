import Project from "@/app/components/projects/Project";

const JewelleryStore = () => {
  const projectImages = [
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/1.webp",
      placeholder: "/images/jewellery_store/low_1.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/2.webp",
      placeholder: "/images/jewellery_store/low_2.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/3.webp",
      placeholder: "/images/jewellery_store/low_3.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/4.webp",
      placeholder: "/images/jewellery_store/low_4.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/5.webp",
      placeholder: "/images/jewellery_store/low_5.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/6.webp",
      placeholder: "/images/jewellery_store/low_6.webp",
    },
    {
      alt: "Jewellery Store",
      src: "/images/jewellery_store/7.webp",
      placeholder: "/images/jewellery_store/low_7.webp",
    }
  ];

  return (
    <Project images={projectImages} title="Jewellery Store" large={true}/>
  );
};

export default JewelleryStore;
