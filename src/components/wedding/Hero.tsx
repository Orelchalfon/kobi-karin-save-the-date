import { useCountdown } from "@/hooks/useCountdown";
import heroImg from "@/assets/venue-hero.jpg.asset.json";

const Cell = ({ n, label }: { n: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[60px]">
    <span className="font-serif-display text-3xl md:text-4xl font-medium text-white tabular-nums">
      {String(n).padStart(2, "0")}
    </span>
    <span className="text-[10px] tracking-[0.25em] uppercase text-white/70 mt-1">{label}</span>
  </div>
);

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg.url}
        alt="אולמי סנטרל פתח תקווה"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-6 py-12 text-center text-white">
        <div className="font-serif-display tracking-[0.5em] text-xs opacity-80">
          SAVE&nbsp;THE&nbsp;DATE
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="font-hebrew text-sm tracking-[0.4em] opacity-90">
            ב"ה
          </div>
          <h1 className="font-script text-7xl md:text-8xl leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Kobi
          </h1>
          <span className="font-script text-5xl md:text-6xl -my-3 opacity-90">&amp;</span>
          <h1 className="font-script text-7xl md:text-8xl leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Karin
          </h1>
          <div className="mt-4 font-hebrew text-2xl md:text-3xl tracking-wide">
            קובי <span className="font-script text-3xl mx-1">&amp;</span> קארין
          </div>
          <div className="mt-6 font-serif-display text-2xl md:text-3xl tracking-[0.2em]">
            28 · 07 · 2026
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div dir="ltr" className="flex items-center justify-center gap-4 md:gap-6 rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 ring-1 ring-white/20">
            <Cell n={days} label="ימים" />
            <span className="text-white/40 text-2xl">·</span>
            <Cell n={hours} label="שעות" />
            <span className="text-white/40 text-2xl">·</span>
            <Cell n={minutes} label="דקות" />
            <span className="text-white/40 text-2xl">·</span>
            <Cell n={seconds} label="שניות" />
          </div>
          <div className="font-hebrew text-sm opacity-80 tracking-wider">
            אולמי סנטרל · פתח תקווה
          </div>
        </div>
      </div>
    </section>
  );
}
