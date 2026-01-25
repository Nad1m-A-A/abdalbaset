import MyMap from "../components/contact/MyMap";
import Location from "../components/contact/Location";
import Phone from "../components/contact/Phone";
import Email from "../components/contact/Email";
import SectionTitle from "../components/SectionTitle";
export default function ContactPage() {
  const contactItems = [
    { location: "Dubai - Deira" },
    { phoneNumber: "+971-50-502-5334" },
    { email: "contact@designerab.com" },
  ];
  return (
    <div className="space-y-4 w-full">
      <SectionTitle title="Contact" />
      <div className="w-11/12 space-y-2 fade_in">
        <ul className="leading-10 text-sm text-dark">
          {contactItems.map((item, index) => (
            <li key={index}>
              {item.location && <Location location={item.location} />}
              {item.phoneNumber && <Phone phoneNumber={item.phoneNumber} />}
              {item.email && <Email email={item.email} />}
            </li>
          ))}
        </ul>
        <MyMap mapStyle={"mapbox://styles/mapbox/streets-v12"} />
      </div>
    </div>
  );
}
