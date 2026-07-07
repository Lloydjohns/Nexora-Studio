'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MessageSquareText,
  Phone,
  Sparkles,
  User,
  Video,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Service = {
  id: string
  name: string
  price: number
  duration: string
  description: string
  deliverables: string[]
}

const services: Service[] = [
  {
    id: 'social-growth',
    name: 'Social Growth Sprint',
    price: 300,
    duration: '30 min',
    description: 'Best for brands that want clearer content direction.',
    deliverables: ['Content audit', 'Channel priorities', 'Next-step action list'],
  },
  {
    id: 'brand-clarity',
    name: 'Brand Clarity Session',
    price: 500,
    duration: '45 min',
    description: 'A focused call for identity, messaging, and campaign angles.',
    deliverables: ['Brand positioning', 'Visual direction', 'Offer refinement'],
  },
  {
    id: 'website-roadmap',
    name: 'Website Roadmap Call',
    price: 800,
    duration: '60 min',
    description: 'For businesses planning a new website or digital launch.',
    deliverables: ['Page structure', 'Feature priorities', 'Launch timeline'],
  },
]

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
]

const goals = [
  'Increase brand awareness',
  'Improve lead generation',
  'Launch a new offer',
  'Refresh brand identity',
  'Build or improve a website',
]

const budgets = [
  'Under $1,000',
  '$1,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000+',
  'Not sure yet',
]

const timelines = [
  'As soon as possible',
  'Within 30 days',
  '1-3 months',
  '3+ months',
  'Just exploring',
]

const contactMethods = ['Video call', 'Phone call', 'Email first']

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15 placeholder:text-muted-foreground'

const today = new Date().toISOString().split('T')[0]

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<Service>(services[0])
  const [selectedTime, setSelectedTime] = useState('')
  const [date, setDate] = useState('')
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    timeline: '',
    contactMethod: contactMethods[0],
    notes: '',
  })

  const bookingComplete = Boolean(
    selectedService &&
      date &&
      selectedTime &&
      form.name.trim() &&
      form.email.trim() &&
      form.budget &&
      form.timeline,
  )

  const selectedGoalText = useMemo(
    () => selectedGoals.join(', ') || 'No goals selected yet',
    [selectedGoals],
  )

  function updateForm(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setSubmitted(false)
    setError('')
  }

  function toggleGoal(goal: string) {
    setSelectedGoals((current) =>
      current.includes(goal)
        ? current.filter((item) => item !== goal)
        : [...current, goal],
    )
    setSubmitted(false)
    setError('')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!bookingComplete) {
      setError('Please complete the required booking details before confirming.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <PageHeader
          eyebrow="Booking Confirmed"
          title="Your strategy call request is ready"
          description="Thanks for sharing the details. We will review your goals and send a calendar confirmation with the next steps."
        />

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">
              Booking request submitted
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
              We received your request for {selectedService.name} on{' '}
              {date || 'your selected date'} at {selectedTime}. A confirmation
              email will be sent to {form.email}.
            </p>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              <SummaryItem label="Service" value={selectedService.name} />
              <SummaryItem label="Preferred call" value={form.contactMethod} />
              <SummaryItem label="Budget" value={form.budget} />
              <SummaryItem label="Timeline" value={form.timeline} />
            </div>

            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              size="lg"
              className="mt-8 rounded-full"
            >
              Edit booking details
            </Button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Book A Strategy Call"
        title="Plan your next marketing move with a detailed discovery call"
        description="Choose the session that fits your goals, reserve a preferred time, and share the context we need to make the call productive from minute one."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form onSubmit={handleSubmit} className="space-y-10">
            <BookingSection
              icon={Sparkles}
              step="01"
              title="Choose your session"
              description="Each session includes focused recommendations and a follow-up action summary."
            >
              <div className="grid gap-4 md:grid-cols-3">
                {services.map((service) => {
                  const active = selectedService.id === service.id

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setSelectedService(service)
                        setSubmitted(false)
                        setError('')
                      }}
                      className={cn(
                        'flex min-h-[260px] flex-col rounded-2xl border bg-card p-5 text-left transition hover:border-primary/60 hover:shadow-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20',
                        active
                          ? 'border-primary ring-1 ring-primary'
                          : 'border-border',
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-primary">
                            {service.duration}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-foreground">
                            {service.name}
                          </h3>
                        </div>
                        <span
                          className={cn(
                            'flex size-7 shrink-0 items-center justify-center rounded-full border',
                            active
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border text-muted-foreground',
                          )}
                        >
                          {active && <CheckCircle2 className="size-4" />}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-auto pt-6 font-serif text-3xl font-semibold text-foreground">
                        ${service.price}
                      </p>
                    </button>
                  )
                })}
              </div>
            </BookingSection>

            <BookingSection
              icon={CalendarDays}
              step="02"
              title="Select date and time"
              description="Pick a preferred slot. We will confirm final availability by email."
            >
              <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
                <Field label="Preferred date" htmlFor="date" required>
                  <input
                    id="date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value)
                      setSubmitted(false)
                      setError('')
                    }}
                    className={inputClass}
                    required
                  />
                </Field>

                <div>
                  <div className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock3 className="size-4 text-primary" />
                    Preferred time
                    <span className="text-destructive">*</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time)
                          setSubmitted(false)
                          setError('')
                        }}
                        className={cn(
                          'h-11 rounded-xl border px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20',
                          selectedTime === time
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-card text-foreground hover:border-primary/60',
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </BookingSection>

            <BookingSection
              icon={BriefcaseBusiness}
              step="03"
              title="Share your project context"
              description="A little detail here helps us prepare sharper recommendations."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name" required>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    className={inputClass}
                    placeholder="Your full name"
                    required
                  />
                </Field>
                <Field label="Email address" htmlFor="email" required>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className={inputClass}
                    placeholder="you@brand.com"
                    required
                  />
                </Field>
                <Field label="Phone number" htmlFor="phone">
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    className={inputClass}
                    placeholder="+1 555 000 0000"
                  />
                </Field>
                <Field label="Company or brand" htmlFor="company">
                  <input
                    id="company"
                    value={form.company}
                    onChange={(e) => updateForm('company', e.target.value)}
                    className={inputClass}
                    placeholder="Your business name"
                  />
                </Field>
                <Field label="Website or social link" htmlFor="website">
                  <input
                    id="website"
                    value={form.website}
                    onChange={(e) => updateForm('website', e.target.value)}
                    className={inputClass}
                    placeholder="https://"
                  />
                </Field>
                <Field label="Preferred contact" htmlFor="contactMethod">
                  <select
                    id="contactMethod"
                    value={form.contactMethod}
                    onChange={(e) =>
                      updateForm('contactMethod', e.target.value)
                    }
                    className={inputClass}
                  >
                    {contactMethods.map((method) => (
                      <option key={method}>{method}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Estimated budget" htmlFor="budget" required>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => updateForm('budget', e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a range</option>
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Timeline" htmlFor="timeline" required>
                  <select
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => updateForm('timeline', e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline}>{timeline}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </BookingSection>

            <BookingSection
              icon={MessageSquareText}
              step="04"
              title="Define the call focus"
              description="Select the main goals and add anything else we should know."
            >
              <div className="flex flex-wrap gap-2">
                {goals.map((goal) => {
                  const active = selectedGoals.includes(goal)

                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={cn(
                        'rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20',
                        active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-foreground hover:border-primary/60',
                      )}
                    >
                      {goal}
                    </button>
                  )
                })}
              </div>

              <div className="mt-5">
                <Field label="Notes for the call" htmlFor="notes">
                  <textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) => updateForm('notes', e.target.value)}
                    rows={5}
                    className={cn(inputClass, 'resize-none')}
                    placeholder="Tell us what is working, what feels stuck, and what you want to walk away with."
                  />
                </Field>
              </div>
            </BookingSection>

            {error && (
              <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm font-medium text-destructive">
                {error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-full text-base"
            >
              Confirm booking request
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Live Summary
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                Booking details
              </h2>

              <div className="mt-6 space-y-4">
                <SummaryItem
                  icon={Sparkles}
                  label="Service"
                  value={selectedService.name}
                />
                <SummaryItem
                  icon={CalendarDays}
                  label="Date"
                  value={date || 'Select a date'}
                />
                <SummaryItem
                  icon={Clock3}
                  label="Time"
                  value={selectedTime || 'Select a time'}
                />
                <SummaryItem
                  icon={Video}
                  label="Contact"
                  value={form.contactMethod}
                />
                <SummaryItem
                  icon={User}
                  label="Client"
                  value={form.name || 'Your name'}
                />
                <SummaryItem
                  icon={Mail}
                  label="Email"
                  value={form.email || 'Email address'}
                />
                {form.phone && (
                  <SummaryItem icon={Phone} label="Phone" value={form.phone} />
                )}
                <SummaryItem
                  icon={FileText}
                  label="Goals"
                  value={selectedGoalText}
                />
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">
                    Session fee
                  </span>
                  <span className="font-serif text-3xl font-semibold text-foreground">
                    ${selectedService.price}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Final scope, payment terms, and calendar invite are confirmed
                  after we review your request.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function BookingSection({
  icon: Icon,
  step,
  title,
  description,
  children,
}: {
  icon: React.ElementType
  step: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Step {step}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      {children}
    </div>
  )
}

function SummaryItem({
  icon: Icon,
  label,
  value,
}: {
  icon?: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
      {Icon && (
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-background text-primary">
          <Icon className="size-4" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  )
}
