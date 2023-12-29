import Image from "next/image";
export default function ServicesPage() {
  const services = [
    {
      title: "Facades design",
      image: "/images/facade_2/2.webp",
    },
    {
      title: "Interior design",
      image: "/images/apartment/3.webp ",
    },
    {
      title: "Architectural plans",
      image: "/images/services/services-plan.jpg",
    },
    {
      title: "Landscapes",
      image: "/images/landscape/up.webp",
    },
  ];
  return (
    <div className="m-auto">
      <div className="w-fit mb-8 m-auto">
        <h3 className="text-right p-1 px-3 mb-1 rounded-sm w-fit ml-auto text-sm sm:text-base service_title">
          3D Videos
        </h3>
        <div className="shadow-md rounded-sm overflow-hidden">
        <video width="905" height="400" autoPlay muted loop>
          <source src="/terrace.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-fit mx-auto lg:mx-0">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-0.5 w-fit fade_in">
              <h3 className="text-right p-1 px-3 rounded-sm w-fit ml-auto text-sm sm:text-base service_title">
                {service.title}
              </h3>
              <Image
                className="rounded-sm shadow-md h-full object-cover"
                src={service.image}
                alt={service.title}
                width={440}
                height={250}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
