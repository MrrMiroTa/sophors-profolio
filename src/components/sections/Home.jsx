import RevealOnScroll from "../RevealOnScroll";
import card from "../../assets/idcard.jpg";

function Home() {
  return (
    <section className="sm:mt-30">
      <RevealOnScroll>
      <div
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm <strong className="font-semibold">Doeun Sophors</strong>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I'm a passionate junior web developer who loves building clean,
              scalable, and user-friendly web applications. My goal is to create
              solutions that not only perform efficiently but also provide an
              enjoyable and seamless experience for users as I continue growing my
              skills in web development.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  View Projects
              </a>
              <a href="#contact" className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                  Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={card}
              alt="Doeun Sophors"
              className="sm:w-80 sm:h-80 w-89 h-79 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
 