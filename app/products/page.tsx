import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Clock, Layers, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Products | Digital Agency Company',
  description:
    'Practical, time-saving digital products: Canva templates, planners, printables, social media kits, Notion systems, and content calendar packs.',
}

const products = [
  {
    title: 'Canva Template Bundles',
    description:
      'Editable, on-brand social media templates so you can post consistently in minutes—no design skills needed.',
    image: '/images/product-canva.png',
    tag: 'Templates',
  },
  {
    title: 'Digital Planners',
    description:
      'Beautifully organized planners for goals, content, and daily focus. Use on tablet or print at home.',
    image: '/images/product-planner.png',
    tag: 'Planners',
  },
  {
    title: 'Notion Systems',
    description:
      'Plug-and-play Notion dashboards to run your content, projects, and business in one organized place.',
    image: '/images/product-notion.png',
    tag: 'Systems',
  },
]

const productTypes = [
  'Canva templates',
  'Planners',
  'Printables',
  'Social media kits',
  'Template bundles',
  'Notion systems',
  'Content calendar packs',
]

const benefits = [
  {
    icon: Clock,
    title: 'Save time',
    description:
      'Skip the blank page. Start from a polished, proven structure and customize in minutes.',
  },
  {
    icon: Layers,
    title: 'Stay organized',
    description:
      'Systems and planners designed to bring order to content, projects, and daily workflow.',
  },
  {
    icon: Sparkles,
    title: 'Look professional',
    description:
      'On-brand, thoughtfully designed products that make creators and small businesses shine.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Products"
        title="Practical tools that save you time"
        description="Buy once, use for years. Our digital products help creators, business owners, and professionals stay organized and post consistently—without the overwhelm."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {productTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground">
              Shop our products on your favorite platform
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our full catalog lives on trusted marketplaces so checkout is
              secure and instant. Browse and download in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {siteConfig.productPlatforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Shop on {platform.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Need something custom?"
        title="We also build products for your brand"
        description="Want a custom template pack or Notion system for your team? Tell us what you need."
        primaryLabel="Get in touch"
        secondaryLabel="View Services"
      />
    </>
  )
}
