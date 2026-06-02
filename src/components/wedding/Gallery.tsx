import img1 from "@/assets/couple-1.jpg.asset.json";
import img2 from "@/assets/couple-2.jpg.asset.json";
import img3 from "@/assets/couple-3.jpg.asset.json";
import img4 from "@/assets/couple-4.jpg.asset.json";
import img5 from "@/assets/couple-5.jpg.asset.json";

const images = [img1.url, img2.url, img3.url, img4.url, img5.url];

const loopedImages = Array.from({ length: 8 }, () => images).flat();

export function Gallery() {
  return (
    <section className="relative left-1/2 w-dvw -translate-x-1/2 overflow-hidden py-12">
      <style>{`
        @keyframes scroll-x {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(calc(-5 * (var(--gallery-item-w) + var(--gallery-gap))), 0, 0); }
        }
        .infinite-scroll {
          --gallery-item-w: 256px;
          --gallery-gap: 16px;
          animation: scroll-x 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .infinite-scroll:hover { animation-play-state: paused; }
        .scroll-container {
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                  mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .image-item { transition: transform 0.4s ease, filter 0.4s ease; }
        .image-item:hover { transform: scale(1.04); filter: brightness(1.08); }
        @media (max-width: 520px) {
          .infinite-scroll {
            --gallery-item-w: 220px;
            --gallery-gap: 14px;
          }
        }
      `}</style>

      <div className="scroll-container w-full overflow-hidden">
        <div className="infinite-scroll flex w-max">
          {loopedImages.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="image-item mr-[var(--gallery-gap)] aspect-[3/4] w-[var(--gallery-item-w)] shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-lg"
            >
              <img
                src={src}
                alt={`קובי וקארין ${(i % images.length) + 1}`}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
