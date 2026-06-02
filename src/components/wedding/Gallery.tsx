import img1 from "@/assets/couple-1.jpg.asset.json";
import img2 from "@/assets/couple-2.jpg.asset.json";
import img3 from "@/assets/couple-3.jpg.asset.json";
import img4 from "@/assets/couple-4.jpg.asset.json";
import img5 from "@/assets/couple-5.jpg.asset.json";

const images = [img1.url, img2.url, img3.url, img4.url, img5.url];

const Track = () => (
  <div className="flex gap-4 shrink-0 pr-4">
    {images.map((src, i) => (
      <div
        key={i}
        className="image-item shrink-0 w-64 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-lg"
      >
        <img
          src={src}
          alt={`קובי וקארין ${i + 1}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    ))}
  </div>
);

export function Gallery() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-12">
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .infinite-scroll { animation: scroll-x 30s linear infinite; }
        .infinite-scroll:hover { animation-play-state: paused; }
        .scroll-container {
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                  mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .image-item { transition: transform 0.4s ease, filter 0.4s ease; }
        .image-item:hover { transform: scale(1.04); filter: brightness(1.08); }
      `}</style>

      <div className="scroll-container w-full overflow-hidden">
        <div className="infinite-scroll flex w-max">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
