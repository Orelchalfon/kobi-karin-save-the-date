import { VenueSketch, Divider } from "./Decorations";

export function Venue() {
  return (
    <section className="paper px-6 py-20 text-center">
      <VenueSketch className="mx-auto h-40 w-full max-w-md text-primary/80" />

      <div className="mt-8 inline-flex flex-col items-center">
        <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase">Save the date</span>
        <h2 dir="ltr" className="mt-3 font-serif-display text-5xl md:text-6xl font-bold tracking-tight ink">
          28 . 07 . 26
        </h2>
        <span className="mt-3 h-px w-24 bg-primary/40" />
      </div>

      <div className="mt-6 space-y-1 font-hebrew text-base md:text-lg text-foreground/85">
        <p>יום שלישי · ט"ו באב התשפ"ו</p>
        <p className="font-semibold">אולמי סנטרל — פתח תקווה</p>
        <p className="text-foreground/65 text-sm">תוצרת הארץ 4, פתח תקווה</p>
      </div>

      <div className="mt-8 mx-auto max-w-md overflow-hidden rounded-2xl ring-1 ring-border shadow-md">
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
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          ניווט ב-Waze
        </a>
        <a
          href="https://maps.google.com/?q=תוצרת+הארץ+4+פתח+תקווה"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full ring-1 ring-primary/70 px-7 py-3 text-sm font-medium text-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all"
        >
          Google Maps
        </a>
      </div>

      <h3 className="mt-20 font-hebrew text-3xl md:text-4xl font-bold ink">מה מתוכנן לכם</h3>
      <Divider className="mt-5" />
    </section>
  );
}
