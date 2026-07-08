import type { Metadata } from 'next'
import { Mail, MapPin, CalendarCheck } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Nexora Studio',
  description:
    'Get in touch to book a discovery call, inquire about social media management, or ask about our digital products.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Whether you're ready to book a discovery call or just have a question, we'd love to hear from you. Fill out the form and we'll get back to you shortly."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Reach us directly
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Prefer email or want to know more first? Here&apos;s how to find
              us.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Location
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CalendarCheck className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Book a discovery call
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Free, 30-minute, no-pressure. Just select it in the form.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground">
                Follow along
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
