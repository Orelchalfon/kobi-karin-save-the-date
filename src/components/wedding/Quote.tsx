import { Champagne, Divider } from "./Decorations";

export function Quote() {
  return (
    <section className="paper px-6 pt-20 pb-16 text-center">
      <p className="font-hebrew text-lg md:text-xl leading-relaxed text-foreground/85 max-w-md mx-auto">
        נרגשים להזמינכם לחגוג עמנו
        <br />
        את היום המאושר בחיינו
      </p>

      <Divider className="mt-10" />

      <div className="mt-10 mx-auto max-w-md">
        <p className="font-hebrew text-base md:text-lg leading-loose text-foreground/75 italic">
          עוד יִשָּׁמַע בְּעָרֵי יְהוּדָה וּבְחֻצוֹת יְרוּשָׁלָיִם
          <br />
          קוֹל שָׂשׂוֹן וְקוֹל שִׂמְחָה
          <br />
          קוֹל חָתָן וְקוֹל כַּלָּה
        </p>
        <p className="mt-3 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          ירמיהו ל"ג · י"א
        </p>
      </div>

      <Champagne className="mx-auto mt-16 h-32 w-32 text-primary" />
      <h2 className="mt-4 font-hebrew text-4xl md:text-5xl font-bold ink">אהובים שלנו</h2>
      <Divider className="mt-6" />

      <p className="mt-10 font-hebrew text-base leading-loose text-foreground/80 max-w-md mx-auto">
        יש רגעים בחיים שפשוט חייבים לחלוק עם האנשים
        <br />
        שהופכים את הלב שלנו לשלם.
        <br />
        אנחנו מצפים ומחכים לחלוק את הרגע הבלתי נשכח הזה
        <br />
        עם האנשים המיוחדים ביותר בחיינו.
      </p>
    </section>
  );
}
