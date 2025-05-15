import React, { useState } from "react";
import {
  SparklesIcon,
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import SideBar from "./SideBar";

const mockEvents = [
  {
    id: 4,
    title: "Indie Rock Jam",
    location: "Rooftop Casablanca",
    date: "July 12, 2025",
    time: "8:00 PM",
    image: "/assets/eventtt76.jpg",
    description:
      "A cozy rooftop night filled with indie rock vibes and acoustic performances.",
    tags: ["Indie", "Live", "Casablanca"],
    initialGoing: 64,
  },
  {
    id: 5,
    title: "Jazz & Chill Evening",
    location: "Marrakech Jazz Club",
    date: "July 15, 2025",
    time: "9:00 PM",
    image: "/assets/eventtt78.jpeg",
    description:
      "Relax and unwind with smooth jazz in an elegant club setting.",
    tags: ["Jazz", "Lounge", "Marrakech"],
    initialGoing: 42,
  },
  {
    id: 6,
    title: "Pop Night Stars",
    location: "Taghazout Music ",
    date: "July 20, 2025",
    time: "9:30 PM",
    image: "/assets/eventtt77.jpg",
    description:
      "A glittering night with top pop artists lighting up the stage.",
    tags: ["Pop", "Concert", "Agadir"],
    initialGoing: 753,
  },
  {
    id: 1,
    title: "Sunset Beach Party",
    location: "Agadir Beach Club",
    date: "June 21, 2025",
    time: "6:00 PM",
    image: "/assets/eventtt4.jpeg",
    description:
      "Join us for an unforgettable evening of electronic music as the sun sets on Agadir's stunning beach.",
    tags: ["Beach", "DJ", "Sunset"],
    initialGoing: 123,
  },
  {
    id: 2,
    title: "Rock Night Live",
    location: "OK Lounge Bar",
    date: "June 25, 2025",
    time: "10:00 PM",
    image: "/assets/eventtt6.jpeg",
    description:
      "Turn up at the hottest Rock night in town with your favorite local MCs and DJs.",
    tags: ["Rock", "Party", "Agadir"],
    initialGoing: 87,
  },
  {
    id: 3,
    title: "Electro Vibes Festival",
    location: "Casablanca Arena",
    date: "July 5, 2025",
    time: "7:00 PM",
    image: "/assets/eventtt1.jpeg",
    description:
      "A night of lights, beats, and electrifying energy. Dance through the night with world-renowned artists.",
    tags: ["Electro", "Festival", "Casablanca"],
    initialGoing: 221,
  },
];

export default function EventsPage() {
  const [interestedEvents, setInterestedEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const toggleInterest = (id) => {
    setInterestedEvents((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredEvents = mockEvents.filter((event) => {
    const matchesCity =
      selectedCity === "All" || event.tags.includes(selectedCity);
    const matchesGenre =
      selectedGenre === "All" || event.tags.includes(selectedGenre);
    return matchesCity && matchesGenre;
  });

  return (
    <div
      className="text-[#0F1419] min-h-screen   max-w-[1400px] mx-auto
    flex justify-center"
    >
      <SideBar />
      <div className="flex w-full  mx-auto px-4 py-10 min-h-screen text-black ">
        <div className="">
          <div className="flex  mb-8">
            <div className="flex flex-row  gap-4">
              <select
                className="border   bg-white rounded-md px-3 py-2 text-sm"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="All">All Cities</option>
                <option value="Agadir">Agadir</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Rabat">Rabat</option>
              </select>
              <select
                className="border  border-red-500 text-red-600 bg-white rounded-md px-3 py-2 text-sm"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="All">All Genres</option>
                <option value="Jazz">Jazz</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Indie">Indie</option>
                <option value="Electro">Electro</option>
                <option value="DJ">DJ</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap mt-10 justify-center ">
            {filteredEvents.length === 0 && (
              <div className="col-span-full text-center text-gray-400 text-sm">
                No events found for your selected filters.
              </div>
            )}
            {filteredEvents.map((event) => {
              const isGoing = interestedEvents.includes(event.id);
              const eventDateTime = new Date(`${event.date} ${event.time}`);
              const now = new Date();
              const timeRemaining =
                isGoing && eventDateTime > now
                  ? Math.max(0, eventDateTime.getTime() - now.getTime())
                  : 0;
              const countdown =
                isGoing && timeRemaining > 0
                  ? `${Math.floor(
                      timeRemaining / (1000 * 60 * 60 * 24)
                    )}d ${Math.floor(
                      (timeRemaining / (1000 * 60 * 60)) % 24
                    )}h ${Math.floor((timeRemaining / (1000 * 60)) % 60)}m`
                  : null;
              const goingCount = event.initialGoing + (isGoing ? 1 : 0);

              return (
                <div
                  key={event.id}
                  className=" rounded-md  transition duration-300 m-6 border w-full sm:w-[300px] overflow-hidden "
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-semibold text-white">
                        {event.title}
                      </h2>
                      <button
                        onClick={() => toggleInterest(event.id)}
                        className={`text-sm font-medium h-9  px-3 py-1 rounded-full transition-all w-[150px] duration-200 bg-red ${
                          isGoing ? "bg-[#008000] " : " text-black "
                        }`}
                      >
                        {isGoing ? "✔ Going" : "+ Interested"}
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center text-xs text-gray-400 gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>
                          {event.date}, {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="w-4 h-4" />
                        <span>{goingCount} going</span>
                      </div>
                    </div>

                    {countdown && (
                      <div className="text-xs text-[#B60101] font-semibold mb-2">
                        ⏳ Starts in: {countdown}
                      </div>
                    )}

                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-red-900 text-red-300 text-xs px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
