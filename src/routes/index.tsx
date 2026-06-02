import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Quote } from "@/components/wedding/Quote";
import { Gallery } from "@/components/wedding/Gallery";
import { Venue } from "@/components/wedding/Venue";
import { Timeline } from "@/components/wedding/Timeline";
import { Parents } from "@/components/wedding/Parents";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kobi & Karin · 28.07.2026 — הזמנה לחתונה" },
      {
        name: "description",
        content:
          "נרגשים להזמינכם לחתונה של קובי יחזקאל וקארין אלוני · 28.07.2026 · אולמי סנטרל פתח תקווה",
      },
      { property: "og:title", content: "Kobi & Karin · 28.07.2026" },
      {
        property: "og:description",
        content: "החתונה של קובי וקארין — אולמי סנטרל, פתח תקווה, ט\"ו באב התשפ\"ו",
      },
    ],
  }),
  component: WeddingPage,
});

function WeddingPage() {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto max-w-xl">
        <Hero />
        <Quote />
      </div>
      <Gallery />
      <div className="mx-auto max-w-xl">
        <Venue />
        <Timeline />
        <Parents />
      </div>
    </main>
  );
}
