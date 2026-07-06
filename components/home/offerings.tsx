import Link from 'next/link'
import { ArrowUpRight, Megaphone, LayoutGrid, Check } from 'lucide-react'

const offers = [
  {
    icon: Megaphone,
    label: 'Retainer Service',
    title: 'Social Media Management',
    description:
      'Hands-on, retainer-based management that keeps your brand visible, consistent, and growing across platforms.',
    points: [
      'Content planning & production',
      'Captions, graphics & reels',
      'Community replies & DMs',
      'Detailed monthly reporting',
    ],
    href: '/services',
    cta: 'View SMM packages',
  },
  {
    icon: LayoutGrid,
    label: 'Scalable Products',
    title: 'Digital Products',
    description:
      'Practical, time-saving templates and systems for creators and business owners—buy once, use for years.',
    points: [
      'Canva templates & kits',
      'Planners & printables',
      'Notion systems',
      'Content calendar packs',
    ],
    href: '/products',
    cta: 'Shop digital products',
  },
]

export function Offerings() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Two income streams, one brand
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Built for client service and scalable digital income
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our two offers work together. Retainer clients get consistent,
            strategic management—while our digital products help everyone else
            work smarter on their own.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <offer.icon className="size-6" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {offer.label}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {offer.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {offer.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={offer.href}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {offer.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
