import { Rings, Champagne, FlowerVase, Disco, Divider } from "./Decorations";

const items = [
  { time: "19:30", label: "קבלת פנים", Icon: FlowerVase, side: "right" as const },
  { time: "20:30", label: "חופה וקידושין", Icon: Rings, side: "left" as const },
  { time: "21:00", label: "הבאלגן מתחיל", Icon: Champagne, side: "right" as const },
  { time: "02:00", label: "אפטר טראנס", Icon: Disco, side: "left" as const },
];

export function Timeline() {
  return (
    <section className="paper px-6 pb-20 pt-10">
      <Divider className="mb-8" />

      <ol className="relative mx-auto max-w-sm">
        {/* center vertical line */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 bottom-4 left-1/2 w-px -translate-x-1/2 bg-primary/40"
        />

        {items.map(({ time, label, Icon, side }) => {
          const isRight = side === "right";
          // The content cell — illustration above, label, then time
          const content = (
            <div
              className={`flex flex-col ${
                isRight ? "items-end text-right pr-4" : "items-start text-left pl-4"
              }`}
            >
              <Icon className="h-20 w-20 text-primary/80 mb-2" />
              <div className="font-hebrew text-xl font-bold ink leading-none">{label}</div>
              <div className="font-serif-display text-lg text-foreground/70 mt-1">{time}</div>
            </div>
          );

          return (
            <li key={time} className="relative grid grid-cols-2 items-center py-6">
              {/* horizontal stub from spine to content */}
              <span
                aria-hidden
                className={`absolute top-1/2 h-px w-10 bg-primary/40 ${
                  isRight ? "right-1/2 mr-px" : "left-1/2 ml-px"
                }`}
              />
              {/* dot on the spine */}
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              />

              {isRight ? (
                <>
                  {content}
                  <div />
                </>
              ) : (
                <>
                  <div />
                  {content}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
