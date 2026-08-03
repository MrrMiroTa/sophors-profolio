import RevealOnScroll from "../RevealOnScroll";
import card from "../../assets/phors.jpg";

function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-dark-950 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.06),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                  Doeun Sophors
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl -z-10" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Junior Web Developer passionate about building clean, scalable,
              and user-friendly web applications. Turning ideas into functional
              digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#project" className="btn-primary group">
                View Projects
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-dark-400">Projects</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-dark-400">Technologies</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-dark-400">Dedicated</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-xl" />
              <img
                src={card}
                alt="Doeun Sophors"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 glass-card p-4 flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-dark-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Home;
