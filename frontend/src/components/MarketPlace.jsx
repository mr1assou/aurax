import React, { useState } from "react";

const Marketplace = () => {
  const allItems = [
    {
      title: "Electric Guitar",
      price: "1200 MAD",
      img: "/assets/guitar.png",
      type: "Instrument",
      category: "Guitar",
      description:
        "A high-quality electric guitar with a solid body, perfect for rock and blues. Includes built-in pickups and a tremolo bar.",
    },
    {
      title: "DJ Controller",
      price: "2200 MAD",
      img: "/assets/dj.png",
      type: "Electronics",
      category: "DJ",
    },
    {
      title: "Microphone",
      price: "600 MAD",
      img: "/assets/mic.png",
      type: "Audio",
      category: "Microphone",
    },
    {
      title: "Keyboard Synth",
      price: "1800 MAD",
      img: "/assets/keyboard.png",
      type: "Instrument",
      category: "Keyboard",
      description:
        "A modern synthesizer with 88 weighted keys, multiple sound banks, and MIDI compatibility. Great for studio production.",
    },
    {
      title: "Drum Pad",
      price: "1450 MAD",
      img: "/assets/drum.png",
      type: "Instrument",
      category: "Drums",
      description:
        "Compact drum pad with velocity-sensitive zones, USB output, and a wide range of percussion samples.",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.title} added to cart!`);
  };

  const mainCategories = ["All", "Instrument", "Electronics", "Audio"];
  const subCategories = {
    Instrument: ["All", "Guitar", "Keyboard", "Drums"],
    Electronics: ["All", "DJ"],
    Audio: ["All", "Microphone"],
  };

  const filteredItems = allItems.filter((item) => {
    const matchesType = filter === "All" || item.type === filter;
    const matchesSub = subFilter === "All" || item.category === subFilter;
    const matchesSearch =
      !search || item.title.toLowerCase().includes(search.toLowerCase());
    const price = parseInt(item.price);
    const matchesMin = !minPrice || price >= parseInt(minPrice);
    const matchesMax = !maxPrice || price <= parseInt(maxPrice);
    return (
      matchesType && matchesSub && matchesSearch && matchesMin && matchesMax
    );
  });

  return (
    <div className="relative bg-white min-h-screen py-10">
      <div className="bg-white border border-red-200 shadow-xl rounded-xl p-6 w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-red-600">🎸 Marketplace</h2>
          <div className="relative">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>

        {/* Search and Price Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-red-300 bg-white text-gray-800"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-28 px-3 py-2 rounded-md border border-red-300 bg-white text-gray-800"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-28 px-3 py-2 rounded-md border border-red-300 bg-white text-gray-800"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setSubFilter("All");
              }}
              className={`px-4 py-2 rounded-full border ${
                filter === category
                  ? "bg-red-600 text-white border-red-700"
                  : "bg-white text-red-600 border-red-300"
              } hover:shadow-md transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dropdown Filter */}
        {filter !== "All" && (
          <div className="mb-6 text-center">
            <select
              value={subFilter}
              onChange={(e) => setSubFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-red-300 bg-white text-red-600"
            >
              {subCategories[filter].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col h-80 w-64 mx-auto justify-between bg-white border border-red-200 p-4 rounded-lg hover:shadow-xl transition duration-300"
            >
              <div
                onClick={() => setSelectedProduct(item)}
                className="cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md border border-red-300 mb-4 transition-transform duration-300 hover:scale-105"
                />
                <div>
                  <h3 className="text-base font-semibold text-red-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-red-500">{item.price}</p>
                  <p className="text-xs italic text-red-400">
                    Type: {item.type} / {item.category}
                  </p>
                  {item.description && (
                    <p className="text-xs text-red-500 mt-1 truncate">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
