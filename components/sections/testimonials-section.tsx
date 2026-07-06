import { Star, PlayCircle } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Our engagement doubled in three months. The reporting is so clear that I finally understand what is actually working.',
    name: 'Bea Santos',
    role: 'Founder, Kape & Co.',
  },
  {
    quote:
      'Reliable, organized, and genuinely creative. It feels like having a full marketing team without the overhead.',
    name: 'Marcus Lim',
    role: 'Owner, Form Fitness Studio',
  },
  {
    quote:
      'The onboarding was seamless and they just get our brand voice. I no longer stress about posting consistently.',
    name: 'Dr. Elena Cruz',
    role: 'Founder, Glow Skin Lab',
  },
  {
    quote:
      'Their Notion content system alone saved us hours every week. Practical tools made by people who actually do the work.',
    name: 'Jared Tan',
    role: 'Creator & Coach',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/40 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Trusted by brands that value consistency
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We measure success by our clients&apos; results—and their words.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7"
            >
              <div>
                <div className="flex gap-0.5 text-primary" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-border bg-card/60 p-6 text-sm text-muted-foreground">
          <PlayCircle className="size-6 shrink-0 text-primary" />
          <p>
            Video testimonials from our clients are coming soon—real faces,
            real results, straight from the brands we work with.
          </p>
        </div>
      </div>
    </section>
  )
}
