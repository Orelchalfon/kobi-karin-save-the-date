import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import img1 from "@/assets/couple-1.jpg.asset.json";
import img2 from "@/assets/couple-2.jpg.asset.json";
import img3 from "@/assets/couple-3.jpg.asset.json";
import img4 from "@/assets/couple-4.jpg.asset.json";
import img5 from "@/assets/couple-5.jpg.asset.json";

const imgs = [img1, img2, img3, img4, img5];

export function Gallery() {
  const plugin = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  return (
    <section className="px-4 pb-16">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[plugin.current]}
        className="max-w-md mx-auto"
        onMouseEnter={() => plugin.current.play()}
      >
        <CarouselContent>
          {imgs.map((im, i) => (
            <CarouselItem key={i} className="basis-full">
              <div className="overflow-hidden rounded-lg ring-1 ring-border shadow-sm aspect-[3/4]">
                <img
                  src={im.url}
                  alt="קובי וקארין"
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

