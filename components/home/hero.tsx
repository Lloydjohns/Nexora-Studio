import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-8 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Social Media Management + Digital Products
          </p>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We help your brand stay visible—and help you work smarter.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Digital Agency Company is a small, focused digital agency. We manage social
            media for growing brands and create digital products that save
            creators and business owners time. One studio, two ways to grow.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            
            <Button size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/contact" className="flex items-center gap-2">
                Book a Discovery Call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/services">
                View Services
              </Link>
            </Button>

            <Button variant="ghost" size="lg" className="w-full rounded-full px-6 sm:w-auto">
              <Link href="/products" className="flex items-center gap-2">
                <ShoppingBag className="size-4" />
                Shop Digital Products
              </Link>
            </Button>

          </div>

          {/* STATS */}
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: '3', label: 'Person focused team' },
              { value: '2', label: 'Complementary offers' },
              { value: '100%', label: 'Process-driven delivery' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-muted sm:aspect-5/4 lg:aspect-4/5">
            <Image
              src="/images/hero-workspace.png"
              alt="A modern creative studio desk with a laptop showing a content calendar, a phone with a social media grid, and notebooks"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 hidden max-w-55 rounded-2xl border border-border bg-card p-4 shadow-sm sm:block">
            <p className="text-sm font-semibold text-foreground">
              Consistent. Transparent.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Clear systems for onboarding, reporting, and delivery—every month.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}