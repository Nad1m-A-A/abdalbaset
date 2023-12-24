import Project from "@/app/components/projects/Project";

const Saloon = () => {
  const projectImages = [
    {
      alt: "Saloon",
      src: "/images/saloon/1.webp",
      placeholder: "/images/saloon/low_1.webp",
    },
    {
      alt: "Saloon",
      src: "/images/saloon/2.webp",
      placeholder: "/images/saloon/low_2.webp",
    },
    {
      alt: "Saloon",
      src: "/images/saloon/3.webp",
      placeholder: "/images/saloon/low_3.webp",
    },
    {
      alt: "Saloon",
      src: "/images/saloon/4.webp",
      placeholder: "/images/saloon/low_4.webp",
    }
  ];

  return (
    <Project images={projectImages} title="Saloon" large={true}/>
  );
};

export default Saloon;
