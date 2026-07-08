import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Testimonials | Nexora Studio',
  description:
    'Read written reviews and client feedback from the brands we work with.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our clients say"
        description="We're proud of the relationships we build. Here's honest feedback from brands who trust us with their social presence and workflow."
      />
      <TestimonialsSection />
      <CtaSection
        eyebrow="Join them"
        title="Ready to be our next success story?"
        description="Book a discovery call and let's talk about your brand's goals."
      />
    </>
  )
}
