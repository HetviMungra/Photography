import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-screen z-30 top-0">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="camera py-2 px-3 w-12 h-12 rounded-full text-white flex items-center justify-center bg-red-600">
              <i className="ri-camera-fill text-2xl"></i>
            </div>
            <div>
              <h1
                className="text-xl font-bold text-gray-900 select-none"
                style={{ fontFamily: "Pacifico" }}
              >
                Mr. Devesh & Team
              </h1>
              <p className="text-xs text-gray-500 -mt-1 select-none">
                Photography & Videography
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-900 transition"
                >
                  {item}
                </a>
              )
            )}
            {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition"
            >
              Book Now
            </a>
          </div>
          </div>

          

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg  border-gray-200 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100  border-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          )
        )}
        <a
          href="#book"
          className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
