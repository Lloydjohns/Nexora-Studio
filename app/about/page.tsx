import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'
import { Palette, Megaphone, Calculator, Code2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Nexora Studio',
  description:
    'Meet the team behind Nexora Studio. A creative digital studio focused on consistency, strategy, and scalable growth.',
}

/* ================= TEAM ================= */
const team = [
  {
    name: 'Jhie Anne Ipio',
    role: 'Creative Director',
    icon: Palette,
    image: '/images/team-1.png',
    bio: 'Leads design systems, branding, and creative production.',
  },
  {
    name: 'Maria Leonabelle Santos',
    role: 'Social Media Strategist',
    icon: Megaphone,
    image: '/images/team-2.png',
    bio: 'Builds content strategies and grows brand visibility.',
  },
  {
    name: 'John Matthew Santos',
    role: 'Operations & Finance',
    icon: Calculator,
    image: '/images/team-3.png',
    bio: 'Handles systems, onboarding, and reporting workflows.',
  },
  {
    name: 'Jhon Lloyd Borres',
    role: 'Web & Systems Developer',
    icon: Code2,
    image: '/images/team-4.png',
    bio: 'Builds websites and automation systems.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <PageHeader
        eyebrow="About us"
        title="A modern studio built for consistency"
        description="Helping brands stay visible and creators work smarter through systems, strategy, and design."
      />

      {/* ================= INTRO ================= */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-semibold">
            About Nexora Studio
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nexora Studio is a small, focused digital agency helping brands stay
            visible—and helping creators and business owners work smarter. We
            combine hands-on social media management with practical digital
            products, creating two powerful ways to grow under one brand.
          </p>
          <p className="mt-4 text-muted-foreground">
            Growth doesn’t come from random effort—it comes from consistent
            execution, clear systems, and intentional strategy.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-secondary/40 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold">Who We Are</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We are a process-driven team based in the Philippines, working with
            clients locally and worldwide. Each of us specializes in a core
            area—creative production, strategy, and operations.
          </p>

          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>• A tight, collaborative team</li>
            <li>• Clear roles and accountability</li>
            <li>• Organized systems and workflows</li>
            <li>• Consistency over hype</li>
          </ul>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-semibold">
            What We Do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two complementary offers. One clear goal: growth.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* SMM */}
            <div className="border rounded-2xl p-8 bg-card">
              <h3 className="font-semibold text-xl">
                Social Media Management
              </h3>
              <p className="mt-3 text-muted-foreground">
                Hands-on, retainer-based management that keeps your brand
                consistent and growing.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Content planning & strategy</li>
                <li>• Captions, graphics & reels</li>
                <li>• Posting consistency</li>
                <li>• Community engagement</li>
                <li>• Monthly reporting</li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="border rounded-2xl p-8 bg-card">
              <h3 className="font-semibold text-xl">
                Digital Products
              </h3>
              <p className="mt-3 text-muted-foreground">
                Practical tools designed to save time and simplify workflows.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Canva templates & kits</li>
                <li>• Notion systems</li>
                <li>• Content calendars</li>
                <li>• Planners & printables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="bg-secondary/40 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold">
            Our Approach
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="p-6 border rounded-xl bg-card">
              <h4 className="font-semibold">Consistency</h4>
              <p className="text-muted-foreground text-sm mt-2">
                Showing up regularly builds trust and visibility.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card">
              <h4 className="font-semibold">Transparency</h4>
              <p className="text-muted-foreground text-sm mt-2">
                Clear communication and reporting every step.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card">
              <h4 className="font-semibold">Organization</h4>
              <p className="text-muted-foreground text-sm mt-2">
                Structured workflows ensure smooth delivery.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card">
              <h4 className="font-semibold">Efficiency</h4>
              <p className="text-muted-foreground text-sm mt-2">
                We focus only on what drives results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border bg-card overflow-hidden">
              <div className="relative h-[260px] w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <member.icon className="size-4 text-primary" />
                <h3 className="mt-3 font-serif text-xl">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-secondary/40 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="font-serif text-3xl font-semibold text-center">
            How We Work
          </h2>

          {[
            'Inquiry',
            'Discovery Call',
            'Proposal',
            'Onboarding',
            'Content Planning',
            'Management & Reporting',
          ].map((step, i) => (
            <div key={i} className="border rounded-xl p-6 bg-card">
              <p className="font-semibold text-primary">
                {String(i + 1).padStart(2, '0')} — {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className="border rounded-2xl p-8 bg-card">
            <h3 className="font-serif text-xl font-semibold">Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To help brands grow through consistent content, clear strategy,
              and reliable systems.
            </p>
          </div>

          <div className="border rounded-2xl p-8 bg-card">
            <h3 className="font-serif text-xl font-semibold">Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To become a trusted digital partner known for structured,
              transparent, and results-focused work.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaSection
        eyebrow="Work with us"
        title="Let’s build something consistent"
        description="Start a conversation and let’s map out a clear plan for your brand."
      />
    </>
  )
}