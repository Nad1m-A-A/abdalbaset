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
      <div>
        <div className="rounded-sm w-full overflow-hidden">
          <video className="w-full h-[400px] object-cover" autoPlay muted loop>
            <source src="/terrace.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h3 className="px-5 py-2 rounded-sm text-sm sm:text-base service_title">
          3D Videos
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mx-0">
        {services.map((service, index) => {
          return (
            <div key={index} className="flex flex-col w-fit fade_in">
              <Image
                className="rounded-sm h-full object-cover w-full"
                src={service.image}
                alt={service.title}
                width={440}
                height={250}
              />
              <h3 className="px-5 py-2 rounded-sm text-sm sm:text-base service_title">
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
