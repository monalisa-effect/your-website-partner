import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Timer,
  Wallet,
  Wrench,
  Settings,
  Cog,
  Truck,
  PackageSearch,
  FileText,
  Menu,
  X,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingForm } from "@/components/site/BookingForm";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "@/components/site/contact";
import heroImage from "@/assets/hero-generator.jpg";
import partsImage from "@/assets/spare-parts.jpg";
import technicianImage from "@/assets/technician.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Generator Sales, Repairs & Spare Parts in Lagos | Power Point Technical",
      },
      {
        name: "description",
        content:
          "Power Point Technical Services: generator sales, installation, maintenance, repairs and genuine spare parts for CAT, Perkins, Cummins, FG Wilson and Mikano across Nigeria.",
      },
      {
        property: "og:title",
        content: "Generator Sales, Repairs & Spare Parts in Lagos | Power Point Technical",
      },
      {
        property: "og:description",
        content:
          "Book a generator service, request a quote or order genuine spare parts. Nationwide service from our Lagos base.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Spare Parts", href: "#parts" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Truck,
    title: "Generator Sales",
    body: "New and quality used generator sets sized correctly for your load.",
  },
  {
    icon: Settings,
    title: "Installation",
    body: "Professional installation, cabling, changeover panels and commissioning.",
  },
  {
    icon: Cog,
    title: "Maintenance",
    body: "Scheduled servicing contracts that keep downtime close to zero.",
  },
  {
    icon: Wrench,
    title: "Repairs",
    body: "Expert fault diagnosis and repair for all generator brands.",
  },
  {
    icon: PackageSearch,
    title: "Spare Parts",
    body: "Genuine filters, alternators, injectors, AVRs, belts and controllers.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment",
    body: "Sales, servicing and general contracts for forklifts and excavators.",
  },
];

const WHY = [
  { icon: Users, title: "Expert Technicians", body: "Certified professionals with years on the tools." },
  { icon: ShieldCheck, title: "Genuine Parts", body: "100% original components, never grey-market copies." },
  { icon: Timer, title: "Fast Response", body: "Rapid callout and efficient turnaround times." },
  { icon: MapPin, title: "Nationwide Service", body: "We serve clients across all states in Nigeria." },
  { icon: Wallet, title: "Affordable Pricing", body: "Competitive, transparent quotes with no surprises." },
];

const BRANDS = ["Cummins", "Perkins", "CAT", "FG Wilson", "Mikano", "& More Brands"];

const TESTIMONIALS = [
  {
    quote:
      "Power Point Technical Services has been exceptional in maintaining our generator fleet. Their response time and genuine parts are top notch.",
    name: "Emeka N.",
    role: "Facilities Manager",
  },
  {
    quote: "Professional team, timely installation and excellent after-sales service. Highly recommended!",
    name: "Chinedu A.",
    role: "Operations Manager",
  },
  {
    quote:
      "They supplied original parts at a very competitive price and our generator is running smoothly again.",
    name: "Bolarinwa T.",
    role: "Business Owner",
  },
];

const FAQS = [
  {
    q: "How often should a diesel generator be serviced?",
    a: "Most sets need routine servicing every 250 running hours or every three months, whichever comes first. We set the schedule to your actual runtime and remind you before it is due.",
  },
  {
    q: "Do you cover locations outside Lagos?",
    a: "Yes. Our base is on Oshodi Apapa Expressway in Lagos, and our teams travel to sites across Nigeria for installation, maintenance and emergency repairs.",
  },
  {
    q: "Are your spare parts original?",
    a: "We supply 100% genuine parts for CAT, Perkins, Cummins, FG Wilson, Mikano and other major brands, with sourcing details available on request.",
  },
  {
    q: "How quickly can you respond to a breakdown?",
    a: "Call or WhatsApp us during working hours and we will confirm a technician slot the same day wherever our schedule allows.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const waHref = whatsappLink("Hello Power Point Technical Services, I need help with my generator.");

  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="hidden bg-primary-deep text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-accent">
              <Phone className="size-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent">
              <Mail className="size-3.5" /> {EMAIL}
            </a>
          </div>
          <span className="flex items-center gap-2 opacity-90">
            <Clock className="size-3.5" /> {HOURS}
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Cog className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight text-primary">
                POWER POINT
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-secondary">
                Technical Services
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="hidden sm:inline-flex">
              <a href="#booking">Request a Quote</a>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden" aria-label="Mobile">
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm font-semibold uppercase tracking-wide text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-deep">
          <img
            src={heroImage}
            alt="Yellow industrial diesel generator inside a Lagos warehouse"
            width={1600}
            height={1100}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="max-w-2xl text-primary-foreground">
              <p className="eyebrow">Powering your world</p>
              <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Reliable Generator &amp; Heavy Equipment Solutions in Nigeria
              </h1>
              <p className="mt-5 max-w-xl text-base opacity-85">
                Sales, installation, maintenance and supply of genuine spare parts for all generator
                brands and heavy duty equipment.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  { icon: ShieldCheck, t: "Genuine Parts", s: "100% Original" },
                  { icon: Users, t: "Expert Technicians", s: "Experienced Team" },
                  { icon: Timer, t: "Fast Response", s: "Nationwide Service" },
                ].map(({ icon: Icon, t, s }) => (
                  <li key={t} className="flex items-center gap-3">
                    <Icon className="size-6 text-accent" />
                    <span className="text-sm leading-tight">
                      <span className="block font-semibold">{t}</span>
                      <span className="block opacity-75">{s}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone className="size-4" /> Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
                >
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 bg-background text-foreground hover:bg-surface">
                  <a href="#booking">
                    <FileText className="size-4" /> Request a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Our Services</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="group rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
                >
                  <Icon className="size-8 text-secondary" />
                  <h3 className="mt-4 text-lg text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="gap-2">
                <a href="#booking">
                  Book a Service <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="bg-primary-deep py-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="eyebrow">Why choose us</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Your Trusted Technical Partner</h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {WHY.map(({ icon: Icon, title, body }) => (
                <div key={title} className="text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-secondary/60 text-secondary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-base">{title}</h3>
                  <p className="mt-2 text-sm opacity-75">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="eyebrow">Brands we service</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">We Work With Top Brands</h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {BRANDS.map((brand) => (
                <div
                  key={brand}
                  className="flex h-20 items-center justify-center rounded-md border border-border bg-card px-4 font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-tight text-primary"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parts + technician */}
        <section id="parts" className="bg-surface py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Genuine spare parts</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">
                Original Parts, Sourced Fast and Fitted Right
              </h2>
              <p className="mt-4 text-muted-foreground">
                From filters and alternators to turbochargers, injectors, AVRs, control panels and
                batteries — we stock and source original components for every major generator brand.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Oil, fuel & air filters",
                  "Alternators & starters",
                  "Turbochargers & injectors",
                  "Gaskets, belts & hoses",
                  "Control panels & AVRs",
                  "Batteries & lubricants",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="secondary" className="mt-8 gap-2">
                <a
                  href={whatsappLink("Hello, I would like a quote for generator spare parts.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" /> Request Parts Quote
                </a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={partsImage}
                alt="Genuine generator spare parts including filters, hoses and gaskets"
                loading="lazy"
                width={1200}
                height={800}
                className="h-64 w-full rounded-lg object-cover shadow-[var(--shadow-card)] sm:h-full"
              />
              <img
                src={technicianImage}
                alt="Power Point technician servicing a generator in the workshop"
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full rounded-lg object-cover shadow-[var(--shadow-card)] sm:h-full"
              />
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow">Booking</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Schedule a Technician or Get a Quote</h2>
              <p className="mt-4 text-muted-foreground">
                Tell us what you need and when. We confirm your slot, arrive prepared with the right
                parts, and give you a clear price before work begins.
              </p>
              <ol className="mt-8 space-y-5">
                {[
                  { t: "Send your request", s: "Fill the form — it takes under a minute." },
                  { t: "We confirm the slot", s: "A technician calls or messages you back." },
                  { t: "Job done, guaranteed", s: "Original parts, tested and documented." },
                ].map((step, i) => (
                  <li key={step.t} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-[family-name:var(--font-display)] text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-foreground">{step.t}</span>
                      <span className="block text-sm text-muted-foreground">{step.s}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="eyebrow">What our clients say</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Trusted by Our Clients</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <Quote className="size-6 text-secondary" />
                  <blockquote className="mt-3 text-sm text-muted-foreground">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="block font-semibold text-foreground">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="eyebrow">Questions</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Generator Service FAQs</h2>
            </div>
            <Accordion type="single" collapsible className="mt-10">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary-deep py-20 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-primary-foreground/15">
              <iframe
                title="Power Point Technical Services location on the map"
                src="https://www.google.com/maps?q=186%20Oshodi%20Apapa%20Expressway%20Lagos&output=embed"
                loading="lazy"
                className="h-80 w-full lg:h-full"
              />
            </div>
            <div>
              <p className="eyebrow">Visit our office</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">We Are Here to Help You</h2>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-secondary" /> {ADDRESS}
                </li>
                <li className="flex gap-3">
                  <Phone className="size-5 shrink-0 text-secondary" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-5 shrink-0 text-secondary" />
                  <a href={`mailto:${EMAIL}`} className="hover:underline">
                    {EMAIL}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-5 shrink-0 text-secondary" /> {HOURS}
                </li>
              </ul>
              <Button asChild variant="secondary" size="lg" className="mt-8 gap-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=186+Oshodi+Apapa+Expressway+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-secondary py-8 text-secondary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-xl">Need immediate assistance?</h2>
              <p className="text-sm opacity-90">Call or WhatsApp us now for fast support.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="outline" className="gap-2 bg-background text-foreground hover:bg-surface">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="size-4" /> {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold">
              POWER POINT TECHNICAL SERVICES
            </span>
            <p className="mt-3 text-sm opacity-75">
              Your reliable partner for generator solutions, spare parts and heavy equipment services
              in Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {SERVICES.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>{ADDRESS}</li>
              <li>{PHONE_DISPLAY}</li>
              <li>{EMAIL}</li>
              <li>{HOURS}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/15 px-6 pt-6 text-xs opacity-70">
          © {new Date().getFullYear()} Power Point Technical Services. All Rights Reserved.
        </div>
      </footer>

      {/* Floating actions */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Call Power Point Technical Services"
          className="flex size-13 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="size-6" />
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex size-13 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
    </div>
  );
}
