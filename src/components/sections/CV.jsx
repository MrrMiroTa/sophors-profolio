import RevealOnScroll from "../RevealOnScroll";
import React from "react";

function CV() {
  const frontendskills = ["HTML", "CSS", "JavaScript", "React"];
  const backendskills = ["PHP", "Laravel", "MySQL"];

  return (
    <section
      id="cv"
      className="min-h-screen items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Curriculum Vitae
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
            <p className="text-gray-400 text-lg mb-4 p-2 ">
              <strong >Name:</strong> Doeun Sophors<br />
              <strong>Location:</strong> Phnom Penh, Cambodia<br />
              <strong className="hover:bg-blue-500/10 rounded transition">Email:</strong> <a target="_blank" href="mailto:sophorsdoeun@gmail.com">sophorsdoeun@gmail.com</a><br />
              <strong className="hover:bg-blue-500/10 rounded transition">Phone:</strong> +855 99 390 353<br />
              <strong className="hover:bg-blue-500/10 rounded transition">LinkedIn:</strong> <a target="_blank" href="https://www.linkedin.com/in/doeun-sophors-9a5835285/">linkedin.com/in/doeun-sophors-9a5835285</a><br />
              <strong className="hover:bg-blue-500/10 rounded transition">GitHub:</strong> <a target="_blank" href="https://github.com/MrrMiroTa">github.com/MrrMiroTa</a>
            </p>
            <p className="text-gray-400 text-lg">
              Hi! I’m a junior web developer passionate about creating clean, modern, and scalable web applications. I specialize in frontend technologies and am expanding into backend development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 cursor-pointer text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📒 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Senior student majoring in IT at Royal University of Phnom Penh (2022-2025)
                  </strong>
                </li>
                <li>
                  <strong>
                    Secondary school of fine art, Graduated High School Diploma (2015-2021)
                  </strong>
                </li>
              </ul>
            </div>
            <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Academic Projects</h4>
                  <p>Developed an E-Commerce Website using PHP and MySQL: Implemented product listing, shopping cart, and checkout system.</p>
                  <p>Developed a Restaurant Management System using HTML, CSS, JavaScript, PHP, and MySQL: Designed ordering and billing features for a mini-restaurant.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <p className="text-gray-300">
              Check out my projects section for detailed examples of my work, including web applications and more.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default CV;