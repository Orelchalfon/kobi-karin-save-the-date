import { FlowerVase, Divider } from "./Decorations";

export function Parents() {
  return (
    <section className="px-6 py-20 text-center">
      <FlowerVase className="mx-auto h-32 w-32 text-primary/80" />
      <div className="mt-8 grid grid-cols-2 gap-6 max-w-md mx-auto">
        <div>
          <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            הורי החתן
          </div>
          <p className="font-hebrew text-lg font-medium">עוזי ושרה</p>
          <p className="font-hebrew text-base text-foreground/70">יחזקאל</p>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            הורי הכלה
          </div>
          <p className="font-hebrew text-lg font-medium">יעקב ורבקה</p>
          <p className="font-hebrew text-base text-foreground/70">אלוני</p>
        </div>
      </div>

      <Divider className="mt-16" />

      <div className="mt-10 space-y-2">
        <p className="font-hebrew text-foreground/80">נשמח לחגוג איתכם</p>
        <p className="font-script text-5xl text-primary">Kobi &amp; Karin</p>
      </div>

      <a
        href="https://wa.me/?text=נרגשים+לאשר+הגעה+לחתונה+של+קובי+וקארין"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition"
      >
        אישור הגעה ב-WhatsApp
      </a>

      <p className="mt-16 text-xs text-muted-foreground tracking-wider">
        נתראה ב-28.07.2026 · אולמי סנטרל פתח תקווה
      </p>
    </section>
  );
}
