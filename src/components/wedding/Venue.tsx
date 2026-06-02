import { VenueSketch, Divider } from "./Decorations";

export function Venue() {
  return (
    <section className="paper px-6 py-20 text-center">
      <VenueSketch className="mx-auto h-48 w-full max-w-md text-primary/80" />

      <h2 dir="ltr" className="mt-8 font-serif-display text-5xl md:text-6xl font-bold tracking-tight">
        28.07.26
      </h2>

      <div className="mt-5 space-y-1 font-hebrew text-base md:text-lg text-foreground/85">
        <p>יום שלישי, ט"ו באב התשפ"ו</p>
        <p>אולמי סנטרל — פתח תקווה</p>
        <p className="text-foreground/65">תוצרת הארץ 4, פתח תקווה</p>
      </div>

      <div className="mt-8 mx-auto max-w-md overflow-hidden rounded-xl ring-1 ring-border shadow-sm">
        <iframe
          title="מפת אולמי סנטרל פתח תקווה"
          src="https://www.google.com/maps?q=%D7%AA%D7%95%D7%A6%D7%A8%D7%AA+%D7%94%D7%90%D7%A8%D7%A5+4+%D7%A4%D7%AA%D7%97+%D7%AA%D7%A7%D7%95%D7%95%D7%94&output=embed"
          width="100%"
          height="240"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://waze.com/ul?q=תוצרת%20הארץ%204%20פתח%20תקווה"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
        >
          ניווט ב-Waze
        </a>
        <a
          href="https://maps.google.com/?q=תוצרת+הארץ+4+פתח+תקווה"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full ring-1 ring-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition"
        >
          Google Maps
        </a>
      </div>

      <h3 className="mt-20 font-hebrew text-3xl md:text-4xl font-bold">מה מתוכנן לכם</h3>
      <Divider className="mt-5" />
    </section>
  );
}
