import GridScan from './GridScan';
import TargetCursor from './TargetCursor';

const Hero = ({ isDark }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionText = isDark ? 'text-white' : 'text-white';
  const subtitleText = isDark ? 'text-white/70' : 'text-white';
  const accentText = isDark ? 'from-accent-red to-pink-400' : 'from-accent-red to-fuchsia-600';
  const btnText = isDark ? 'text-white' : 'text-slate-50';

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.65}
          lineThickness={isDark ? 1 : 1.5}
          linesColor={isDark ? '#2F293A' : '#1a1a1a'}
          gridScale={0.1}
          scanColor={isDark ? '#ffffff' : '#000000'}
          scanOpacity={isDark ? 0.4 : 0.65}
          lineJitter={0.18}
          scanGlow={0.8}
          scanSoftness={1.7}
          enablePost
          bloomIntensity={isDark ? 0 : 0.05}
          noiseIntensity={0.02}
        />
      </div>

      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
        isDark={isDark}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 ${sectionText}`}>
          We are Certified
          <br />
          <span className={`text-red-500`}>
            Kupal!
          </span>
        </h1>
        <p className={`font-sans ${subtitleText} text-lg sm:text-xl mb-8 max-w-2xl mx-auto`}>
          A collective of designers, developers, and creative technologists crafting beautiful, functional digital solutions.
        </p>

        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <button
            onClick={() => scrollToSection('team')}
            className={`cursor-target px-8 py-4 border-2 rounded-card font-semibold transition-all transform hover:-translate-y-1 ${isDark ? 'bg-accent-red border-accent-red text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50' : 'bg-slate-900/95 border-slate-900 text-white hover:bg-slate-800'}`}
          >
            Meet the Team
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`cursor-target px-8 py-4 border-2 rounded-card font-semibold transition-all ${isDark ? 'border-white/30 text-white hover:border-white/60 hover:bg-white/5' : 'border-slate-300 text-slate-900 bg-white/90 hover:bg-slate-100'}`}
          >
            View Projects
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center">
            <svg className={`w-8 h-8 ${isDark ? 'text-white/60' : 'text-slate-700'} animate-sway`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
