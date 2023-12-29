import Image from "next/image";
import Link from "next/link";
function page() {
  const projects = [
    {
      title: "apartment",
      image: "/images/apartment/1.webp",
      placeholder: "/images/apartment/low_1.webp",
    },
    {
      title: "hospital",
      image: "/images/hospital/1.webp",
      placeholder: "/images/hospital/low_1.webp",
    },
    {
      title: "jewellery store",
      path: "jewellery_store",
      image: "/images/jewellery_store/1.webp",
      placeholder: "/images/jewellery_store/low_1.webp",
    },
    {
      title: "plant store",
      path: "plant_store",
      image: "/images/plant_store/1.webp",
      placeholder: "/images/plant_store/low_1.webp",
    },
    {
      title: "resort",
      image: "/images/resort/1.webp",
      placeholder: "/images/resort/low_1.webp",
    },
    {
      title: "saloon",
      image: "/images/saloon/1.webp",
      placeholder: "/images/saloon/low_1.webp",
    },
    {
      title: "terrace",
      image: "/images/terrace/1.webp",
      placeholder: "/images/terrace/low_1.webp",
    },
    {
      title: "villa",
      image: "/images/villa/2.webp",
      placeholder: "/images/villa/low_2.webp",
    },
    {
      title: "watch store",
      path: "watch_store",
      image: "/images/watch_store/1.webp",
      placeholder: "/images/watch_store/low_1.webp",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 fade_in">
      {projects.map((project, i) => {
        return (
          <Link
            key={i}
            href={`/projects/${project.path ? project.path : project.title}`}
          >
            <div className="group rounded-sm overflow-hidden shadow-md cursor-pointer">
              <div className="overflow-hidden project_prev_container">
                <Image
                  className="project_prev select-none group-hover:scale-110 max-h-56 object-cover"
                  alt={project.title}
                  src={project.image}
                  placeholder='blur'
                  blurDataURL={project.placeholder}
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
