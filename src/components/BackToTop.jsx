import { useState, useEffect } from 'react';

const BackToTop = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const checkVisibility = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const threshold = document.body.scrollHeight - 120;
    setIsVisible(scrolled >= threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  const btnClass = isDark
    ? 'relative z-10 cursor-target p-4 bg-accent-red text-white rounded-card shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70 hover:-translate-y-1 transition-all duration-300 transform'
    : 'relative z-10 cursor-target p-4 bg-slate-900 text-white rounded-card shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1 transition-all duration-300 transform';

  const boxClass = isDark ? 'w-16 h-12 bg-accent-red/12 rounded-md' : 'w-16 h-12 bg-slate-900/10 rounded-md';

  return (
    <div className={`fixed bottom-4 right-4 z-40 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'} transition-all duration-300 transform`}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={boxClass} />
      </div>
      <button onClick={scrollToTop} className={btnClass} aria-label="Back to top">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20V6m0 0l-6 6m6-6l6 6" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
