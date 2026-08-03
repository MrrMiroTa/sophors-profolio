import React from "react";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const menuLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👤" },
    { href: "#project", label: "Projects", icon: "💼" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-xl transition-all duration-500 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-2">
        {menuLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="group flex items-center space-x-4 px-8 py-4 text-2xl font-semibold text-white hover:text-primary-400 transition-all duration-300 hover:translate-x-2"
            style={{
              animation: menuOpen ? `slideUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <span className="text-3xl">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
        <div className="pt-8" style={{
          animation: menuOpen ? `slideUp 0.5s ease-out 0.4s forwards` : 'none',
          opacity: menuOpen ? 1 : 0,
        }}>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-lg px-8 py-4"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
