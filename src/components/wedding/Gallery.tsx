import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";

const images = [
  { src: img4, alt: "קובי וקארין · Save the date" },
  { src: img5, alt: "קובי וקארין · שקיעה בים" },
  { src: img2, alt: "קובי וקארין · טבעת" },
  { src: img3, alt: "קובי וקארין · לחיים" },
  { src: img1, alt: "קובי וקארין · רגע ההצעה" },
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", direction: "rtl" },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section aria-label="גלריית תמונות" className="py-12 sm:py-16">
      <div className="overflow-hidden" ref={emblaRef} dir="rtl">
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_60%] md:flex-[0_0_45%] px-3"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-3/4 bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`עבור לתמונה ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
