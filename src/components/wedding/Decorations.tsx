export const Rings = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="48" cy="32" r="20" />
    <circle cx="72" cy="32" r="20" />
    <path d="M48 12 l-3 -5 l6 0 z" fill="currentColor" stroke="none" />
    <path d="M72 12 l-3 -5 l6 0 z" fill="currentColor" stroke="none" />
  </svg>
);

export const Champagne = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 180 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
    {/* top glass */}
    <g transform="translate(90 30)">
      <path d="M-10 0 q10 18 0 22 q-10 -4 0 -22 z" />
      <line x1="0" y1="22" x2="0" y2="34" />
      <line x1="-6" y1="36" x2="6" y2="36" />
    </g>
    {/* row 2 */}
    {[-22, 22].map((x, i) => (
      <g key={i} transform={`translate(${90 + x} 70)`}>
        <path d="M-12 0 q12 22 0 26 q-12 -4 0 -26 z" />
        <line x1="0" y1="26" x2="0" y2="38" />
        <line x1="-7" y1="40" x2="7" y2="40" />
      </g>
    ))}
    {/* row 3 */}
    {[-44, 0, 44].map((x, i) => (
      <g key={i} transform={`translate(${90 + x} 115)`}>
        <path d="M-13 0 q13 24 0 28 q-13 -4 0 -28 z" />
        <line x1="0" y1="28" x2="0" y2="40" />
        <line x1="-8" y1="42" x2="8" y2="42" />
      </g>
    ))}
    {/* row 4 */}
    {[-66, -22, 22, 66].map((x, i) => (
      <g key={i} transform={`translate(${90 + x} 162)`}>
        <path d="M-14 0 q14 26 0 30 q-14 -4 0 -30 z" />
        <line x1="0" y1="30" x2="0" y2="40" />
        <line x1="-9" y1="42" x2="9" y2="42" />
      </g>
    ))}
    {/* bubbles */}
    <circle cx="86" cy="20" r="1.5" />
    <circle cx="94" cy="14" r="1" />
    <circle cx="78" cy="16" r="1" />
  </svg>
);

export const FlowerVase = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 160" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
    {/* flowers */}
    <g transform="translate(70 50)">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle key={a} cx={Math.cos((a * Math.PI) / 180) * 18} cy={Math.sin((a * Math.PI) / 180) * 18} r="9" />
      ))}
      <circle r="6" />
      <circle cx="-30" cy="-10" r="7" />
      <circle cx="32" cy="-6" r="7" />
      <circle cx="-12" cy="-30" r="6" />
      <circle cx="20" cy="-32" r="6" />
      {/* leaves */}
      <path d="M-38 14 q-12 -2 -18 -14" />
      <path d="M38 14 q12 -2 18 -14" />
    </g>
    {/* vase */}
    <path d="M55 90 L85 90 L92 100 L88 130 Q70 140 52 130 L48 100 Z" />
    <line x1="48" y1="100" x2="92" y2="100" />
    <path d="M50 130 Q70 138 90 130" />
  </svg>
);

export const VenueSketch = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
    {/* ground */}
    <line x1="20" y1="175" x2="380" y2="175" />
    {/* building */}
    <rect x="90" y="70" width="220" height="100" />
    <path d="M90 70 L200 30 L310 70" />
    {/* windows grid */}
    {Array.from({ length: 6 }).map((_, i) => (
      <line key={`v${i}`} x1={100 + i * 35} y1="80" x2={100 + i * 35} y2="160" />
    ))}
    {Array.from({ length: 3 }).map((_, i) => (
      <line key={`h${i}`} x1="100" y1={95 + i * 22} x2="300" y2={95 + i * 22} />
    ))}
    {/* door */}
    <rect x="185" y="130" width="30" height="40" />
    {/* trees */}
    <g transform="translate(50 160)">
      <circle cx="0" cy="-10" r="14" />
      <line x1="0" y1="4" x2="0" y2="15" />
    </g>
    <g transform="translate(355 160)">
      <circle cx="0" cy="-10" r="14" />
      <line x1="0" y1="4" x2="0" y2="15" />
    </g>
    {/* path */}
    <path d="M180 175 L195 170 L205 170 L220 175" />
    {/* lights */}
    <path d="M90 50 Q200 5 310 50" strokeDasharray="1 6" />
  </svg>
);

export const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 text-primary ${className}`}>
    <span className="h-px w-20 bg-current opacity-50" />
    <Rings className="h-8 w-16" />
    <span className="h-px w-20 bg-current opacity-50" />
  </div>
);

export const Disco = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="0.9">
    <circle cx="40" cy="40" r="28" />
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={i} x1="40" y1="12" x2="40" y2="68" transform={`rotate(${i * 22.5} 40 40)`} />
    ))}
    {Array.from({ length: 3 }).map((_, r) => (
      <circle key={r} cx="40" cy="40" r={8 + r * 8} />
    ))}
  </svg>
);
