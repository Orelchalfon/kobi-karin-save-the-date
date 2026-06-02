import { useCountdown } from "@/hooks/useCountdown";
import heroImg from "@/assets/venue-hero.jpg";

const Cell = ({ n, label }: { n: number; label: string }) => (
  <div className="flex flex-col items-center min-w-14">
    <span className="font-serif-display text-3xl md:text-4xl font-medium text-white tabular-nums leading-none">
      {String(n).padStart(2, "0")}
    </span>
    <span className="text-[10px] tracking-[0.28em] uppercase text-white/65 mt-2">{label}</span>
  </div>
);

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      <img
        src={heroImg}
        alt="אולמי סנטרל פתח תקווה"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-between px-6 py-10 text-center text-white">
        <div className="font-serif-display tracking-[0.55em] text-[11px] opacity-75">
          SAVE&nbsp;THE&nbsp;DATE
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="font-hebrew text-xs tracking-[0.5em] opacity-80">ב"ה</div>

          <div className="flex items-center gap-5 mt-2">
            <span className="h-px w-10 bg-white/40" />
            <span className="font-serif-display italic text-sm tracking-widest opacity-80">the wedding of</span>
            <span className="h-px w-10 bg-white/40" />
          </div>

          <h1 className="font-script text-[5.5rem] md:text-[7rem] leading-[0.9] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] mt-2">
            Kobi
          </h1>
          <span className="font-script text-5xl md:text-6xl -my-4 opacity-85">&amp;</span>
          <h1 className="font-script text-[5.5rem] md:text-[7rem] leading-[0.9] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            Karin
          </h1>

          <div className="mt-5 font-hebrew text-xl md:text-2xl tracking-[0.15em] opacity-95">
            קובי <span className="opacity-60 mx-1">·</span> קארין
          </div>

          <div dir="ltr" className="mt-7 flex items-center gap-4">
            <span className="h-px w-8 bg-white/50" />
            <span className="font-serif-display text-xl md:text-2xl tracking-[0.35em]">28 . 07 . 26</span>
            <span className="h-px w-8 bg-white/50" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <div
            dir="ltr"
            className="flex items-center justify-center gap-3 md:gap-5 rounded-2xl bg-white/[0.08] backdrop-blur-md px-5 py-4 ring-1 ring-white/15"
          >
            <Cell n={days} label="ימים" />
            <span className="text-white/30 text-xl">·</span>
            <Cell n={hours} label="שעות" />
            <span className="text-white/30 text-xl">·</span>
            <Cell n={minutes} label="דקות" />
            <span className="text-white/30 text-xl">·</span>
            <Cell n={seconds} label="שניות" />
          </div>
          <div className="font-hebrew text-sm opacity-80 tracking-[0.2em]">
            אולמי סנטרל · פתח תקווה
          </div>
        </div>
      </div>
    </section>
  );
}
