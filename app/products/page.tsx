import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock,
  Download,
  FileText,
  Layers,
  LayoutTemplate,
  PackageCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Digital Products | Nexora Studio',
  description:
    'Shop practical digital products for creators and small businesses: Canva templates, planners, Notion systems, content calendars, printable workbooks, and launch kits.',
}

const productTypes = [
  'Canva templates',
  'Digital planners',
  'Notion dashboards',
  'Content calendars',
  'Printable workbooks',
  'Brand kits',
  'Caption packs',
  'Launch checklists',
  'Social media kits',
  'Business trackers',
]

const featuredProducts = [
  {
    title: 'Creator Canva Template Bundle',
    description:
      'A ready-to-edit social media pack for creators, coaches, and small brands that need polished posts fast.',
    image: '/images/product-canva.png',
    tag: 'Best seller',
    price: 'From PHP 499',
    format: 'Canva',
    delivery: 'Instant download',
    includes: [
      '60 editable post templates',
      '20 story templates',
      'Highlight cover set',
      'Mini brand style guide',
    ],
  },
  {
    title: 'Monthly Content Planner',
    description:
      'Plan campaigns, captions, tasks, and posting days in one calm workspace for desktop, tablet, or print.',
    image: '/images/product-planner.png',
    tag: 'Popular',
    price: 'From PHP 349',
    format: 'PDF + GoodNotes',
    delivery: 'Printable download',
    includes: [
      'Monthly overview pages',
      'Weekly content planner',
      'Goal and habit trackers',
      'Campaign notes pages',
    ],
  },
  {
    title: 'Notion Business Command Center',
    description:
      'A plug-and-play Notion system for projects, content, leads, finances, and weekly priorities.',
    image: '/images/product-notion.png',
    tag: 'System',
    price: 'From PHP 799',
    format: 'Notion template',
    delivery: 'Duplicate link',
    includes: [
      'Project dashboard',
      'Content calendar database',
      'Lead tracker',
      'Simple finance tracker',
    ],
  },
]

const sampleProducts = [
  {
    icon: LayoutTemplate,
    title: 'Instagram Carousel Kit',
    category: 'Templates',
    description:
      'Swipe-ready educational, promo, testimonial, and storytelling layouts.',
    items: '45 pages',
  },
  {
    icon: CalendarDays,
    title: '30-Day Content Calendar',
    category: 'Strategy',
    description:
      'Daily post ideas, caption prompts, content pillars, and campaign notes.',
    items: '30 prompts',
  },
  {
    icon: FileText,
    title: 'Client Welcome Packet',
    category: 'Business',
    description:
      'A clean onboarding PDF template for service providers and freelancers.',
    items: '12 pages',
  },
  {
    icon: Sparkles,
    title: 'Brand Moodboard Pack',
    category: 'Branding',
    description:
      'Editable moodboards, color palette pages, and typography direction sheets.',
    items: '18 layouts',
  },
  {
    icon: Layers,
    title: 'Content Repurposing Map',
    category: 'Workflow',
    description:
      'Turn one long idea into posts, reels, emails, stories, and lead magnets.',
    items: '1 system',
  },
  {
    icon: PackageCheck,
    title: 'Digital Launch Checklist',
    category: 'Launch',
    description:
      'A step-by-step checklist for publishing products, offers, and campaigns.',
    items: '64 tasks',
  },
]

const bundles = [
  {
    name: 'Starter Creator Pack',
    price: 'PHP 899',
    description:
      'For creators who want a polished posting system without starting from zero.',
    contents: [
      'Canva template bundle',
      '30-day content calendar',
      'Caption prompt sheet',
      'Posting checklist',
    ],
  },
  {
    name: 'Small Business Ops Pack',
    price: 'PHP 1,299',
    description:
      'For service providers who need a simple way to manage content, clients, and weekly work.',
    contents: [
      'Notion command center',
      'Client welcome packet',
      'Project tracker',
      'Monthly review worksheet',
    ],
  },
  {
    name: 'Launch Ready Pack',
    price: 'PHP 1,799',
    description:
      'For brands preparing a product, promo, or offer launch with organized marketing assets.',
    contents: [
      'Launch checklist',
      'Promo Canva templates',
      'Email outline planner',
      'Content repurposing map',
    ],
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save production time',
    description:
      'Start from polished layouts and organized systems instead of building every post, planner, or tracker from scratch.',
  },
  {
    icon: Layers,
    title: 'Stay consistent',
    description:
      'Reusable templates, calendars, and dashboards help your brand show up with the same quality every week.',
  },
  {
    icon: Sparkles,
    title: 'Customize with ease',
    description:
      'Change colors, fonts, images, sections, and labels so every product still feels like your own brand.',
  },
]

const steps = [
  {
    title: 'Choose your product',
    description:
      'Pick a single product or a bundle based on the workflow you want to improve.',
  },
  {
    title: 'Checkout on a marketplace',
    description:
      'Use Etsy, Gumroad, or Payhip for secure payment and instant access.',
  },
  {
    title: 'Download and customize',
    description:
      'Open the included files, duplicate the Notion link, or edit the Canva template for your brand.',
  },
  {
    title: 'Reuse every month',
    description:
      'Refresh the copy, swap the images, and keep using the same structure for future campaigns.',
  },
]

const faqs = [
  {
    question: 'Can I edit the templates?',
    answer:
      'Yes. Canva products are fully editable, and Notion templates can be duplicated into your own workspace.',
  },
  {
    question: 'Do I receive a physical item?',
    answer:
      'No. These are digital products. You receive download files, template links, or printable PDFs depending on the item.',
  },
  {
    question: 'Can I use these for clients?',
    answer:
      'You can use them to create work for your own business or clients, but reselling the original templates as-is is not allowed.',
  },
  {
    question: 'Do you make custom digital products?',
    answer:
      'Yes. We can create branded Canva packs, Notion dashboards, planners, and launch systems for your team or audience.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Digital Products"
        title="Ready-made tools for faster, cleaner creative work"
        description="Shop editable templates, planners, dashboards, and launch resources built for creators, freelancers, and small businesses that want to stay visible without feeling buried in admin."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
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
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-l border-border pl-5">
                <p className="font-serif text-3xl font-semibold text-foreground">
                  25+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  product ideas and sample listings
                </p>
              </div>
              <div className="border-l border-border pl-5">
                <p className="font-serif text-3xl font-semibold text-foreground">
                  3
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  secure shopping platforms
                </p>
              </div>
              <div className="border-l border-border pl-5">
                <p className="font-serif text-3xl font-semibold text-foreground">
                  24/7
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  instant digital access
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Download className="size-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  How delivery works
                </h2>
                <p className="text-sm text-muted-foreground">
                  Purchase, download, personalize, and reuse.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Featured products
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Start with the best shortcuts in the shop
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.title}
                className="group flex overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="flex w-full flex-col">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {product.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span>{product.format}</span>
                      <span aria-hidden="true">/</span>
                      <span>{product.delivery}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {product.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/90"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                      <p className="text-sm font-semibold text-foreground">
                        {product.price}
                      </p>
                      <Button
                        nativeButton={false}
                        render={<Link href="#shop-platforms" />}
                        size="sm"
                        className="rounded-full px-4"
                      >
                        Shop
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                More samples
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Add-on products for every part of your workflow
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mix individual items with bigger bundles depending on what you
              need right now.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProducts.map((product) => (
              <article
                key={product.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <product.icon className="size-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {product.items}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Bundle deals
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Product packs for bigger momentum
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <article
                key={bundle.name}
                className="flex flex-col rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex items-center gap-2 text-primary">
                  <Star className="size-4 fill-current" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                    Bundle
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  {bundle.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {bundle.description}
                </p>
                <p className="mt-5 font-serif text-3xl font-semibold text-foreground">
                  {bundle.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {bundle.contents.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  nativeButton={false}
                  render={<Link href="#shop-platforms" />}
                  variant="outline"
                  size="lg"
                  className="mt-8 rounded-full"
                >
                  View platforms
                  <ArrowRight className="size-4" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
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

      <section id="shop-platforms" className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Secure checkout
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground">
                Shop our products on your favorite platform
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our full catalog lives on trusted marketplaces so checkout is
                secure and instant. Browse, buy, and download in minutes.
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
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Quick answers before you buy
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Need something custom?"
        title="We also build digital products for your brand"
        description="Want a branded template pack, printable planner, or Notion system for your audience or team? Tell us what you need and we will map it out."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
