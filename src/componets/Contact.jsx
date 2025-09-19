import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16"
      aria-label="Contact and booking"
    >
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-6">
       Contact & <span className="heading">Booking</span> <center> <hr className="w-30 h-1 my-5 camera text-transparent" /> </center>
      </h2>
      <p className="max-w-3xl mx-auto mb-14 text-center text-gray-600">
        Ready to capture your special moments? Get in touch with us to discuss
        your requirements and receive a personalized quote.
      </p>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col space-y-6">
          {/* Contact Card */}
          <div className="bg-white p-8 rounded-xl shadow space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4 text-black">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="text-red-600 text-xl mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+919876543210" className="text-gray-600 block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+918765432109" className="text-gray-600 block">
                    +91 87654 32109
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-600 text-xl mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:info@mrdeveshandteam.com"
                    className="text-gray-600 block"
                  >
                    info@mrdeveshandteam.com
                  </a>
                  <a
                    href="mailto:bookings@mrdeveshteam.com"
                    className="text-gray-600 block"
                  >
                    bookings@mrdeveshteam.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <div className="font-semibold">Location</div>
                  <address className="not-italic text-gray-600">
                    Varanasi, Uttar Pradesh <br />
                    Serving Pan India
                  </address>
                </div>
              </div>
            </div>

            {/* Quick Buttons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://wa.me/918050634020"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-green-600 text-white rounded px-6 py-3 text-center hover:bg-green-700 transition"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
              <a
                href="tel:+918050634020"
                className="flex-1 bg-blue-600 text-white rounded px-6 py-3 text-center hover:bg-blue-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Google Map */}
         <div className="rounded-xl shadow overflow-hidden h-64"> <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.293708768304!2d82.97391431504313!3d25.3176450838511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2c4b6d4c63%3A0x8dbfbc3c94d2ed1a!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695050485021!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe> </div> </div>

        {/* Right Side - Booking Form */}
        <div id="book" className="bg-white p-8 rounded-xl shadow h-fit">
          <h3 className="text-xl font-semibold mb-6">Book Your Session</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Booking request sent!");
            }}
            className="space-y-4 text-gray-700"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                required
                placeholder="Full Name *"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address *"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Phone & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number *"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="date"
                name="eventDate"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Event & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="eventType"
                required
                className="border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="" disabled>
                  Select Event Type *
                </option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                name="venue"
                placeholder="Venue *"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Guests & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="expectedGuestCount"
                min={1}
                placeholder="Expected Guest Count *"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <select
                name="budgetRange"
                required
                className="border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="" disabled>
                  Select Budget Range *
                </option>
                <option>Below ₹50,000</option>
                <option>₹50,000 - ₹1,00,000</option>
                <option>₹1,00,000 - ₹2,00,000</option>
                <option>Above ₹2,00,000</option>
              </select>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Wedding Photography</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Wedding Videography</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Corporate Events</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Birthday Parties</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Drone Coverage</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" /> <span>Product Photography</span>
              </label>
            </div>

            {/* Message */}
            <textarea
              name="additionalMessage"
              rows={4}
              placeholder="Additional Message (Optional)"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded shadow hover:bg-red-700 transition"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
