import React, { useEffect } from "react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-start justify-start pt-16 px-4 transition-transform duration-300 ease-in-out ${
        menuOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 left-4 text-white text-3xl focus:outline-none cursor-pointer "
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold text-white my-2 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold text-white my-2 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
      >
        About
      </a>
      <a
        href="#cv"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold text-white my-2 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
      >
        CV
      </a>
      <a
        href="#project"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold text-white my-2 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
      >
        Project
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-lg font-semibold text-white my-2 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;
