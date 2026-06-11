export const Logo = ({ className = "", isDark = true }) => {
  const base = isDark ? 'text-white' : 'text-slate-950';
  const accent = isDark ? 'text-accent-red' : 'text-slate-950';
  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
      <div className={`font-mono font-bold text-2xl tracking-tight ${base}`}>&lt;/&gt;</div>
      <div className={`text-sm font-sans ${isDark ? 'text-white/70' : 'text-slate-700'} flex items-center gap-1`}>
        <span className={`${accent}`}>kupal</span>
        <span className={`${base}`}>.dev</span>
      </div>
    </div>
  );
};

export default Logo;
