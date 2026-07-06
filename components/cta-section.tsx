import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection({
  eyebrow = 'Ready when you are',
  title = "Let's build something worth following.",
  description = 'Book a free discovery call and we will map out a clear, organized plan for your brand—no pressure, no jargon.',
  primaryLabel = 'Book a Discovery Call',
  primaryHref = '/contact',
  secondaryLabel = 'View Services',
  secondaryHref = '/services',
}: {
  eyebrow?: string
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href={primaryHref} />}
              size="lg"
              className="w-full rounded-full bg-background px-6 text-foreground hover:bg-background/90 sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={secondaryHref} />}
              variant="outline"
              size="lg"
              className="w-full rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
