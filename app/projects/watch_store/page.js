import Project from "@/app/components/projects/Project";

function WatchStore() {
  const projectImages = [
    {
      alt: "watch store",
      src: "/images/watch_store/1.webp",
      placeholder: "/images/watch_store/low_1.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/2.webp",
      placeholder: "/images/watch_store/low_2.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/3.webp",
      placeholder: "/images/watch_store/low_3.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/4.webp",
      placeholder: "/images/watch_store/low_4.webp",
    },
    
  ];
  return (
    <>
      <Project images={projectImages} title="Watch Store" />
    </>
  );
}

export default WatchStore;
