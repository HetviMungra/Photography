import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone , } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

export default function Footer() {
  const servicesData = [
    "Wedding Photography",
    "Corporate Events",
    "Videography",
    "Drone Coverage",
    "Portrait Sessions",
  ];

  return (
    <footer className="bg-[#0b1120] text-gray-300 pt-12 pb-20 px-6 relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-4 space-x-3">
            <div className="camera p-3 rounded-full flex items-center justify-center">
              <i className="ri-camera-fill text-2xl text-white"></i>
            </div>
            <div>
              <h1
                className="text-xl font-bold text-white select-none"
                style={{ fontFamily: "Pacifico" }}
              >
                Mr. Devesh & Team
              </h1>
              <p className="text-xs text-gray-400 -mt-1 select-none">
                Photography & Videography
              </p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Capturing life's most precious moments with artistic vision and
            professional excellence. Your memories, our passion – creating
            timeless stories through the lens.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["About Us", "Portfolio", "Services", "Testimonials", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-purple-500 transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            {servicesData.map((title) => (
              <li key={title}>
                <a href="#services" className="hover:text-purple-500 transition">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 border-t border-gray-700 mt-10 pt-6 text-sm">
        <div className="flex items-center space-x-3">
          <MdPhone className="text-red-500 text-xl" />
          <span>+91 98786 43210</span>
        </div>
        <div className="flex items-center space-x-3">
          <MdEmail className="text-blue-500 text-xl" />
          <span>info@mrdeveshteam.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <MdLocationOn className="text-green-500 text-xl" />
          <span>Varanasi, Uttar Pradesh</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-8 text-xs border-t border-gray-700 pt-4">
        © 2025 Mr. Devesh & Team. All rights reserved. |{" "}
        <a href="#" className="hover:text-purple-500 transition">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-purple-500 transition">
          Terms of Service
        </a>
      </div>

      {/* Static Buttons */}
      <button className="fixed left-4 bottom-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition">
         <i className="ri-award-fill text-white text-xl"> </i> Proud Member of BNI
      </button>
      <button className="fixed right-4 bottom-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
        
       <i class="fa-solid fa-shield-halved"></i> Secured by VoltSec.io

      </button>
    </footer>
  );
}
