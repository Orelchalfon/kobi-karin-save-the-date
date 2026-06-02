## Unify the champagne tower glasses

In `src/components/wedding/Decorations.tsx`, the `Champagne` SVG currently draws 4 rows of glasses where each row uses a slightly different coupe shape and size (rows 1-2 use a small narrow bowl, rows 3-4 use wider ones). The result looks inconsistent — the top glass reads as a different object than the rest.

### Change

Rewrite the `Champagne` component so every glass in the tower is the **exact same wine/coupe glass**: identical bowl path, identical stem length, identical base width. Only the X/Y position changes between rows.

- Define one reusable `<symbol id="wineGlass">` (or a single inline group) with a classic coupe/wine bowl: rounded U-shaped bowl, thin stem, small flat base.
- Render it 10 times in the 1-2-3-4 pyramid arrangement (top → bottom), all at the same scale.
- Keep the existing line-art style: `fill="none"`, `stroke="currentColor"`, thin stroke, `strokeLinecap="round"`.
- Keep a few small bubble dots above the top glass.

### Result

All 10 glasses in the tower will look like identical wine glasses, matching the clean uniform look of the reference video. No other components or styles change.
