# techstack
- tailwind
- react

```
└── testimonials grid section/
    └── src/
        ├── index.css
        ├── main.tsx
        ├── pages/
        │   └── App.tsx
        ├── components/
        │   └── card.tsx
        └── assets/
            ├── bg-pattern-quotation.svg
            ├── favicon-32x32.png
            ├── hero.png
            ├── image-daniel.jpg
            ├── image-jeanette.jpg
            ├── image-jonathan.jpg
            ├── image-kira.jpg
            ├── image-patrick.jpg
            ├── react.svg
            └── vite.svg
```

# Note

Gunakan grid-template-areas dengan package https://npmx.dev/package/tailwindcss-grid-template-areas mengikuti Method 1 dan Method 2 dari dokumentasinya. Cukup gunakan versi Browser CDN saja, tidak perlu langkah instalasi lanjutan yaitu Syntax Guide. Masukkan kodenya langsung ke dalam index.html..

```js
<div className="lg:[grid-template-areas:'box-1_box-1_box-2_box-5''box-3_box-4_box-4_box-5']">
    <div className={`lg:[grid-area:${testimonial.gridArea}]`}>
    </div>
</div>

```