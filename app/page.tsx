import { Hero } from '@/components/home/hero'
import { Offerings } from '@/components/home/offerings'
import { ProcessSection } from '@/components/sections/process-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/cta-section'
import { Eye, Clock, LineChart, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Stay visible',
    description:
      'Organized social media management keeps your brand showing up consistently for the right people.',
  },
  {
    icon: Clock,
    title: 'Save time',
    description:
      'Our digital products remove the busywork so you can focus on running your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Work with clear systems',
    description:
      'Structured onboarding, reporting, and delivery mean no guesswork and no surprises.',
  },
  {
    icon: LineChart,
    title: 'Measurable results',
    description:
      'We value transparency—every month you get clear reporting on what is working.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offerings />

      <section className="bg-secondary/40 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why brands choose us
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Reliable, strategic, and easy to work with
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
