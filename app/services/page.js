import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
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
    <div className="space-y-4">
      <SectionTitle title="Services" />
      <h3 className="text-right p-1 px-3 mb-1 rounded-sm w-fit text-sm sm:text-base service_title">
        3D Videos
      </h3>
      <div className="rounded-sm w-full overflow-hidden">
        <video className="w-full h-[400px] object-cover" autoPlay muted loop>
          <source src="/terrace.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  lg:mx-0">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 w-fit fade_in">
              <h3 className="text-right p-1 px-3 rounded-sm w-fit text-sm sm:text-base service_title">
                {service.title}
              </h3>
              <Image
                className="rounded-sm h-full object-cover w-full"
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
