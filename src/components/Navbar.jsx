import { useState } from 'react';
import Logo from './Logo';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['About', 'Team', 'Projects', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[18px] bg-[rgba(15,23,42,0.6)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('hero')} className="cursor-target hover:opacity-80 transition-opacity">
            <Logo isDark={isDark} />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className={`cursor-target rounded-full px-3 py-2 transition-colors font-sans text-sm ${
                  isDark
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-black hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link}
              </button>
            ))}

            <button
              onClick={() => setIsDark(!isDark)}
              className={`cursor-target p-2 rounded-lg transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-200/90 text-slate-900 hover:bg-slate-300'}`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <img
                src={isDark ? sunIcon : moonIcon}
                alt={isDark ? 'Dark mode icon' : 'Light mode icon'}
                className={`w-5 h-5 ${isDark ? 'filter invert' : ''}`}
              />
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`cursor-target p-2 rounded-lg transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-200/90 text-slate-900 hover:bg-slate-300'}`}
            >
              <img
                src={isDark ? sunIcon : moonIcon}
                alt={isDark ? 'Dark mode icon' : 'Light mode icon'}
                className={`w-5 h-5 ${isDark ? 'filter invert' : ''}`}
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-target p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-200'}`}
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 border-t pt-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className={`cursor-target block w-full text-left px-4 py-2 rounded-lg transition-colors ${isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-slate-700/90 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
