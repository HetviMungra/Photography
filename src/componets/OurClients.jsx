import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurClients() {
  const testimonials = [
    {
      name: "Kavitha Reddy",
      title: "Family Portrait Client",
      rating: 5,
      image: "/c-1.jpg",
      feedback:
        "We booked a family portrait session and it was wonderful! Mr. Devesh was patient with our kids and captured beautiful natural moments. The quality of photos is exceptional and the pricing was very reasonable. Will definitely book again!",
    },
    {
      name: "Priya & Rahul Sharma",
      title: "Wedding Couple",
      rating: 5,
      image: "/c-2.jpg",
      feedback:
        "Mr. Devesh and his team captured our wedding day perfectly! Every emotion, every moment was beautifully documented. The quality of photography and videography exceeded our expectations. Highly recommend!",
    },
    {
      name: "Arjun Mehta",
      title: "Corporate Client",
      rating: 4,
      image: "/c-3.jpg",
      feedback:
        "Professional, punctual, and creative! The corporate event coverage was flawless. Great attention to detail and a very supportive team.",
    },
    {
      name: "Sneha Kapoor",
      title: "Engagement Client",
      rating: 5,
      image: "/c-4.jpg",
      feedback:
        "Our engagement pictures turned out stunning! The candid shots were our favorite. Thank you for making it special.",
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "500+", icon: "ri-heart-fill", color: "bg-red-500" },
    { label: "Events Covered", value: "1000+", icon: "ri-camera-fill", color: "bg-blue-500" },
    { label: "Satisfaction Rate", value: "98%", icon: "ri-star-fill", color: "bg-green-500" },
    { label: "Years Experience", value: "8+", icon: "ri-time-fill", color: "bg-purple-500" },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
        What Our <span className="heading">Clients Say</span>
      </h2>
      <div className="flex justify-center mb-8">
        <hr className="w-32 h-1 bg-gradient-to-r from-pink-500 to-blue-600 border-0 rounded-full" />
      </div>
      <p className="max-w-3xl mx-auto mb-12 text-gray-600">
        Don’t just take our word for it. Here’s what our happy clients have to say about their
        experience with us.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-4xl mx-auto"
      >
        {testimonials.map(({ name, title, rating, feedback, image }, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-left">
                {/* Profile Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                {/* Feedback */}
                <div>
                  <div className="text-yellow-500 text-lg">
                    {"★".repeat(rating) + "☆".repeat(5 - rating)}
                  </div>
                  <p className="italic text-gray-700 mt-2">“{feedback}”</p>
                  <div className="mt-3 font-semibold text-gray-900">{name}</div>
                  <div className="text-sm text-gray-500">{title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
        {stats.map(({ label, value, icon, color }, i) => (
          <div key={i} className="text-center">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 ${color}`}
            >
              <i className={`${icon} text-white text-2xl`}></i>
            </div>
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
