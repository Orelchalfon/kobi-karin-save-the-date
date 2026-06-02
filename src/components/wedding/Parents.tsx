import { FlowerVase, Divider } from "./Decorations";

export function Parents() {
  return (
    <section className="px-6 py-20 text-center">
      <FlowerVase className="mx-auto h-28 w-28 text-primary/80" />

      <div className="mt-8 grid grid-cols-[1fr_auto_1fr] gap-5 items-start max-w-md mx-auto">
        <div>
          <div className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
            הורי החתן
          </div>
          <p className="font-hebrew text-lg font-medium leading-snug">עוזי יחזקאל</p>
          <p className="font-hebrew text-lg font-medium leading-snug">ושרה בכר</p>
        </div>
        <span className="h-16 w-px bg-border self-center" />
        <div>
          <div className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
            הורי הכלה
          </div>
          <p className="font-hebrew text-lg font-medium leading-snug">מרדכי ואלה</p>
          <p className="font-hebrew text-lg font-medium leading-snug">אלוני</p>
        </div>
      </div>

      <Divider className="mt-16" />

      <div className="mt-10 space-y-2">
        <p className="font-hebrew text-foreground/80">נשמח לחגוג איתכם</p>
        <p className="font-script text-5xl text-primary leading-tight">Kobi &amp; Karin</p>
      </div>

      <a
        href="https://wa.me/?text=נרגשים+לאשר+הגעה+לחתונה+של+קובי+וקארין"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        אישור הגעה ב-WhatsApp
      </a>

      <p className="mt-16 text-xs text-muted-foreground tracking-[0.2em]">
        נתראה ב-28.07.2026 · אולמי סנטרל פתח תקווה
      </p>
    </section>
  );
}
