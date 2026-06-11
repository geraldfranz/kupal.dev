import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.backgroundColor = '#0A0A0F';
      root.style.color = '#FFFFFF';
    } else {
      root.style.backgroundColor = '#F3ECE4';
      root.style.color = '#0F172A';
    }
  }, [isDark]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${isDark ? 'bg-dark-950 text-white' : 'bg-dark-50 text-slate-900'}`}>
      <div className={`theme-background ${isDark ? 'dark' : 'light'}`} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Team isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <BackToTop isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;