import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function Project() {
  return (
    <section
      id="project"
      className="min-h-screen items-center justify-center py-20 "
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyen-400 bg-clip-text text-transparent text-center">
          Feature Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl ffont-bold mb-2">E-Commerce Website</h3>
            <p className="text-gray-400 mb-4">
              Implemented product listing, shopping cart, and checkout system.
            </p>
            <div>
              {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map(
                (index, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {index}
                  </span>
                )
              )}
              ;
            </div>
            <div className="flex justify-between items-center">
              <a
                href=""
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl ffont-bold mb-2">E-Commerce Website</h3>
            <p className="text-gray-400 mb-4">
              Designed ordering, product list and billing features for a mini-restaurant.{" "}
            </p>
            <div>
              {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map(
                (index, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {index}
                  </span>
                )
              )}
              ;
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/MrrMiroTa/system_restaurant"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default Project;
