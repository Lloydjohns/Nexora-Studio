import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, CalendarClock, FileText, CreditCard } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ProcessSection } from '@/components/sections/process-section'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Social Media Management Services | Digital Agency Company',
  description:
    'Retainer-based social media management packages: Basic, Standard, and Premium. Clear deliverables, monthly reporting, and transparent payment terms.',
}

const packages = [
  {
    name: 'Basic',
    price: '₱5,000',
    period: '/month',
    tagline: 'For brands getting started with a consistent presence.',
    features: [
      '12 posts per month',
      '1 platform',
      'Captions + graphics',
      'Basic monthly report',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '₱10,000',
    period: '/month',
    tagline: 'For growing brands that want reach and engagement.',
    features: [
      '20 posts per month',
      '2 platforms',
      'Captions + graphics + reels',
      'Community replies',
      'Detailed monthly report',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '₱18,000',
    period: '/month',
    tagline: 'For brands ready to scale with full-service support.',
    features: [
      '30 posts + stories per month',
      'Up to 3 platforms',
      'Full content production',
      'DMs + community replies',
      'Detailed report + strategy call',
      'Ad management (up to ₱5,000 budget)',
    ],
    featured: false,
  },
]

const comparison = [
  { label: 'Monthly posts', basic: '12', standard: '20', premium: '30 + stories' },
  { label: 'Platforms', basic: '1', standard: '2', premium: 'Up to 3' },
  { label: 'Captions + graphics', basic: true, standard: true, premium: true },
  { label: 'Reels / short-form video', basic: false, standard: true, premium: true },
  { label: 'Community replies', basic: false, standard: true, premium: true },
  { label: 'DM management', basic: false, standard: false, premium: true },
  { label: 'Strategy call', basic: false, standard: false, premium: true },
  { label: 'Ad management', basic: false, standard: false, premium: 'Up to ₱5,000' },
  { label: 'Reporting', basic: 'Basic', standard: 'Detailed', premium: 'Detailed + strategy' },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto size-4 text-primary" aria-label="Included" />
    ) : (
      <span className="text-muted-foreground/40" aria-label="Not included">
        —
      </span>
    )
  }
  return <span className="text-sm text-foreground">{value}</span>
}

const details = [
  {
    icon: FileText,
    title: 'Structured onboarding',
    description:
      'After you sign on, we send a simple onboarding form to collect brand assets, access, tone, and goals—then hold a kickoff to align on everything.',
  },
  {
    icon: CalendarClock,
    title: 'Monthly reporting',
    description:
      'Every month you receive a clear report on reach, engagement, growth, and what we recommend next. Transparency is built into how we work.',
  },
  {
    icon: CreditCard,
    title: 'Simple payment terms',
    description:
      'Retainers are billed monthly in advance via bank transfer or e-wallet. No lock-in beyond the current month—just a 14-day notice to pause or stop.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Social Media Management"
        title="Retainer packages that keep your brand visible"
        description="Choose a package that fits your goals. Every plan is managed by our team with clear deliverables, consistent posting, and honest monthly reporting."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-3xl border p-8 ${
                  pkg.featured
                    ? 'border-primary bg-card ring-1 ring-primary'
                    : 'border-border bg-card'
                }`}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-semibold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {pkg.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pkg.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/contact" />}
                  size="lg"
                  variant={pkg.featured ? 'default' : 'outline'}
                  className="mt-8 w-full rounded-full"
                >
                  Inquire about {pkg.name}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Compare packages
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Everything, side by side
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-foreground">
                    Basic
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-primary">
                    Standard
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-foreground">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 1 ? 'bg-secondary/40' : undefined}
                  >
                    <td className="p-5 text-sm font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="p-5 text-center">
                      <Cell value={row.basic} />
                    </td>
                    <td className="p-5 text-center">
                      <Cell value={row.standard} />
                    </td>
                    <td className="p-5 text-center">
                      <Cell value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {details.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CtaSection
        eyebrow="Get started"
        title="Not sure which package fits?"
        description="Book a discovery call and we'll recommend the right plan for your goals and budget."
        secondaryLabel="Shop Digital Products"
        secondaryHref="/products"
      />
    </>
  )
}
