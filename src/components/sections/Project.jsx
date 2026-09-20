import RevealOnScroll from "../RevealOnScroll";

function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Implemented product listing, shopping cart, and checkout system with modern UI.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      link: "https://e-commerceshop-fakestoreapi.vercel.app/",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      title: "Point Of Sale (Mini-restaurant)",
      description:
        "Designed ordering, product list and billing features for a mini-restaurant.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/MrrMiroTa/system_restaurant",
      gradient: "from-accent-500 to-primary-500",
    },
    {
      title: "News Website",
      description:
        "Developed a news website with real-time updates and BBC API integration.",
      technologies: ["HTML", "CSS", "Tailwindcss", "JavaScript", "React.js"],
      link: "https://news-by-uzita.vercel.app/",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      title: "Calculator App",
      description:
        "Built a simple calculator app with a user-friendly interface and real-time calculations.",
      technologies: ["HTML", "Tailwindcss", "JavaScript", "React.js"],
      link: "https://calculator-app-uzita.vercel.app/",
      gradient: "from-accent-500 to-primary-500",
    },
    {
      title: "To Do List",
      description:
        "Developed a to do list app with real-time updates and local storage.",
      technologies: ["HTML", "Tailwindcss", "JavaScript", "React.js"],
      link: "https://to-do-list-nine-teal.vercel.app/",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      title: "E-Commerce Store (Own API)",
      description:
        "Created a fully functional e-commerce store with Laravel backend API.",
      technologies: ["HTML", "Tailwindcss", "JavaScript", "React.js", "Laravel", "MySQL"],
      link: "https://e-commerceshop-three.vercel.app/",
      gradient: "from-accent-500 to-primary-500",
    },
    {
      title: "Restaurant Website",
      description:
        "Created a responsive restaurant website with menu display and booking system.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
      link: "https://friends-meets.vercel.app/",
      gradient: "from-primary-500 to-accent-500",
    },
     {
      title: "Daily Payment Tracker",
      description:
        "Created a responsive daily payment tracker for not your payment",
      technologies: ["HTML", "CSS", "JavaScript", "PHP","MySQL"],
      link: "https://tracker-money.wasmer.app/",
      gradient: "from-primary-500 to-accent-500",
    },
     {
      title: "Weather App",
      description:
        "A modern, dark-themed weather application built with React and Vite. It fetches real-time weather data, 5-day forecasts, and hourly forecasts from OpenWeatherMap, with a focus on Cambodian cities and global locations.",
      technologies: ["React Js"],
      link: "https://tracker-money.wasmer.app/",
      gradient: "from-primary-500 to-accent-500",
    }
  ];

  return (
    <section id="project" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <RevealOnScroll>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500"
              >
                {/* <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>

                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
                      {project.technologies[0]}
                    </span>
                  </div>
                </div> */}

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group/link"
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Project;
