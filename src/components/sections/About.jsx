import { space } from "postcss/lib/list";
import RevealOnScroll from "../RevealOnScroll";
import React from "react";

function About() {
  const frontendskills = ["HTML", "CSS", "JavaScript", "React"];
  const backendskills = ["PHP", "Laravel", "MySQL"];
  return (
    <section
      id="about"
      className="min-h-screen items-center justify-center py-20 "
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyen-400 bg-clip-text text-transparent text-center">
          {""}
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hi! I’m a junior web developer who enjoys crafting clean, modern,
            and scalable web applications. I’m passionate about turning ideas
            into functional digital experiences that are both efficient and
            visually engaging. Even though I’m at the beginning of my
            professional journey, I’m constantly learning and improving my
            skills in HTML, CSS, JavaScript, and React, as well as exploring
            backend technologies like PHP and MySQL. My goal is to build
            solutions that combine great performance with a delightful user
            experience, while continuing to grow as a developer and contribute
            to meaningful projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frotend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((index, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {index}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((index, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {index}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 📒 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>
                  Senior student majoring in IT Royal University of Phnom
                  Penh(2022-2025)
                </strong>
              </li>
              <li>
                <strong>
                  Secondary school of fine art Graduated High School Diploma
                  (2015-2021)
                </strong>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Experience</h3>
            <div className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold">Academic Project</h4>
                    <p> Developed an E-Commerce Website (PHP, MySQL): Implemented product listing, shopping cart, and checkout system.</p><br />
                    <p> Developed a restaurant Management System (HTML, CSS, JavaScript, PHP, MySQL): Designed ordering and billing features for a mini-restaurant.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
