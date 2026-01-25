import PreviewImg from "./components/home/PreviewImg";
import { italiana } from "./fonts";
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";
import ProjectsPage from "./projects/page";
import JourneyPage from "./journey/page";
import AboutPage from "./about/page";


export default function Home() {
  return (
    <div className="flex flex-col space-y-36">
      <div className="space-y-4 w-full flex flex-col">
        <PreviewImg />
        <h1 className={`${italiana.className} w-fit home_phrase lg:text-right text-[clamp(1.6rem,5vw,3rem)]`}>
          This is the path to your dream.
        </h1>
      </div>
      <AboutPage />
      <ServicesPage />
      <ProjectsPage />
      <JourneyPage />
      <ContactPage />
    </div>
  );
}
