import React, { useState } from "react";
import {
  SparklesIcon,
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const mockEvents = [
  {
    id: 4,
    title: "Indie Rock Jam",
    location: "Rooftop Casablanca",
    date: "July 12, 2025",
    time: "8:00 PM",
    image: "https://source.unsplash.com/600x400/?indie,rock,band",
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
    image: "https://source.unsplash.com/600x400/?jazz,music,club",
    description:
      "Relax and unwind with smooth jazz in an elegant club setting.",
    tags: ["Jazz", "Lounge", "Marrakech"],
    initialGoing: 42,
  },
  {
    id: 6,
    title: "Pop Night Stars",
    location: "Rabat Music Hall",
    date: "July 20, 2025",
    time: "9:30 PM",
    image: "https://source.unsplash.com/600x400/?pop,concert",
    description:
      "A glittering night with top pop artists lighting up the stage.",
    tags: ["Pop", "Concert", "Rabat"],
    initialGoing: 153,
  },
  {
    id: 1,
    title: "Sunset Beach Party",
    location: "Agadir Beach Club",
    date: "June 21, 2025",
    time: "6:00 PM",
    image: "https://source.unsplash.com/600x400/?sunset,concert",
    description:
      "Join us for an unforgettable evening of electronic music as the sun sets on Agadir's stunning beach.",
    tags: ["Beach", "DJ", "Sunset"],
    initialGoing: 123,
  },
  {
    id: 2,
    title: "Trap Night Live",
    location: "OK Lounge Bar",
    date: "June 25, 2025",
    time: "10:00 PM",
    image: "https://source.unsplash.com/600x400/?trap,nightlife",
    description:
      "Turn up at the hottest trap night in town with your favorite local MCs and DJs.",
    tags: ["Trap", "Party", "Agadir"],
    initialGoing: 87,
  },
  {
    id: 3,
    title: "Electro Vibes Festival",
    location: "Casablanca Arena",
    date: "July 5, 2025",
    time: "7:00 PM",
    image: "https://source.unsplash.com/600x400/?festival,electro",
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
    <div className="flex w-full max-w-6xl mx-auto px-4 py-10 min-h-screen bg-black text-white">
      <div className="flex-grow">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex gap-4">
            <select
              className="border border-red-500 text-white bg-black rounded-md px-3 py-2 text-sm"
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
              className="border border-red-500 text-red-600 bg-white rounded-md px-3 py-2 text-sm"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="All">All Genres</option>
              <option value="Jazz">Jazz</option>
              <option value="Trap">Trap</option>
              <option value="Pop">Pop</option>
              <option value="Indie">Indie</option>
              <option value="Electro">Electro</option>
              <option value="DJ">DJ</option>
            </select>
          </div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <SparklesIcon className="w-6 h-6" /> Events Near You
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                className="bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-zinc-700 overflow-hidden"
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
                      className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                        isGoing
                          ? "bg-red-100 text-red-700"
                          : "bg-red-600 text-white hover:bg-red-700"
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
                    <div className="text-xs text-red-400 font-semibold mb-2">
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
  );
}
