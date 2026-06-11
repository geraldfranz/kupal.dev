import Logo from './Logo';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();
  const bgClass = isDark ? 'bg-dark-950 border-white/10' : 'bg-slate-100 border-slate-200';
  const textClass = isDark ? 'text-white/40' : 'text-slate-500';

  return (
    <footer className={`${bgClass} border-t py-6 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-between items-center gap-4">
          <Logo isDark={isDark} className="hover:opacity-80 transition-opacity" />
          <p className={`font-sans ${textClass} text-sm mx-auto text-center`}>© {currentYear} &lt;/kupal&gt;. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
