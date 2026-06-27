import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Target,
  Sparkles,
  Share2,
  ShieldCheck,
  Gift,
  LayoutGrid,
  Cpu,
  Plus,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroPreview from "@/assets/hero-preview.jpg";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brio — Your achievements deserve a better home" },
      {
        name: "description",
        content:
          "Capture your wins, generate polished LinkedIn content with AI, and build a professional profile that opens doors.",
      },
      { property: "og:title", content: "Brio — Your achievements deserve a better home" },
      {
        property: "og:description",
        content:
          "Capture your wins, generate polished LinkedIn content with AI, and build a professional profile that opens doors.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Target,
    title: "Capture Your Wins",
    body: "Add projects, competitions, internships, and every achievement that matters. Organize by category and track your growth.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Polish",
    body: "Generate professional LinkedIn bullet points, headlines, and about sections. Your API key, your data, your control.",
  },
  {
    icon: Share2,
    title: "Export Anywhere",
    body: "Copy to LinkedIn, download as JSON, or export as PDF. Your profile, your way.",
  },
];

const steps = [
  {
    title: "Create an account",
    body: "Sign up with your email. Complete a quick onboarding to personalize your experience.",
  },
  {
    title: "Add your achievements",
    body: "Capture the raw facts about your wins. What did you do? What was the impact? Brio handles the polish.",
  },
  {
    title: "Generate AI content",
    body: "Use your own API key to generate professional bullet points, headlines, and about sections powered by Groq.",
  },
  {
    title: "Export and share",
    body: "Preview your profile, copy to LinkedIn, download as JSON, or export as PDF. Your profile is ready.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Privacy First",
    body: "Your data stays yours. Use your own API key. No tracking, no selling.",
  },
  {
    icon: Gift,
    title: "Always Free",
    body: "JSON export is always free. No paywalls, no surprises.",
  },
  {
    icon: LayoutGrid,
    title: "Minimal Design",
    body: "Clean, focused interface. No distractions, no clutter.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    body: "Generate professional content in seconds. Grounded in your input.",
  },
];

const faqs = [
  {
    q: "Do I need to pay to use Brio?",
    a: "No. Capturing achievements and exporting your profile as JSON is always free. There are no paywalls or surprise charges.",
  },
  {
    q: "Whose AI API key does Brio use?",
    a: "Yours. Brio runs AI generation through your own API key, so your data stays under your control and is never sold or shared.",
  },
  {
    q: "Who is Brio built for?",
    a: "Students and early-career professionals who want to showcase their achievements clearly, without the noise of bloated tools.",
  },
  {
    q: "How do I get my content onto LinkedIn?",
    a: "Generate polished bullet points and sections, preview your profile, then copy straight to LinkedIn or export as JSON or PDF.",
  },
];

function Home() {
  const containerRef = useReveal<HTMLDivElement>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-[60px] bg-background/80 backdrop-blur-md transition-colors duration-200 ${
          scrolled ? "border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-4 md:px-8 lg:px-12">
          <span className="font-display text-3xl leading-none tracking-tight">Brio</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => scrollTo("cta")}
              className="px-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              Sign in
            </button>
            <button
              onClick={() => scrollTo("cta")}
              className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="px-4 pb-24 pt-32 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="kicker">Built for builders, not bragging</span>
              <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Your achievements deserve a&nbsp;better&nbsp;home
              </h1>
              <p className="measure mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Capture your wins. Generate polished LinkedIn content with AI. Build a professional
                profile that opens doors.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("cta")}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
                >
                  Start building
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
                <button
                  onClick={() => scrollTo("features")}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border-[1.5px] border-border bg-transparent px-7 py-3.5 text-base font-bold text-foreground transition-colors duration-200 hover:border-foreground"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="reveal mt-16 overflow-hidden rounded-xl border border-border shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
              <img
                src={heroPreview}
                alt="Brio dashboard showing tracked achievements and AI-generated LinkedIn bullet points"
                width={1280}
                height={960}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <p className="reveal mb-8 text-center text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
              Trusted by students at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Stanford", "MIT", "Oxford", "NUS", "ETH Zürich"].map((name) => (
                <span
                  key={name}
                  className="reveal font-display text-2xl text-foreground opacity-50 grayscale transition-all duration-200 hover:opacity-80"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-16 max-w-[640px]">
              <span className="kicker reveal">Everything you need to stand out</span>
              <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-5xl">
                One elegant home for your professional story
              </h2>
              <p className="measure reveal mt-4 text-lg text-muted-foreground">
                Brio brings together achievement tracking, AI-powered content generation, and
                professional profile building in one place.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="reveal rounded-[10px] border border-border bg-secondary p-7"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 mb-2 font-display text-2xl tracking-tight">{title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-16 max-w-[640px]">
              <span className="kicker reveal">From raw wins to a ready profile</span>
              <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-5xl">
                How Brio works
              </h2>
            </div>

            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="reveal flex items-start gap-6"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-2xl tracking-tight">{step.title}</h3>
                    <p className="measure text-base leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Brio */}
        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-16 max-w-[640px]">
              <span className="kicker reveal">Made with intention</span>
              <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Why Brio
              </h2>
              <p className="measure reveal mt-4 text-lg text-muted-foreground">
                Built for students and early-career professionals who want to showcase their
                achievements without the noise.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="reveal rounded-[10px] border border-border bg-secondary p-7"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 mb-2 font-display text-xl tracking-tight">{title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-12 max-w-[560px]">
              <span className="kicker reveal">Answers before you ask</span>
              <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="reveal">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="reveal rounded-2xl bg-primary px-6 py-20 text-center text-primary-foreground md:px-12">
              <h2 className="mx-auto max-w-[640px] font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Start building a profile that opens doors
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-lg leading-relaxed text-primary-foreground/70">
                Capture your wins today. Your first export is always free.
              </p>
              <button
                onClick={() => scrollTo("cta")}
                className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground transition-colors duration-200 hover:bg-accent/90"
              >
                Get started free
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 border-border md:flex-row">
          <span className="font-display text-2xl tracking-tight">Brio</span>
          <p className="text-sm text-muted-foreground">
            © 2026 Brio. Built for students. Powered by AI.
          </p>
          <nav className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <button
                key={link}
                className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[48px] w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-foreground">{question}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        ref={panelRef}
        aria-hidden={!open}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: open ? `${panelRef.current?.scrollHeight ?? 240}px` : "0px" }}
      >
        <p className="measure pb-5 text-base leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}
