import { Champagne, Divider } from "./Decorations";

export function Quote() {
  return (
    <section className="paper px-6 py-20 text-center">
      <p className="font-hebrew text-lg md:text-xl leading-relaxed text-foreground/85 max-w-md mx-auto">
        נרגשים להזמינכם לחגוג עמנו
        <br />
        את היום המאושר בחיינו
      </p>

      <div className="mt-12 mx-auto max-w-md">
        <p className="font-hebrew text-base md:text-lg leading-loose text-foreground/75">
          עוד יִשָּׁמַע בְּעָרֵי יְהוּדָה וּבְחֻצוֹת יְרוּשָׁלָיִם
          <br />
          קוֹל שָׂשׂוֹן וְקוֹל שִׂמְחָה
          <br />
          קוֹל חָתָן וְקוֹל כַּלָּה
        </p>
        <p className="mt-3 text-xs tracking-widest text-muted-foreground">
          (ירמיהו ל"ג, י"א)
        </p>
      </div>

      <Champagne className="mx-auto mt-14 h-40 w-40 text-primary" />
      <h2 className="mt-6 font-hebrew text-4xl md:text-5xl font-bold">אהובים שלנו</h2>
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
