import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backendSkills = ["PHP", "Laravel", "MySQL", "Node.js"];

  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <RevealOnScroll>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass-card p-8 lg:p-10 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-2xl">
                  👋
                </div>
                <h3 className="text-2xl font-bold text-white">Hello!</h3>
              </div>
              <p className="text-dark-300 leading-relaxed text-base">
                I'm a junior web developer who enjoys crafting clean, modern, and
                scalable web applications. I'm passionate about turning ideas into
                functional digital experiences that are both efficient and visually
                engaging.
              </p>
              <p className="text-dark-300 leading-relaxed text-base">
                Constantly learning and improving my skills in HTML, CSS,
                JavaScript, React, and exploring backend technologies like PHP and
                MySQL. My goal is to build solutions that combine great performance
                with a delightful user experience.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">sophors@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A8 8 0 1117.657 16.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3 text-primary-400">
                    ⚡
                  </span>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-3">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3 text-primary-400">
                  🎓
                </span>
                Education
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500/50 to-accent-500/50" />
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary-500 border-4 border-dark-800" />
                  <h4 className="font-semibold text-white">
                    Royal University of Phnom Penh
                  </h4>
                  <p className="text-sm text-primary-400 mt-1">IT Major • 2022 - 2025</p>
                  <p className="text-dark-400 text-sm mt-2">
                    Senior student specializing in Information Technology
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent-500 border-4 border-dark-800" />
                  <h4 className="font-semibold text-white">
                    Steung Sen High School
                  </h4>
                  <p className="text-sm text-primary-400 mt-1">High School Diploma • 2015 - 2021</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3 text-primary-400">
                  💼
                </span>
                Experience
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500/50 to-accent-500/50" />
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary-500 border-4 border-dark-800" />
                  <h4 className="font-semibold text-white">Academic Projects</h4>
                  <ul className="mt-2 space-y-2 text-dark-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>E-Commerce Website (PHP, MySQL) - Product listing, cart & checkout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>Restaurant Management System - Ordering & billing features</span>
                    </li>
                  </ul>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent-500 border-4 border-dark-800" />
                  <h4 className="font-semibold text-white">Personal Projects</h4>
                  <ul className="mt-2 space-y-2 text-dark-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>News Website (React) - Real-time updates & API integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>Calculator App (React) - User-friendly interface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>Portfolio Website (React) - Personal showcase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 mt-0.5">•</span>
                      <span>E-Commerce Store (React + Laravel) - Full-stack application</span>
                    </li>
                  </ul>
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
