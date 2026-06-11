import { useState } from 'react';
import profile1 from '../assets/profile_1.jpg';
import profile2 from '../assets/profile_2.jpg';
import profile3 from '../assets/profile_3.jpg';
import profile4 from '../assets/profile_4.jpg';
import profile5 from '../assets/profile_5.jpg';
import profile6 from '../assets/profile_6.jpg';

const Team = ({ isDark }) => {
  const members = [
    {
      name: 'Franz Berja',
      role: 'Lead Developer',
      bio: 'Full-stack developer with a passion for building scalable applications.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      image: profile1,
      initials: 'FB',
      social: {
        facebook: 'https://www.facebook.com/geraldfranz.berja.5',
        instagram: 'https://www.instagram.com/gfranzzz_/',
        email: 'franz@kupal.dev',
      },
    },
    {
      name: 'Redwin Ycong',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on intuitive and striking visual experiences.',
      skills: ['Figma', 'CSS', 'Motion Design', 'Prototyping'],
      image: profile2,
      initials: 'RY',
      social: {
        facebook: 'https://www.facebook.com/wedwin.cute',
        instagram: 'https://www.instagram.com/Wedwiiin',
        email: 'redwin@kupal.dev',
      },
    },
    {
      name: 'Dex Alcantara',
      role: 'Backend Engineer',
      bio: 'Infrastructure specialist building robust systems for modern applications.',
      skills: ['Python', 'PostgreSQL', 'Docker', 'AWS'],
      image: profile3,
      initials: 'DA',
      social: {
        facebook: 'https://www.facebook.com/vibew.dex',
        instagram: 'https://www.instagram.com/dxchrstn',
        email: 'dex@kupal.dev',
      },
    },
    {
      name: 'Josiah Monteman',
      role: 'Motion & Interactions',
      bio: 'Designs fluid interactions and motion systems for modern web products.',
      skills: ['Framer', 'After Effects', 'Animation', 'Interaction'],
      image: profile4,
      initials: 'JM',
      social: {
        facebook: 'https://www.facebook.com/zzParkJiem',
        instagram: 'https://www.instagram.com/siah.shea_/',
        email: 'josiah@kupal.dev',
      },
    },
    {
      name: 'Rahfael Jaramilla',
      role: 'Product Strategist',
      bio: 'Guides product direction with market insight and experience-led strategy.',
      skills: ['Product', 'Research', 'Roadmap', 'Strategy'],
      image: profile5,
      initials: 'RJ',
      social: {
        facebook: 'https://www.facebook.com/stryggggg',
        instagram: 'https://instagram.com',
        email: 'rahfael@kupal.dev',
      },
    },
    {
      name: 'Zydrin Sabay',
      role: 'Research Lead',
      bio: 'Leads user research and data analysis to inform product decisions and strategy.',
      skills: ['User Research', 'Data Analysis', 'UX Strategy', 'Market Research'],
      image: profile6,
      initials: 'ZS',
      social: {
        facebook: 'https://www.facebook.com/ZydrinSabay.13',
        instagram: 'https://www.instagram.com/zydrinsabay',
        email: 'zydrin@kupal.dev',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const changeMember = (nextIndex) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsVisible(true);
    }, 180);
  };

  const goToPrevious = () => {
    const next = currentIndex === 0 ? members.length - 1 : currentIndex - 1;
    changeMember(next);
  };

  const goToNext = () => {
    const next = currentIndex === members.length - 1 ? 0 : currentIndex + 1;
    changeMember(next);
  };

  const member = members[currentIndex];
  const sectionBg = isDark ? 'bg-dark-950' : 'bg-slate-100';
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const roleColor = isDark ? 'text-accent-red' : 'text-red-600';

  return (
    <section id="team" className={`py-20 px-4 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`font-display font-bold text-4xl sm:text-5xl ${textColor}`}>Meet the Team</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`${cardBg} rounded-card p-10 transition-all duration-300 ease-[ease] ${isVisible ? 'opacity-100' : 'opacity-0'} ${isDark ? 'hover:border-white/70 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]' : 'hover:border-slate-900/70 hover:shadow-[0_0_24px_rgba(0,0,0,0.25)]'}`}>
            <div className="flex justify-center mb-8">
              <div className={`w-[120px] h-[120px] rounded-full overflow-hidden border ${isDark ? 'border-[rgba(255,255,255,0.2)]' : 'border-[rgba(0,0,0,0.15)]'} transition-all duration-400 ease-out [transform:perspective(600px)_rotateY(0deg)_rotateX(0deg)_scale(1)] hover:[transform:perspective(600px)_rotateY(15deg)_rotateX(10deg)_scale(1.12)] hover:shadow-[8px_12px_30px_rgba(0,0,0,0.35)]`}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-accent-red flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-white">{member.initials}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mb-8">
              <p className={`font-mono ${roleColor} text-sm uppercase tracking-widest mb-2`}>{member.role}</p>
              <h3 className={`font-display font-bold text-3xl mb-4 ${textColor}`}>{member.name}</h3>
              <p className={`font-sans ${isDark ? 'text-white/60' : 'text-slate-600'} text-base leading-relaxed mb-6`}>{member.bio}</p>

              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`font-mono text-xs px-3 py-1 rounded-full border ${isDark ? 'bg-white/10 text-white/80 border-white/20' : 'bg-slate-100 text-slate-700 border-slate-200'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-target p-3 rounded-lg ${isDark ? 'bg-white/5 hover:bg-blue-500/20 hover:glow-blue' : 'bg-slate-100 hover:bg-slate-200 hover-glow-black'} transition-all duration-300 group` }
                  title="Facebook"
                >
                  <svg className={`w-5 h-5 ${isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-800 group-hover:text-black'} transition-colors`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-target p-3 rounded-lg ${isDark ? 'bg-white/5 hover:bg-pink-500/20 hover:glow-pink' : 'bg-slate-100 hover:bg-slate-200 hover-glow-black'} transition-all duration-300 group` }
                  title="Instagram"
                >
                  <svg className={`w-5 h-5 ${isDark ? 'text-white group-hover:text-pink-400' : 'text-slate-800 group-hover:text-black'} transition-colors`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>

                <a
                  href={`mailto:${member.social.email}`}
                  className={`cursor-target p-3 rounded-lg ${isDark ? 'bg-white/5 hover:bg-violet-500/20 hover:glow-violet' : 'bg-slate-100 hover:bg-slate-200 hover-glow-black'} transition-all duration-300 group` }
                  title="Email"
                >
                  <svg className={`w-5 h-5 ${isDark ? 'text-white group-hover:text-violet-400' : 'text-slate-800 group-hover:text-black'} transition-colors`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <button
              onClick={goToPrevious}
              className={`cursor-target p-3 rounded-lg ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'} transition-all` }
              aria-label="Previous member"
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {members.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeMember(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-target ${
                    idx === currentIndex ? 'bg-accent-red w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to member ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className={`cursor-target p-3 rounded-lg ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'} transition-all` }
              aria-label="Next member"
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
