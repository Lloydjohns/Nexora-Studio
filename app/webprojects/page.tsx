import type { Metadata } from 'next'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Digital Agency Company',
  description:
    'Client work, mock case studies, and concept redesigns showcasing our social media management and creative production.',
}

const caseStudies = [
  {
    title: 'Kape & Co.',
    category: 'Client Work · Café',
    image: '/images/case-cafe.png',
    concept: false,
    summary:
      'A full social refresh for a specialty coffee shop—consistent grid, weekly reels, and community engagement.',
    results: [
      { metric: '+112%', label: 'Engagement' },
      { metric: '+2.4k', label: 'New followers' },
      { metric: '3 mo', label: 'Timeframe' },
    ],
  },
  {
    title: 'Glow Skin Lab',
    category: 'Client Work · Skincare',
    image: '/images/case-skincare.png',
    concept: false,
    summary:
      'Elevated product photography direction and a content system that turned browsers into loyal buyers.',
    results: [
      { metric: '+68%', label: 'Reach' },
      { metric: '4.9★', label: 'Brand sentiment' },
      { metric: '2 mo', label: 'Timeframe' },
    ],
  },
  {
    title: 'Form Fitness Studio',
    category: 'Concept Redesign',
    image: '/images/case-fitness.png',
    concept: true,
    summary:
      'A concept rebrand and content strategy for a boutique fitness studio—shown here to demonstrate our approach.',
    results: [
      { metric: 'Concept', label: 'Project type' },
      { metric: '3 platforms', label: 'Planned' },
      { metric: '30 posts', label: 'Sample calendar' },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio & case studies"
        title="Proof of our process and creativity"
        description="A look at client work, mock case studies, and concept redesigns. We label concept projects honestly—they show how we think and what we can do."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          {caseStudies.map((study, i) => (
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
                  src={study.image || '/placeholder.svg'}
                  alt={`${study.title} — ${study.category}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {study.category}
                  </span>
                  {study.concept && (
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      Concept project
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground">
                  {study.title}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
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
      </section>

      <section className="bg-secondary/40 px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-card p-7">
          <TrendingUp className="size-6 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              A note on honesty:
            </span>{' '}
            We clearly label concept and mock projects. They demonstrate our
            skills and strategy while we grow our roster of live client work—no
            inflated claims, ever.
          </p>
        </div>
      </section>

      <CtaSection
        eyebrow="Your brand next"
        title="Let's create your success story"
        description="Book a discovery call and let's talk about the results we can build together."
      />
    </>
  )
}
