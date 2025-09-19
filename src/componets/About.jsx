import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8 py-16 space-y-12 text-center md:text-left"
      aria-label="About Mr. Devesh and Team"
    >
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 text-center">
        About <span className="heading"> Mr. Devesh & Team </span>
      </h2>
      <div className="flex justify-center">
        <hr className="w-32 h-1 camera text-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:space-x-14 items-center">
        {/* Left side - Story */}
        <div className="md:flex-1 space-y-6">
          <div className="bg-white rounded-xl shadow p-6 sm:p-8 text-gray-700">
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="leading-relaxed">
              With over 8 years of experience in the photography and videography
              industry, Mr. Devesh leads a passionate team of creative
              professionals dedicated to capturing life’s most precious moments.
            </p>
            <p className="leading-relaxed mt-4">
              Our journey began with a simple belief: every moment tells a story,
              and every story deserves to be told beautifully. From intimate
              weddings to grand corporate events, we bring artistry and technical
              excellence to every project.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <div className="bg-red-100 text-red-700 rounded-lg p-6 min-w-[14rem] shadow text-center">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-orange-500">
                  <i className="ri-award-fill text-white text-xl"></i>
                </span>
                <div className="text-2xl font-bold pt-6">500+</div>
                <div>Events Captured</div>
              </div>
              <div className="bg-blue-100 text-blue-700 rounded-lg p-6 min-w-[14rem] shadow text-center">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-blue-700">
                  <i className="ri-heart-fill text-white text-xl"></i>
                </span>
                <div className="text-2xl font-bold pt-6">98%</div>
                <div>Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:flex-1 mt-10 md:mt-0 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto md:mx-0">
          <img
            src="./about.jpg"
            alt="Mr. Devesh filming a wedding"
            className="w-full object-cover aspect-video md:aspect-[4/5]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-12 text-center">
        <div>
          <div className="mb-5 flex justify-center">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600">
              <i className="ri-eye-fill text-white text-2xl"></i>
            </span>
          </div>
          <h4 className="font-semibold mb-2">Creative Vision</h4>
          <p>
            We see beyond the lens, capturing not just images but emotions and
            stories that last a lifetime.
          </p>
        </div>
        <div>
          <div className="mb-5 flex justify-center">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600">
              <i className="ri-star-fill text-white text-2xl"></i>
            </span>
          </div>
          <h4 className="font-semibold mb-2">Excellence</h4>
          <p>
            Every project receives our complete attention to detail and
            commitment to delivering exceptional results.
          </p>
        </div>
        <div>
          <div className="mb-5 flex justify-center">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600">
              <i className="ri-heart-fill text-white text-2xl"></i>
            </span>
          </div>
          <h4 className="font-semibold mb-2">Passion</h4>
          <p>
            Our love for photography and videography drives us to constantly
            innovate and exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
