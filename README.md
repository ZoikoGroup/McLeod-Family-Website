# McLeod Family

Next.js (App Router) + TypeScript + Tailwind.

## Structure

    app/                 routes only: each folder has a page.tsx
      layout.tsx         wraps every page with Header + Footer
    components/
      layout/            Header, Footer
      <page-name>/       sections for that page + index.ts
    lib/navigation.ts    nav links used by Header and Footer
    public/images/<page-name>/   images per page

## Adding a page (e.g. services)

1. app/services/page.tsx - import sections from @/components/services
2. components/services/*Section.tsx + index.ts
3. public/images/services/ for images
4. Add { label: "Services", href: "/services" } to lib/navigation.ts

Header and Footer appear automatically via app/layout.tsx.
