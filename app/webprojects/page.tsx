import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Eye,
  FileText,
  Globe2,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  MousePointerClick,
  PenTool,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Web Projects | Nexora Studio',
  description:
    'Explore Nexora Studio web projects, client work, concept redesigns, content campaigns, and case studies for small brands and creators.',
}

const stats = [
  { value: '9+', label: 'sample project directions' },
  { value: '3', label: 'featured case studies' },
  { value: '6', label: 'core deliverable types' },
  { value: '100%', label: 'honest project labeling' },
]

const filters = [
  'Web design',
  'Social media',
  'Brand systems',
  'Launch pages',
  'Content strategy',
  'Concept redesigns',
  'Digital products',
]

const featuredProjects = [
  {
    title: 'Kape & Co.',
    category: 'Client Work / Cafe',
    image: '/images/case-cafe.png',
    concept: false,
    type: 'Social refresh + local campaign',
    timeframe: '3 months',
    summary:
      'A full social refresh for a neighborhood coffee brand that needed stronger consistency, clearer promotions, and a warmer online presence.',
    challenge:
      'The cafe had loyal walk-in customers, but its social media looked inconsistent and did not clearly promote weekly specials, events, or best-selling drinks.',
    solution:
      'We created a content direction built around cozy visuals, repeatable post formats, weekly reels, customer-focused captions, and a simple engagement rhythm.',
    deliverables: [
      'Instagram content calendar',
      'Promotional post templates',
      'Weekly reel concepts',
      'Community reply guide',
    ],
    results: [
      { metric: '+112%', label: 'Engagement' },
      { metric: '+2.4k', label: 'New followers' },
      { metric: '3 mo', label: 'Timeframe' },
    ],
  },
  {
    title: 'Glow Skin Lab',
    category: 'Client Work / Skincare',
    image: '/images/case-skincare.png',
    concept: false,
    type: 'Product storytelling + content system',
    timeframe: '2 months',
    summary:
      'A cleaner content system for a skincare brand that wanted product education, trust-building visuals, and more intentional customer touchpoints.',
    challenge:
      'The brand had strong products, but the feed leaned too heavily on product shots without enough education, routine guidance, or social proof.',
    solution:
      'We built a content mix around ingredient education, routine carousels, testimonials, simple product comparisons, and a softer visual direction.',
    deliverables: [
      'Educational carousel set',
      'Product photography direction',
      'Caption framework',
      'Monthly content report',
    ],
    results: [
      { metric: '+68%', label: 'Reach' },
      { metric: '4.9/5', label: 'Brand sentiment' },
      { metric: '2 mo', label: 'Timeframe' },
    ],
  },
  {
    title: 'Form Fitness Studio',
    category: 'Concept Redesign',
    image: '/images/case-fitness.png',
    concept: true,
    type: 'Brand direction + campaign concept',
    timeframe: 'Concept build',
    summary:
      'A concept rebrand and content strategy for a boutique fitness studio, created to show how we approach positioning, offers, and recurring campaign ideas.',
    challenge:
      'Boutique fitness brands often need to balance energy, trust, community, and class promotion without making every post feel like a sales announcement.',
    solution:
      'We mapped a sample content ecosystem with class spotlights, trainer stories, member wins, challenge campaigns, and a cleaner brand rhythm.',
    deliverables: [
      'Brand mood direction',
      'Sample content calendar',
      'Landing page content sections',
      'Campaign messaging map',
    ],
    results: [
      { metric: 'Concept', label: 'Project type' },
      { metric: '3 platforms', label: 'Planned' },
      { metric: '30 posts', label: 'Sample calendar' },
    ],
  },
]

const projectSamples = [
  {
    icon: Globe2,
    title: 'Nexora Studio Website',
    category: 'Website build',
    image: '/images/hero-workspace.png',
    label: 'Internal project',
    description:
      'A clean agency website structure with service pages, product catalog, process page, contact flow, and polished brand messaging.',
    deliverables: ['Site structure', 'Page copy', 'Responsive UI'],
  },
  {
    icon: LayoutDashboard,
    title: 'Creator Product Shop',
    category: 'Digital product page',
    image: '/images/product-canva.png',
    label: 'Sample build',
    description:
      'A shop-style page for Canva templates, planners, Notion systems, and bundles with clearer product details and checkout paths.',
    deliverables: ['Product cards', 'Bundle layout', 'FAQ section'],
  },
  {
    icon: CalendarDays,
    title: 'Wellness Launch Calendar',
    category: 'Campaign plan',
    image: '/images/product-planner.png',
    label: 'Concept system',
    description:
      'A campaign planning system for a wellness offer launch, covering content themes, deadlines, captions, and weekly priorities.',
    deliverables: ['Launch calendar', 'Caption prompts', 'Checklist'],
  },
  {
    icon: Megaphone,
    title: 'Local Cafe Promo Sprint',
    category: 'Social campaign',
    image: '/images/case-cafe.png',
    label: 'Client-style sample',
    description:
      'A promotion sprint built around menu highlights, weekend traffic, user-generated content, and simple community engagement.',
    deliverables: ['Promo posts', 'Stories', 'Reel ideas'],
  },
  {
    icon: PenTool,
    title: 'Skincare Education Series',
    category: 'Content series',
    image: '/images/case-skincare.png',
    label: 'Client-style sample',
    description:
      'A product education series designed to explain benefits, ingredients, routines, and customer objections in a calmer visual style.',
    deliverables: ['Carousels', 'Routine posts', 'Proof points'],
  },
  {
    icon: Target,
    title: 'Fitness Challenge Funnel',
    category: 'Lead generation',
    image: '/images/case-fitness.png',
    label: 'Concept project',
    description:
      'A sample funnel for a 21-day fitness challenge, including landing page sections, content prompts, and conversion-focused messaging.',
    deliverables: ['Landing sections', 'Social hooks', 'CTA map'],
  },
]

const capabilities = [
  {
    icon: Search,
    title: 'Discovery and audit',
    description:
      'We review your current website, content, offers, audience, and brand touchpoints before proposing the creative direction.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy and messaging',
    description:
      'We define what the page or campaign needs to communicate so every section has a clear purpose.',
  },
  {
    icon: Sparkles,
    title: 'Creative production',
    description:
      'We build visual systems, templates, content layouts, and campaign assets that feel consistent and usable.',
  },
  {
    icon: BarChart3,
    title: 'Reporting and refinement',
    description:
      'For ongoing projects, we review performance and recommend adjustments that make the next cycle stronger.',
  },
]

const process = [
  {
    step: '01',
    title: 'Understand the goal',
    description:
      'We clarify what the project needs to do: build trust, explain an offer, increase inquiries, organize content, or support a launch.',
  },
  {
    step: '02',
    title: 'Plan the structure',
    description:
      'We map sections, messages, content types, visuals, and calls to action before moving into production.',
  },
  {
    step: '03',
    title: 'Create the assets',
    description:
      'Design, copy, content calendars, templates, page sections, and creative systems are produced with a review path.',
  },
  {
    step: '04',
    title: 'Refine for launch',
    description:
      'We polish the final work for mobile, clarity, visual consistency, and client handoff.',
  },
]

const clientQuestions = [
  {
    question: 'Are all of these real client projects?',
    answer:
      'No. Some are live-style client work and some are clearly labeled concepts or samples. We show concepts honestly so clients can understand our thinking and visual direction.',
  },
  {
    question: 'Can you create something like this for my brand?',
    answer:
      'Yes. We can adapt this approach for websites, launch pages, social campaigns, content calendars, and digital product pages.',
  },
  {
    question: 'Do you only design, or do you also help with strategy?',
    answer:
      'We help with both. The strongest projects usually combine strategy, messaging, structure, design, and a simple plan for what happens after launch.',
  },
  {
    question: 'What do you need from me to start?',
    answer:
      'We usually need your brand details, goals, current links or assets, target audience, offer information, and examples of styles you like.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Web Projects"
        title="Project work that shows strategy, structure, and creative execution"
        description="Explore client-style case studies, concept redesigns, web page builds, content systems, and campaign samples. Each project shows how Nexora Studio thinks through clarity, design, and growth."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Portfolio overview
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              More than visuals. Each project is built around a client problem.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A polished project should help visitors understand what you do,
              why it matters, and what action they should take next. Our work
              focuses on clear structure, consistent visuals, useful content,
              and honest storytelling.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                size="lg"
                className="rounded-full px-6"
              >
                Start a project
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/services" />}
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                View services
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-5">
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Featured case studies
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A closer look at the thinking behind the work
            </h2>
          </div>

          <div className="mt-12 flex flex-col gap-16">
            {featuredProjects.map((study, i) => (
              <article
                key={study.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={`${study.title} - ${study.category}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {study.concept ? 'Concept project' : 'Client-style work'}
                  </span>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {study.category}
                    </span>
                    <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {study.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-foreground/80">
                    {study.type}
                  </p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Solution
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {study.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {study.results.map((r) => (
                      <div key={r.label}>
                        <dt className="font-serif text-2xl font-semibold text-foreground">
                          {r.metric}
                        </dt>
                        <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                          {r.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
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
                More project samples
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Sample directions clients can use as inspiration
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              These samples show the kinds of pages, campaigns, and systems we
              can shape for different industries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectSamples.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {project.label}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <project.icon className="size-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              What clients can expect
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Every project has a clear reason behind the design.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We use portfolio work to show more than the final look. Clients
              should understand how the project was planned, what problem it
              solved, and what assets were delivered.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
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
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Project flow
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              From idea to polished project
            </h2>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
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

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MousePointerClick className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
              Best for service brands
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Coaches, studios, local shops, freelancers, and small teams that
              need clear pages, campaign assets, or content systems.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
              Built for clarity
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We design project sections so visitors can scan, understand the
              offer, trust the brand, and know what to do next.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-card p-8">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">
              Easy to hand off
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Deliverables are organized so clients can review, reuse, publish,
              or continue building from the work after launch.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Client questions
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Helpful answers before you inquire
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clientQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-card p-7">
          <TrendingUp className="size-6 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              A note on honesty:
            </span>{' '}
            We clearly label concept and sample projects. They demonstrate our
            skills and strategy while we grow our roster of live client work. No
            inflated claims, no fake case studies.
          </p>
        </div>
      </section>

      <CtaSection
        eyebrow="Your brand next"
        title="Let's create a project your clients can understand and trust"
        description="Book a discovery call and we will talk through the kind of website, campaign, or content system that makes sense for your goals."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
