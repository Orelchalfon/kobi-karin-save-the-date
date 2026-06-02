import { Rings, Champagne, FlowerVase, Disco } from "./Decorations";

const items = [
  { time: "19:30", label: "קבלת פנים", Icon: FlowerVase },
  { time: "20:30", label: "חופה וקידושין", Icon: Rings },
  { time: "22:00", label: "הבאלגן מתחיל", Icon: Champagne },
  { time: "02:00", label: "אפטר טראנס", Icon: Disco },
];

export function Timeline() {
  return (
    <section className="paper px-6 pb-20 text-justify">
      <ol className="relative mx-auto max-w-sm">
        <span className="absolute top-4 bottom-4 right-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent translate-x-px" />
        {items.map(({ time, label, Icon }, i) => {
          const left = i % 2 === 0;
          return (
            <li key={time} className="grid grid-cols-2 gap-6 items-center py-7 relative">
              <span className="absolute right-1/2 translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-sm" />
              {left ? (
                <>
                  <div />
                  <div className="text-right pr-6">
                    <Icon className="h-14 w-14 text-primary/80 mr-auto mb-2" />
                    <div className="font-hebrew text-xl font-bold ink leading-tight">{label}</div>
                    <div className="font-serif-display text-base text-foreground/65 tabular-nums mt-0.5" dir="ltr">{time}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-left pl-6">
                    <Icon className="h-14 w-14 text-primary/80 ml-auto mb-2" />
                    <div className="font-hebrew text-xl font-bold ink leading-tight">{label}</div>
                    <div className="font-serif-display text-base text-foreground/65 tabular-nums mt-0.5" dir="ltr">{time}</div>
                  </div>
                  <div />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
