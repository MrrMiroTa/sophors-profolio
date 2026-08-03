import React from 'react'

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg font-mono">
              S
            </div>
            <span className="text-xl font-bold text-white">Sophors</span>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#home" className="text-dark-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="#about" className="text-dark-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#project" className="text-dark-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-dark-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-dark-400 text-sm">
              © {new Date().getFullYear()} Doeun Sophors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
