"use client";

const Location = ({ location }) => {
  const openGoogleMaps = () => {
    const googleMapsURL =
      "https://www.google.ie/maps/place/Deira+-+Dubai/@25.2690981,55.2844037,13z/data=!3m1!4b1!4m6!3m5!1s0x3e5f434f37cdae93:0xde756363a1b78491!8m2!3d25.2788468!4d55.3309395!16s%2Fm%2F02w9fhl?hl=en&entry=ttu";
    window.open(googleMapsURL, "_blank");
  };

  return (
    <div
      className="inline-flex items-center gap-2 relative cursor-pointer overflow-hidden contact_info"
      onClick={openGoogleMaps}
    >
      <span className="popslide">google.ie/maps</span>
      <svg
        className="fill-dark"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z" />
      </svg>
      {location}
    </div>
  );
};

export default Location;
