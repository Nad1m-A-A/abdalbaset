"use client";
import { useState } from "react";
import Image from "next/image";

function JourneyPage() {
  const timelineItems = {
    2020: {
      title: "GRADUATION!",
      description:
        "Plenty of experience was gained from Al-Baath University, which is top-ranking due to the efficient teaching staff regarding architectural engineering.",
      year: "2020",
    },
    2021: {
      title: "FREELANCING!",
      description:
        "Whether it was villa facades, villa complexes, landscapes, or exquisite shops, excellent projects were successfully delivered to a great number of clients.",
      year: "2021 / today",
    },
    2022: {
      title: "ARCHITECTURAL ASSISTING!",
      description:
        "Working as an assistant architect, critical experience in functional architecture methods is a must.",
      year: "2022",
    },
    2023: {
      title: "ARCHITECTURAL TRAINING!",
      description:
        "It is a privilege to be trained by a creative architect; They shed light onto enlightening ideas and suggestions in the field of architecture.",
      year: "2023",
    },
  };

  const [selectedYear, setSelectedYear] = useState(2020);
  const [animateOut, setAnimateOut] = useState(false);
  const years = Object.keys(timelineItems).map(Number);
  const currentIndex = years.indexOf(selectedYear);
  const animation_duration = 700;

  const handleSlide = (direction) => {
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      if (direction === 'up' && currentIndex > 0) {
        setSelectedYear(years[currentIndex - 1]);
      } else if (direction === 'up' && currentIndex === 0) {
        setSelectedYear(years.at(-1))
      } else if (direction === 'down' && currentIndex < years.length - 1) {
        setSelectedYear(years[currentIndex + 1]);
      } else {
        setSelectedYear(years[0])
      }
    },animation_duration)
  };

  return (
    <div className="flex gap-6 flex-col md:flex-row justify-center items-center md:items-start fade_in">
      <div className="overflow-hidden w-fit rounded-sm shadow-lg relative">
        <Image
          src="/images/building.webp"
          alt="Fascinating building"
          width={400}
          height={400}
          sizes="(max-width: 600px) 80vw, (max-width: 1200px) 40vw, 40vw"
        />
        <div className={`flex flex-col justify-end absolute z-20 p-4 pb-10 left-0 right-0 top-0 bottom-0 journey_description text-white text-right journey_desc ${animateOut ? 'animate_out': 'animate_in'}`}>
          <span className=" text-xs sm:text-sm md:text-lg">{timelineItems[selectedYear].year}</span>
          <h1 className="font-semibold sm:text-xl md:text-2xl">
            {timelineItems[selectedYear].title}
          </h1>
          <p className="pt-4 text-xs sm:text-sm md:text-lg">
            {timelineItems[selectedYear].description}
          </p>
        </div>
      </div>


      <div className="md:self-end md:mb-5">
        <ul className="inline-flex items-center select-none md:flex-col gap-3 sm:gap-10 text-xs sm:text-sm md:text-lg">
          <li>
            <svg
              className="cursor-pointer -rotate-90 md:rotate-0" onClick={() => handleSlide('up')}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
            </svg>
          </li>
          <li className={`cursor-pointer ${selectedYear === 2020 ? 'font-bold' : 'text-gray-400'}`} onClick={() => setSelectedYear(2020)}>2020</li>
          <li className={`cursor-pointer ${selectedYear === 2021 ? 'font-bold' : 'text-gray-400'}`} onClick={() => setSelectedYear(2021)}>2021</li>
          <li className={`cursor-pointer ${selectedYear === 2022 ? 'font-bold' : 'text-gray-400'}`} onClick={() => setSelectedYear(2022)}>2022</li>
          <li className={`cursor-pointer ${selectedYear === 2023 ? 'font-bold' : 'text-gray-400'}`} onClick={() => setSelectedYear(2023)}>2023</li>
          <li>
            <svg
              className="cursor-pointer -rotate-90 md:rotate-0" onClick={() => handleSlide('down')}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 860 960"
              width="40"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JourneyPage;
