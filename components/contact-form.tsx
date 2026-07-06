'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  'Social Media Management',
  'Digital Products',
  'Custom project',
  'Just saying hi',
]

const budgets = ['₱5,000/mo', '₱10,000/mo', '₱18,000/mo', 'Not sure yet']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Thank you—message received!
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          We&apos;ll get back to you within 1–2 business days to set up your
          discovery call. Talk soon!
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          size="lg"
          className="mt-6 rounded-full"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            required
            className="input"
            placeholder="Juan"
          />
        </Field>
        <Field label="Last name" htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            required
            className="input"
            placeholder="Dela Cruz"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            placeholder="you@brand.com"
          />
        </Field>
        <Field label="Business / brand" htmlFor="brand">
          <input
            id="brand"
            name="brand"
            className="input"
            placeholder="Your brand name"
          />
        </Field>
        <Field label="I'm interested in" htmlFor="service">
          <select id="service" name="service" className="input" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Monthly budget" htmlFor="budget">
          <select id="budget" name="budget" className="input" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us about your goals" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="input resize-none"
            placeholder="Share a bit about your brand, where you are today, and what you're hoping to achieve."
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
        Send inquiry
        <Send className="size-4" />
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within 1–2 business days. No spam, ever.
      </p>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s ease;
        }
        :global(.input:focus) {
          border-color: var(--primary);
        }
        :global(.input::placeholder) {
          color: var(--muted-foreground);
        }
      `}</style>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
