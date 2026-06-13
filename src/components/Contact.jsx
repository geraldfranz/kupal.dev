const Contact = ({ isDark }) => {
  const sectionBg = isDark ? 'bg-dark-950 border-white/10' : 'bg-slate-100 border-slate-200';
  const headingColor = isDark ? 'text-white' : 'text-slate-900';
  const bodyColor = isDark ? 'text-white/60' : 'text-slate-700';
  const primaryButton = isDark
    ? 'bg-accent-red text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50'
    : 'bg-slate-900 text-white hover:bg-slate-800';
  const secondaryButton = isDark
    ? 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5'
    : 'border-2 border-slate-300 text-slate-900 hover:bg-slate-200';

  return (
    <section id="contact" className={`py-20 px-4 ${sectionBg}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-display font-bold text-4xl sm:text-5xl ${headingColor} mb-6`}>Let's Create Together</h2>
        <p className={`font-sans ${bodyColor} text-lg mb-12`}>
          Have an idea? Let's bring it to life. Reach out to us and let's start a conversation.
        </p>

        <a
          href="mailto:hello@kupal.dev"
          className="cursor-target inline-block font-mono font-bold text-lg sm:text-xl text-accent-red hover:text-red-400 transition-colors mb-8 group"
        >
          hello@kupal.dev
          <div className="h-1 w-36 mx-auto bg-gradient-to-r from-transparent via-accent-red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-3" />
        </a>

        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFTfPtVfpVTQSlqNCLxpSTmXJXGtQLCxlfWmvfpsQRkFHRCSwncnLVbnjThgbcgBwSCKg"
            target="_blank"
            className={`cursor-target px-8 py-4 rounded-card font-semibold transition-all transform hover:-translate-y-1 ${primaryButton}`}
          >
            Send Message
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-target px-8 py-4 rounded-card font-semibold transition-all ${secondaryButton}`}
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
