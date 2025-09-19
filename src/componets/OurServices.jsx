import React from "react";
import {
  FaHeart,
  FaBuilding,
  FaVideo,
  FaHelicopter,
  FaBirthdayCake,
  FaUser,
} from "react-icons/fa";

export default function OurServices() {
  const servicesData = [
    {
      title: "Wedding Photography",
      description:
        "Capturing your special day with artistic flair and emotional depth, from intimate moments to grand celebrations.",
      points: [
        "Pre-wedding shoots",
        "Ceremony coverage",
        "Reception highlights",
        "Couple portraits",
      ],
      icon: <FaHeart />,
      color: "bg-pink-500",
    },
    {
      title: "Corporate Events",
      description:
        "Professional documentation of business events, conferences, and corporate milestones with precision.",
      points: [
        "Conferences coverage",
        "Team events",
        "Product launches",
        "Award ceremonies",
      ],
      icon: <FaBuilding />,
      color: "bg-blue-500",
    },
    {
      title: "Cinematic Videography",
      description:
        "Creating stunning video stories that capture the essence and emotion of your special moments.",
      points: [
        "Wedding films",
        "Event highlights",
        "Promotional videos",
        "Documentary style",
      ],
      icon: <FaVideo />,
      color: "bg-purple-500",
    },
    {
      title: "Drone Coverage",
      description:
        "Aerial photography and videography adding a unique perspective to your events and venues.",
      points: [
        "Aerial photography",
        "Venue overviews",
        "Landscape shots",
        "Dynamic sequences",
      ],
      icon: <FaHelicopter />,
      color: "bg-green-500",
    },
    {
      title: "Event Photography",
      description:
        "Comprehensive coverage of birthdays, anniversaries, parties, and special celebrations.",
      points: [
        "Birthdays",
        "Anniversaries",
        "Family gatherings",
        "Cultural events",
      ],
      icon: <FaBirthdayCake />,
      color: "bg-orange-500",
    },
    {
      title: "Portrait Sessions",
      description:
        "Professional portraits that showcase personality and create lasting memories.",
      points: [
        "Individual portraits",
        "Family photos",
        "Professional headshots",
        "Maternity shoots",
      ],
      icon: <FaUser />,
      color: "bg-teal-500",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto"
      aria-label="Services we offer"
    >
      {/* Heading */}
   <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 text-center">
         Our <span className="heading">Services</span>
      </h2>
      <div className="flex justify-center mb-8">
        <hr className="w-32 h-1 camera text-transparent" />
      </div>

      <p className="max-w-3xl mx-auto text-center mb-12 text-gray-600">
        From intimate ceremonies to grand celebrations, we offer comprehensive
        photography and videography services tailored to your unique needs.
      </p>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(({ title, description, points, icon, color }) => (
          <div
            key={title}
            className="relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition group"
          >
            <div className="relative h-20">
              

              {/* Icon Circle */}
              <div
                className={`absolute -bottom-6 left-6 text-white text-2xl p-4 rounded-full shadow-lg ${color}`}
              >
                {icon}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-10">
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>

              {/* List */}
              <ul className="space-y-1 text-sm text-gray-700">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> {point}
                  </li>
                  
                ))}
              </ul>
            </div>
<span className={`absolute left-0 bottom-0 w-0 h-1 ${color} transition-all duration-300 group-hover:w-full rounded-b-xl`} > </span>
             
          </div>
          
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-xl shadow text-center">
        <h3 className="text-2xl font-semibold mb-6">
          Ready to Create Something Beautiful?
        </h3>
        <p className="mb-6 text-gray-700">
          Let’s discuss your vision and create a customized package that
          perfectly fits your needs and budget.
        </p>
        <div className="space-x-5 space-y-2 ">
          <a
            href="#booking"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition"
          >
             <i className="ri-phone-fill text-white text-xl"></i> Get Quote
          </a>
          <a
            href="#portfolio"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
             <i className="ri-gallery-fill text-white text-xl"> </i> View Work
          </a>
        </div>
      </div>
    </section>
  );
}
