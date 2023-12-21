import Project from "@/app/components/projects/Project";

function WatchStore() {
  const projectImages = [
    {
      alt: "watch store",
      src: "/images/watch_store/1.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/2.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/3.webp",
    },
    {
      alt: "watch store",
      src: "/images/watch_store/4.webp",
    },
    
  ];
  return (
    <>
      <Project images={projectImages} title="Watch Store" />
    </>
  );
}

export default WatchStore;
