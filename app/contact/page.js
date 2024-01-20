import MyMap from "../components/contact/MyMap";
import Location from "../components/contact/Location";
import Phone from "../components/contact/Phone";
import Email from "../components/contact/Email";
export default function ContactPage() {
  const contactItems = [
    { location: "Dubai - Deira" },
    { phoneNumber: "+971-50-502-5334" },
    { email: "contact@designerab.com" },
  ];
  return (
    <div>
      <div className="w-11/12 flex gap-6 flex-col-reverse lg:flex-row lg:items-end fade_in">
        <MyMap mapStyle={"mapbox://styles/mapbox/streets-v12"} />

        <ul className="leading-10 text-sm text-dark">
          {contactItems.map((item, index) => (
            <li key={index}>
              {item.location && <Location location={item.location} />}
              {item.phoneNumber && <Phone phoneNumber={item.phoneNumber} />}
              {item.email && <Email email={item.email} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
