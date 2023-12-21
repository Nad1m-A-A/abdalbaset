import Image from "next/image";
import Link from "next/link";
function page() {
  const projects = [
    {
      title: "graduation",
      image: "/images/graduation/1.webp",
    },
    {
      title: "landscape",
      image: "/images/landscape/1.webp",
    },

    {
      title: "plant store",
      path: "plant_store",
      image: "/images/plant_store/1.webp",
    },
    {
      title: "resort",
      image: "/images/resort/1.webp",
    },
    {
      title: "terrace",
      image: "/images/terrace/1.webp",
    },
    {
      title: "villa",
      image: "/images/villa/1.webp",
    },
    {
      title: "watch store",
      path: "watch_store",
      image: "/images/watch_store/1.webp",
    },
    {
      title: "bathroom",
      image: "/images/bathroom/1.webp",
    },
    {
      title: "mall",
      image: "/images/mall/1.webp",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 fade_in">
      {projects.map((project, i) => {
        return (
          <Link key={i} href={`/projects/${project.path ? project.path : project.title}`}>
            <div
              className="group rounded-sm overflow-hidden shadow-md cursor-pointer"
            >
              <div className="overflow-hidden project_prev_container">
                <Image
                  className="project_prev select-none group-hover:scale-110 max-h-56 object-cover"
                  sizes="(max-width: 600px) 70vw, (max-width: 1200px) 40vw, 40vw"
                  alt={project.title}
                  src={project.image}
                  width={300}
                  height={230}
                />
              </div>
              <h3 className="text-sm md:text-base px-5 py-2 font-semibold capitalize project_title text-end">
                {project.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default page;
