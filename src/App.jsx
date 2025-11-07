import { useState } from "react";
import LoadingPage from "./components/LoadingPage";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import CV from "./components/sections/CV";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] =useState(false);

  return (
    <>
      {!isLoaded &&
        <LoadingPage onComplete={() => setIsLoaded(true)} /> 
      }
      {""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" :"opacity-0" } bg-black text-gray-100` }>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="md:hidden">
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        {/* <Header/> */}
        <Home/>
        <About/>
        <CV/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
