import { useState } from 'react';

const Projects = ({ isDark }) => {
  const projects = [
    {
      number: '01',
      title: 'Digital Platform Redesign',
      description: 'A complete redesign of a legacy e-commerce platform with modern UI/UX principles and improved performance.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      number: '02',
      title: 'Real-time Analytics Dashboard',
      description: 'Built a data visualization dashboard with live updates, multi-user collaboration, and advanced filtering.',
      tech: ['React', 'D3.js', 'WebSocket', 'Python'],
    },
    {
      number: '03',
      title: 'Creative WebGL Experience',
      description: 'An immersive 3D interactive experience showcasing brand products with cutting-edge web technologies.',
      tech: ['Three.js', 'WebGL', 'GLSL', 'Vite'],
    },
  ];

  const sectionBg = isDark ? 'bg-slate-950' : 'bg-slate-100';
  const headingColor = isDark ? 'text-white' : 'text-slate-900';
  const cardStyles = isDark
    ? 'bg-white/5 border border-white/10 text-white hover:border-accent-red/50 hover:bg-white/10 hover-glow-white shadow-lg'
    : 'bg-white border border-slate-200 text-slate-900 hover:border-red-200 hover:bg-slate-50 hover-glow-black';

  const [hovered, setHovered] = useState(false);

  return (
    <section id="projects" className={`py-20 px-4 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-accent-red text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className={`font-display font-bold text-4xl sm:text-5xl ${headingColor}`}>Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`group rounded-card p-8 transition-all duration-300 transform ${hovered ? 'project-scale shadow-2xl' : ''} hover:-translate-y-2 ${!isDark ? 'hover-glow-black' : ''} ${cardStyles}`}
            >
              <div className="font-display font-bold text-6xl text-white/10 mb-4 group-hover:text-accent-red/20 transition-colors">
                {project.number}
              </div>

              <h3 className={`font-display font-bold text-2xl mb-3 ${headingColor} group-hover:text-accent-red transition-colors`}>
                {project.title}
              </h3>

              <p className={`font-sans ${isDark ? 'text-white/60' : 'text-slate-600'} text-base mb-6 leading-relaxed`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs bg-accent-red/10 text-accent-red px-3 py-1 rounded-full border border-accent-red/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-accent-red group-hover:gap-4 transition-all duration-300">
                <span className="font-sans text-sm font-semibold">View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
