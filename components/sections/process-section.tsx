const steps = [
  {
    step: '01',
    title: 'Inquiry',
    description:
      'Tell us about your brand, goals, and where you are today through our contact form.',
  },
  {
    step: '02',
    title: 'Discovery Call',
    description:
      'A friendly, no-pressure call to understand your needs and see if we are the right fit.',
  },
  {
    step: '03',
    title: 'Proposal',
    description:
      'We send a clear proposal with scope, deliverables, timeline, and transparent pricing.',
  },
  {
    step: '04',
    title: 'Onboarding',
    description:
      'A structured onboarding form and kickoff so we gather everything we need to start strong.',
  },
  {
    step: '05',
    title: 'Content Planning',
    description:
      'We plan your content calendar, tone, and strategy—then align with you before publishing.',
  },
  {
    step: '06',
    title: 'Management & Reporting',
    description:
      'We manage day-to-day, stay consistent, and send clear monthly reports on results.',
  },
]

export function ProcessSection({
  showHeading = true,
}: {
  showHeading?: boolean
}) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              How it works
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A clear, organized process from day one
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are process-driven, so working with us feels structured and
              easy. Here is exactly what to expect.
            </p>
          </div>
        )}

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step} className="bg-card p-7">
              <span className="font-serif text-2xl font-semibold text-primary">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
