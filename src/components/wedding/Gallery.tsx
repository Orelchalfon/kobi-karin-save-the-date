import img1 from "@/assets/couple-1.jpg.asset.json";
import img2 from "@/assets/couple-2.jpg.asset.json";
import img3 from "@/assets/couple-3.jpg.asset.json";
import img4 from "@/assets/couple-4.jpg.asset.json";
import img5 from "@/assets/couple-5.jpg.asset.json";

const imgs = [img1, img2, img3, img4, img5];

export function Gallery() {
  const loop = [...imgs, ...imgs];
  return (
    <section className="px-0 pb-20">
      <div className="relative max-w-2xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-4 animate-[marquee_40s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {loop.map((im, i) => (
            <div
              key={i}
              className="shrink-0 w-56 aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-border/60 shadow-md"
            >
              <img
                src={im.url}
                alt="קובי וקארין"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
