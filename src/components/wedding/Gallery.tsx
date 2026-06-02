import img1 from "@/assets/couple-1.jpg.asset.json";
import img2 from "@/assets/couple-2.jpg.asset.json";
import img3 from "@/assets/couple-3.jpg.asset.json";
import img4 from "@/assets/couple-4.jpg.asset.json";
import img5 from "@/assets/couple-5.jpg.asset.json";

const imgs = [img1, img2, img3, img4, img5];

export function Gallery() {
  // duplicate the list so the marquee loops seamlessly
  const loop = [...imgs, ...imgs];
  return (
    <section className="px-4 pb-16 overflow-hidden">
      <div className="group relative max-w-2xl mx-auto overflow-hidden">
        <div className="flex gap-3 animate-[marquee_30s_linear_infinite] w-max">
          {loop.map((im, i) => (
            <div
              key={i}
              className="shrink-0 w-56 aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-border shadow-sm"
            >
              <img
                src={im.url}
                alt="קובי וקארין"
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
