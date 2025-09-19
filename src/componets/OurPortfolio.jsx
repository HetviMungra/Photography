import React, { useState } from "react";

export default function OurPortfolio() {
  const portfolioItems = [
    {
      src: "./w-1.jpg",
      alt: "Elegant Wedding Ceremony",
      category: "Weddings",
      title: "Wedding Ceremony",
      desc: "Capturing precious wedding moments",
    },
    {
      src: "./co-2.jpg",
      alt: "Corporate event photo 1",
      category: "Corporate",
      title: "Corporate Event Coverage",
      desc: "Professional conference documentation",
    },
    {
      src: "./w-2.jpg",
      alt: "Elegant Wedding Ceremony",
      category: "Weddings",
      title: "Luxury Wedding",
      desc: "Timeless photography memories",
    },
    {
      src: "./e-1.jpg",
      alt: "Event photo 1",
      category: "Events",
      title: "Birthday Celebration",
      desc: "Cherishing fun-filled moments",
    },
    {
      src: "./p-1.jpg",
      alt: "Birthday celebration photo",
      category: "Portraits",
      title: "Portrait Session",
      desc: "Professional portrait photography",
    },
    {
      src: "./w-3.jpg",
      alt: "Beach portrait session",
      category: "Weddings",
      title: "Beach Wedding",
      desc: "Romantic sunset photography",
    },
    {
      src: "./co-1.jpg",
      alt: "Concert event photo",
      category: "Corporate",
      title: "Business Conference",
      desc: "Corporate meet & documentation",
    },
    {
      src: "./e-2.jpg",
      alt: "Cultural dance event",
      category: "Events",
      title: "Cultural Event",
      desc: "Capturing vibrant traditions",
    },
    {
      src: "./p-2.jpg",
      alt: "Family portrait session",
      category: "Portraits",
      title: "Family Portraits",
      desc: "Memories with loved ones",
    },
  ];

  const [portfolioFilter, setPortfolioFilter] = useState("All");

  const filteredPortfolio =
    portfolioFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-6 py-16"
      aria-label="Portfolio of work"
    >
      {/* Heading */}
      
       <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 text-center">
         Our <span className="heading">Portfolio</span>
      </h2>
      <div className="flex justify-center mb-8">
        <hr className="w-32 h-1 camera text-transparent" />
      </div>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        Explore our collection of captured moments, from intimate weddings to
        grand celebrations, each telling its unique story.
      </p>

      {/* Category Filter */}
      <div className="flex justify-center space-x-3 mb-10 flex-wrap space-y-3">
        {["All", "Weddings", "Corporate", "Events", "Portraits"].map((cat) => (
          <button
            key={cat}
            onClick={() => setPortfolioFilter(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              portfolioFilter === cat
                ? "camera text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredPortfolio.map(({ src, alt, category, title, desc }, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <img
              src={src}
              alt={alt}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Category Tag */}
            <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <div className="p-4 text-white">
                <h4 className="text-lg font-bold">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="camera text-white px-6 py-3 rounded shadow " >
          + Load More Work
        </button>
      </div>
    </section>
  );
}
