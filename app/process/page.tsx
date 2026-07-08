import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ProcessSection } from '@/components/sections/process-section'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'How It Works | Nexora Studio',
  description:
    'Our step-by-step process—from inquiry and discovery call to onboarding, content planning, and monthly reporting.',
}

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A process that makes working with us easy"
        description="We're process-driven, with clear systems for onboarding, delivery, and reporting. Here's exactly what happens when you partner with Nexora Studio."
      />
      <ProcessSection showHeading={false} />
      <CtaSection />
    </>
  )
}
