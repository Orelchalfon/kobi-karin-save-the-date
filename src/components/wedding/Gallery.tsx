import img1 from "@/assets/venue-hero.jpg.asset.json";
import img2 from "@/assets/venue-2.jpg.asset.json";
import img3 from "@/assets/venue-3.png.asset.json";
import img4 from "@/assets/venue-4.jpg.asset.json";

const imgs = [img1, img2, img3, img4];

export function Gallery() {
  return (
    <section className="px-4 pb-16">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {imgs.map((im, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-lg ring-1 ring-border shadow-sm ${
              i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
            }`}
          >
            <img
              src={im.url}
              alt="אולמי סנטרל"
              className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground tracking-wider">
        תמונות זמניות של האולם — יוחלפו בתמונות שלנו בקרוב
      </p>
    </section>
  );
}
