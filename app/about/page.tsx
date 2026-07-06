import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { Palette, Megaphone, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Digital Agency Company',
  description:
    'Meet the 3-person team behind Digital Agency Company—collaborative, efficient, and organized across creative production, social media, and operations.',
}

const team = [
  {
    name: 'Liza Reyes',
    role: 'Digital Products & Creative Production',
    icon: Palette,
    image: '/images/team-1.png',
    bio: 'Leads product design and content creation—turning ideas into polished templates, graphics, and creative assets.',
  },
  {
    name: 'Miguel Bautista',
    role: 'Social Media Management',
    icon: Megaphone,
    image: '/images/team-2.png',
    bio: 'Owns strategy, content calendars, and community management—keeping every client brand consistent and growing.',
  },
  {
    name: 'Andrea Villanueva',
    role: 'Operations & Accounting',
    icon: Calculator,
    image: '/images/team-3.png',
    bio: 'Keeps everything running smoothly—onboarding, reporting, invoicing, and the systems that make us reliable.',
  },
]

const principles = [
  {
    title: 'Collaborative',
    description:
      'Three specialists working as one team, so every project gets creative, strategic, and operational care.',
  },
  {
    title: 'Efficient',
    description:
      'Lean by design. Clear systems mean we move fast without dropping quality or communication.',
  },
  {
    title: 'Organized',
    description:
      'Documented processes for onboarding, delivery, and reporting keep everything transparent.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small studio built for big consistency"
        description="Digital Agency Company is run by a focused three-person team. We combine creative production, social media strategy, and solid operations under one roof—so working with us feels organized from the very first message."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground">
              We are building for both service and scale
            </h2>
          </div>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              We started Digital Agency Company with a simple belief: brands grow when
              they show up consistently, and creators thrive when they have the
              right tools. That is why we run two complementary offers—hands-on
              social media management and scalable digital products.
            </p>
            <p>
              Based in the Philippines and serving clients locally and
              internationally, we care about consistency, transparency, and
              measurable results. No fluff, no guesswork—just clear systems and
              honest communication.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Meet the team
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Three roles, one shared standard
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/5] bg-muted">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <member.icon className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Work with us"
        title="Let's see if we're a great fit"
        description="Every good partnership starts with a conversation. Book a discovery call and meet the team."
      />
    </>
  )
}
