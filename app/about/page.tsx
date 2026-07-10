import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  Check,
  Code2,
  FileText,
  Handshake,
  LayoutDashboard,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us | Nexora Studio',
  description:
    'Meet Nexora Studio, a creative digital agency in the Philippines helping brands grow through social media management, digital products, strategy, and organized systems.',
}

const stats = [
  { value: '2026', label: 'Studio launched' },
  { value: '2', label: 'Core service lines' },
  { value: '4', label: 'Focused team roles' },
  { value: 'Global', label: 'Remote-ready delivery' },
]

const story = [
  {
    year: 'Early 2026',
    title: 'The idea became a studio',
    description:
      'Nexora Studio started as a simple observation: many small brands were trying to stay visible online, but they were losing time to scattered tools, inconsistent content, and unclear planning.',
  },
  {
    year: 'Mid 2026',
    title: 'Systems shaped the service',
    description:
      'The team built a service model around content calendars, brand guidelines, monthly reports, and repeatable workflows so clients could feel supported instead of overwhelmed.',
  },
  {
    year: 'Today',
    title: 'Social management plus digital products',
    description:
      'Nexora now combines hands-on social media management with practical templates, planners, and Notion systems so brands can either work with the team or use the same thinking on their own.',
  },
  {
    year: 'Next',
    title: 'A stronger creative operations partner',
    description:
      'The goal is to keep growing into a trusted digital partner for creators, service businesses, and local brands that want consistency, structure, and thoughtful creative execution.',
  },
]

const team = [
  {
    name: 'Jhie Anne Ipio',
    role: 'Creative Director',
    icon: Palette,
    image: '/images/team-1.png',
    bio: 'Leads the visual direction of client brands, from campaign concepts and templates to polished design systems that make every post feel connected.',
    focus: ['Brand direction', 'Creative production', 'Design quality'],
  },
  {
    name: 'Leonabelle Santos',
    role: 'Social Media Strategist',
    icon: Megaphone,
    image: '/images/team-1.png',
    bio: 'Builds content strategies around audience behavior, platform goals, campaign themes, and the daily rhythm of showing up online.',
    focus: ['Content strategy', 'Caption planning', 'Engagement growth'],
  },
  {
    name: 'Matthew Santos',
    role: 'Operations & Finance',
    icon: Calculator,
    image: '/images/team-2.png',
    bio: 'Keeps the studio organized through onboarding systems, reports, schedules, tracking sheets, and clean internal workflows.',
    focus: ['Client onboarding', 'Reporting', 'Finance tracking'],
  },
  {
    name: 'Jhon Lloyd Borres',
    role: 'Web & Systems Developer',
    icon: Code2,
    image: '/images/team-2.png',
    bio: 'Builds websites, digital systems, automation ideas, and technical structures that help the studio and its clients work more efficiently.',
    focus: ['Web builds', 'Automation', 'Digital systems'],
  },
]

const services = [
  {
    icon: Megaphone,
    title: 'Social Media Management',
    description:
      'Retainer-based content support for brands that need consistent posting, organized planning, and reliable monthly reporting.',
    items: [
      'Monthly content calendars',
      'Captions, graphics, and reels direction',
      'Community engagement support',
      'Performance reporting',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Digital Products',
    description:
      'Editable templates and practical systems for creators and business owners who want to move faster without sacrificing quality.',
    items: [
      'Canva template bundles',
      'Notion dashboards',
      'Content planners',
      'Printable workbooks',
    ],
  },
  {
    icon: Code2,
    title: 'Web and Systems Support',
    description:
      'Simple websites, workflow improvements, and organized digital systems that help small teams look professional and operate clearly.',
    items: [
      'Website structure',
      'Landing page support',
      'Workflow setup',
      'System documentation',
    ],
  },
]

const values = [
  {
    icon: Target,
    title: 'Strategy before posting',
    description:
      'Every design and caption should support a goal, whether that goal is awareness, trust, traffic, or conversion.',
  },
  {
    icon: FileText,
    title: 'Clear documentation',
    description:
      'We prefer organized briefs, calendars, checklists, and reports because clarity makes creative work easier to approve and improve.',
  },
  {
    icon: Handshake,
    title: 'Honest collaboration',
    description:
      'We keep communication realistic, direct, and respectful so clients know what is happening and what comes next.',
  },
  {
    icon: Sparkles,
    title: 'Polished execution',
    description:
      'Small details matter. We care about spacing, tone, rhythm, visual consistency, and the full experience of a brand online.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We learn about the brand, audience, current challenges, goals, offers, and the kind of support that would actually help.',
  },
  {
    step: '02',
    title: 'Audit and direction',
    description:
      'We review existing content, brand assets, platform activity, and workflow gaps, then define a focused direction.',
  },
  {
    step: '03',
    title: 'Planning',
    description:
      'We organize campaign themes, content pillars, deliverables, deadlines, and approval points before production begins.',
  },
  {
    step: '04',
    title: 'Production',
    description:
      'The team creates designs, captions, systems, templates, or web sections with a clear review path.',
  },
  {
    step: '05',
    title: 'Launch and manage',
    description:
      'We publish, hand over, or support implementation depending on the project scope and client needs.',
  },
  {
    step: '06',
    title: 'Report and refine',
    description:
      'We look at performance, feedback, and workflow friction so the next cycle becomes stronger and smoother.',
  },
]

const proofPoints = [
  'Built for small businesses, creators, and service providers',
  'Remote-friendly workflow for local and international clients',
  'Clear deliverables before any project begins',
  'Practical systems clients can keep using after launch',
  'Balanced creative, strategic, operational, and technical roles',
  'Transparent reporting and realistic recommendations',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A focused digital studio built around consistency, systems, and creative growth"
        description="Nexora Studio helps brands show up online with more structure and confidence through social media management, digital products, web support, and clear creative operations."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our studio story
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              We help brands turn scattered ideas into organized digital growth.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Nexora Studio was created for brands that know they need to be
                visible online, but do not always have the time, structure, or
                creative direction to keep going consistently.
              </p>
              <p>
                Our work sits between strategy and execution. We plan content,
                design brand assets, organize workflows, build simple digital
                systems, and create products that make creative work easier to
                repeat.
              </p>
              <p>
                We are based in the Philippines and built for remote
                collaboration, which allows us to support local businesses,
                creators, and service-based brands wherever they are.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                nativeButton={false}
                render={<Link href="/services" />}
                size="lg"
                className="rounded-full px-6"
              >
                Explore services
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/products" />}
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                View products
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src="/images/companylogo.png"
                alt="Nexora Studio workspace"
                fill
                sizes="(max-width: 1040px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
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
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Company history
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A realistic beginning with a clear direction
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nexora is a young studio, so our story is not about inflated
              claims. It is about building a reliable foundation, learning from
              real client needs, and turning that into repeatable creative
              systems.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {story.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
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
                What we do
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Strategy, content, systems, and digital tools under one studio.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Our offers are connected by one purpose: helping brands become
              easier to manage and easier to recognize.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our approach
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              We do the practical work that keeps creative momentum alive.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Good digital work needs more than pretty visuals. It needs a
              plan, a rhythm, a system for decisions, and a way to measure what
              happened after publishing.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
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
              Meet the team
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Small team, clear roles, shared standards.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative h-[280px] w-full bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <member.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.focus.map((item) => (
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
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How we work
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A process designed to remove confusion.
            </h2>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <PenTool className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground">
              Mission
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To help brands grow through consistent content, clear strategy,
              polished design, and practical systems that make digital work
              easier to manage.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BarChart3 className="size-6" />
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground">
              Vision
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To become a trusted creative operations partner for small brands,
              known for transparent work, useful systems, and digital output
              that feels thoughtful from first impression to final report.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why brands choose us
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              We keep the work organized, realistic, and easy to follow.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nexora is built for clients who want thoughtful execution without
              confusing jargon or messy handoffs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/85">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="size-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Best fit
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
                  We are a strong fit if you want structure.
                </h2>
              </div>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              If your brand has ideas but needs a clearer calendar, stronger
              design consistency, better workflows, or a team that can help
              translate plans into real deliverables, Nexora Studio was built
              for that kind of partnership.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Work with us"
        title="Let's build something consistent"
        description="Start a conversation and we will map out a clear plan for your brand, your content, and the systems that keep it moving."
      />
    </>
  )
}
