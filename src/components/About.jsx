const About = ({ isDark }) => {
  const stats = [
    { label: 'Members', value: '5' },
    { label: 'Technologies', value: '15+' },
    { label: 'Projects', value: '20+' },
    { label: 'Energy', value: '∞' },
  ];

  const sectionBg = isDark ? 'bg-dark-950' : 'bg-slate-100';
  const headingColor = isDark ? 'text-white' : 'text-slate-900';
  const bodyColor = isDark ? 'text-white/60' : 'text-slate-700';
  const cardStyles = isDark
    ? 'bg-white/5 border border-white/10 text-white hover:border-accent-red/50 hover:bg-white/10'
    : 'bg-white border border-slate-200 text-slate-900 hover:border-red-300 hover:bg-slate-50';

  return (
    <section id="about" className={`py-20 px-4 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className={`font-display font-bold text-4xl sm:text-5xl ${headingColor} mb-6`}>About Us</h2>
          <p className={`font-sans ${bodyColor} text-lg max-w-2xl`}>
            We are a team of passionate creators dedicated to building innovative digital experiences.
            From concept to deployment, we bring ideas to life with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`cursor-target p-6 rounded-card transition-all duration-300 transform hover:-translate-y-1 ${cardStyles}`}
            >
              <p className="font-mono text-accent-red text-3xl font-bold mb-2">{stat.value}</p>
              <p className={`font-sans ${isDark ? 'text-white/60' : 'text-slate-600'} text-sm`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
