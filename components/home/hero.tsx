import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  Check,
  Clock,
  FileText,
  LayoutDashboard,
  Megaphone,
  ShoppingBag,
  Sparkles,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '4', label: 'Focused team roles' },
  { value: '2', label: 'Core growth offers' },
  { value: '100%', label: 'Structured delivery' },
]

const serviceHighlights = [
  {
    icon: Megaphone,
    title: 'Social Media Management',
    description:
      'Monthly content planning, captions, graphics, reels direction, engagement support, and reports for brands that need consistent visibility.',
  },
  {
    icon: ShoppingBag,
    title: 'Digital Products',
    description:
      'Canva templates, planners, Notion systems, content calendars, and launch kits for creators and business owners who want to save time.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web and Systems Support',
    description:
      'Clear page structures, workflow tools, and simple digital systems that make your brand easier to manage and easier to trust.',
  },
]

const businessNeeds = [
  'A clear content calendar instead of random posting',
  'A polished visual system that makes your brand recognizable',
  'Reliable monthly reporting so you know what is working',
  'Reusable templates and workflows that reduce busywork',
  'A professional online presence that explains your offers clearly',
  'A small team that can think, plan, create, and organize with you',
]

const workflow = [
  {
    step: '01',
    title: 'Clarify',
    description:
      'We learn your goals, audience, current content, offers, and workflow gaps before recommending a direction.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We map the content, sections, templates, deliverables, deadlines, and approval flow so the work feels organized.',
  },
  {
    step: '03',
    title: 'Create',
    description:
      'Our team produces designs, captions, calendars, systems, pages, or digital products with a clear review process.',
  },
  {
    step: '04',
    title: 'Improve',
    description:
      'We review results, feedback, and bottlenecks so each month or project becomes sharper than the last.',
  },
]

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-16 pb-12 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Social Media Management + Digital Products + Web Systems
            </p>

            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              We help your brand stay visible, organized, and ready to grow.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Nexora Studio is a focused digital agency for small brands,
              creators, and service businesses. We manage social media, build
              practical digital products, and create simple systems that make
              your business easier to show, sell, and scale.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="w-full rounded-full px-6 sm:w-auto"
              >
                Book a Discovery Call
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/services" />}
                variant="outline"
                size="lg"
                className="w-full rounded-full px-6 sm:w-auto"
              >
                View Services
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/products" />}
                variant="ghost"
                size="lg"
                className="w-full rounded-full px-6 sm:w-auto"
              >
                <ShoppingBag className="size-4" />
                Shop Digital Products
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-3xl font-semibold text-foreground">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero-workspace.png"
                alt="A modern creative studio desk with digital planning tools"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden max-w-60 rounded-2xl border border-border bg-card p-4 shadow-sm sm:block">
              <p className="text-sm font-semibold text-foreground">
                Consistent. Transparent.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Clear onboarding, organized calendars, and reports that make
                decisions easier.
              </p>
            </div>

            <div className="absolute -right-4 top-6 hidden max-w-52 rounded-2xl border border-border bg-background/95 p-4 shadow-sm backdrop-blur sm:block">
              <div className="flex items-center gap-2 text-primary">
                <CalendarCheck className="size-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Monthly rhythm
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Plan, create, publish, review, and refine without losing the
                thread.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Business support
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Built for brands that need both creative output and operating
              structure.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {businessNeeds.map((need) => (
              <div
                key={need}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/85">
                  {need}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              What we help with
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              One studio for content, systems, and business-ready digital tools.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The goal is not just to look active online. The goal is to make
              your brand easier to understand, easier to manage, and easier to
              trust.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our operating rhythm
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A simple workflow that keeps projects moving.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether we are managing your content, creating a high-converting product page, designing a professional website, or building a custom digital system, we follow a practical, transparent, and results-driven workflow that keeps every project organized from start to finish. Our process is designed to eliminate confusion, maintain clear communication, and ensure that every milestone aligns with your business goals.

From our very first conversation, we take the time to understand your vision, objectives, target audience, and specific requirements. We then transform those ideas into a structured plan with clearly defined deliverables, timelines, and expectations, so you always know what to expect at every stage of the project.
            </p>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {workflow.map((item) => (
              <li key={item.step} className="bg-card p-7">
                <span className="font-serif text-2xl font-semibold text-primary">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4">
          {[
            {
              icon: Target,
              title: 'Clear direction',
              text: 'We connect content and design choices to the business goal behind them.',
            },
            {
              icon: Clock,
              title: 'Less busywork',
              text: 'Templates, systems, and calendars help your team move faster every week.',
            },
            {
              icon: FileText,
              title: 'Better handoffs',
              text: 'Deliverables are organized so they are easy to review, use, and continue.',
            },
            {
              icon: BarChart3,
              title: 'Smarter decisions',
              text: 'Reports and feedback loops help improve the next campaign or content cycle.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
