import React, { useEffect } from "react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-4 ml-10 left-1/2 transform -translate-x-1/2  z-40 flex flex-row items-center justify-center space-x-4 px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
        menuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-semibold text-white transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-semibold text-white transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
      >
        About
      </a>
      <a
        href="#cv"
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-semibold text-white transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
      >
        CV
      </a>
      <a
        href="#project"
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-semibold text-white transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
      >
        Project
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-semibold text-white transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;
