import React, { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SideBar from "./SideBar";


const mockEvents = [
  {
    id: 4,
    title: "Piano",
    location: "Rooftop Casablanca",
    date: "July 12, 2025",
    time: "8:00 PM",
    image: "/assets/p1.jpg",
    description:
      "A cozy rooftop night filled with indie rock vibes and acoustic performances",
    tags: ["Indie", "Live", "Casablanca"],
    initialGoing: 64,
    price:300
  },
  {
    id: 5,
    title: "Guitar",
    location: "Marrakech Jazz Club",
    date: "July 15, 2025",
    time: "9:00 PM",
    image: "/assets/p2.jpg",
    description:
      "Relax and unwind with smooth jazz in an elegant club setting.",
    tags: ["Jazz", "Lounge", "Marrakech"],
    initialGoing: 42,
     price:500
  },
  {
    id: 6,
    title: "Piano",
    location: "Taghazout Music ",
    date: "July 20, 2025",
    time: "9:30 PM",
    image: "/assets/p3.jpg",
    description:
      "A glittering night with top pop artists lighting up the stage.",
    tags: ["Pop", "Concert", "Agadir"],
    initialGoing: 753,
    price:1000
  },
  {
    id: 1,
    title: "Guitar",
    location: "Agadir Beach Club",
    date: "June 21, 2025",
    time: "6:00 PM",
    image: "/assets/p4.jpg",
    description:
      "Join us for an unforgettable evening of electronic music as the sun sets on Agadir's stunning beach.",
    tags: ["Beach", "DJ", "Sunset"],
    initialGoing: 123,
     price:2000
  },
  {
    id: 2,
    title: "Piano",
    location: "OK Lounge Bar",
    date: "June 25, 2025",
    time: "10:00 PM",
    image: "/assets/piano.jpg",
    description:
      "Turn up at the hottest Rock night in town with your favorite local MCs and DJs.",
    tags: ["Rock", "Party", "Agadir"],
    initialGoing: 87,
     price:400
  },
  {
    id: 3,
    title: "Electro Vibes Festival",
    location: "Casablanca Arena",
    date: "July 5, 2025",
    time: "7:00 PM",
    image: "/assets/p10.jpg",
    description:
      "A night of lights, beats, and electrifying energy. Dance through the night with world-renowned artists.",
    tags: ["Electro", "Festival", "Casablanca"],
    initialGoing: 221,
      price:900
  },
];

export default function Marketplace() {
  const [cart, setCart] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartItem = (event) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === event.id);
      if (exists) {
        return prev.filter(item => item.id !== event.id);
      }
      return [...prev, { ...event, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const filteredEvents = mockEvents.filter(event => {
    const cityMatch = selectedCity === "All" || event.tags.includes(selectedCity);
    const genreMatch = selectedGenre === "All" || event.tags.includes(selectedGenre);
    return cityMatch && genreMatch;
  });

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex min-h-screen text-black max-w-[1400px] mx-auto">
      <SideBar />
      <div className="w-full px-6 py-10 relative">
        {/* Filters + Cart */}
        <div className="flex justify-between mb-8 items-center">
          <div className="flex gap-4">
            {/* City and Genre filters same as before */}
          </div>

          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingCartIcon className="w-8 h-8 text-red-600" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => {
            const inCart = cart.find(item => item.id === event.id);
            return (
              <div key={event.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <button
                      onClick={() => toggleCartItem(event)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        inCart 
                          ? "bg-brown text-white"
                          : "bg-green  text-white"
                      }`}
                    >
                      {inCart ? "Added ✓" : "Add to Cart"}
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-red-600 font-bold">${event.price}</span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <UserGroupIcon className="w-4 h-4" />
                        {event.initialGoing} going
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Shopping Cart</h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 border-b pb-4">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-2 py-1 bg-gray-100 rounded"
                                >
                                  -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2 py-1 bg-gray-100 rounded"
                                >
                                  +
                                </button>
                              </div>
                              <div className="space-y-1 text-right">
                                <p className="text-red-600 font-semibold">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => toggleCartItem(item)}
                                  className="text-sm text-red-500 hover:text-red-700"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t">
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
                      </div>
                      <button
                        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                        onClick={() => {
                          alert("Redirecting to checkout...");
                          setCart([]);
                          setIsCartOpen(false);
                        }}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}