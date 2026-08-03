import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 antialiased">
      {!isLoaded && <LoadingPage onComplete={() => setIsLoaded(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <Home />
          <About />
          <Project />
          <Contact />
        </main>

        <Footer />

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center hover:bg-primary-500 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
