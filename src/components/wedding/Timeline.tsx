import { Rings, Champagne, FlowerVase, Disco } from "./Decorations";

const items = [
  { time: "19:30", label: "קבלת פנים", Icon: FlowerVase },
  { time: "20:30", label: "חופה וקידושין", Icon: Rings },
  { time: "21:00", label: "הבאלגן מתחיל", Icon: Champagne },
  { time: "02:00", label: "אפטר טראנס", Icon: Disco },
];

export function Timeline() {
  return (
    <section className="paper px-6 pb-20">
      <ol className="relative mx-auto max-w-sm">
        <span className="absolute top-2 bottom-2 right-1/2 w-px bg-primary/30 translate-x-px" />
        {items.map(({ time, label, Icon }, i) => {
          const right = i % 2 === 0;
          return (
            <li key={time} className="grid grid-cols-2 gap-4 items-center py-8 relative">
              <span className="absolute right-1/2 translate-x-1/2 h-2 w-2 rounded-full bg-primary" />
              {right ? (
                <>
                  <div />
                  <div className="text-right pr-6">
                    <Icon className="h-16 w-16 text-primary/80 mr-auto mb-2" />
                    <div className="font-hebrew text-xl font-bold ink">{label}</div>
                    <div className="font-serif-display text-lg text-foreground/70">{time}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-left pl-6">
                    <Icon className="h-16 w-16 text-primary/80 ml-auto mb-2" />
                    <div className="font-hebrew text-xl font-bold ink">{label}</div>
                    <div className="font-serif-display text-lg text-foreground/70">{time}</div>
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
