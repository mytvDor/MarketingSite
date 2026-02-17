import { Button } from "@/components/ui/button";

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
          Case Studies
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Proven strategies that turned attention into measurable business
          outcomes.
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Here are a few snapshots of how Vision9 has helped brands across
          industries strengthen their presence, improve reach, and generate
          profitable growth.
        </p>
      </header>

      <div className="mt-10 space-y-6">
        <article className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Healthcare Brand – Full Funnel Lead Engine
              </h2>
              <p className="text-xs text-neutral-600">
                Multi-city healthcare provider looking to increase high-intent
                consultations.
              </p>
            </div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              3x qualified leads
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Challenge
              </p>
              <p className="text-sm text-neutral-700">
                High website traffic but low conversion, scattered campaigns,
                and unclear tracking of consultation bookings.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Approach
              </p>
              <p className="text-sm text-neutral-700">
                Rebuilt Meta and Google campaigns, designed dedicated landing
                pages, added tracking, and introduced intent-based creatives and
                UGC.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Outcome
              </p>
              <p className="text-sm text-neutral-700">
                3x increase in qualified leads and lower cost-per-consultation
                while maintaining lead quality.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Real Estate Client – Demand Generation at Scale
              </h2>
              <p className="text-xs text-neutral-600">
                Residential real estate brand launching projects in multiple
                micro-markets.
              </p>
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
              Lower CPL, higher site visits
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Challenge
              </p>
              <p className="text-sm text-neutral-700">
                Lead volumes were inconsistent, and sales teams struggled with
                irrelevant or low-intent inquiries.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Approach
              </p>
              <p className="text-sm text-neutral-700">
                Created localized creatives, high-intent lead forms, and
                campaign structures tailored by city, budget, and project stage.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Outcome
              </p>
              <p className="text-sm text-neutral-700">
                Higher quality leads, improved site visit rates, and a lowering
                trend in cost per booking.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Education Brand – Always-On Admissions Pipeline
              </h2>
              <p className="text-xs text-neutral-600">
                Institution targeting specific courses and geographies with
                limited internal marketing bandwidth.
              </p>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Stable monthly enquiries
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Challenge
              </p>
              <p className="text-sm text-neutral-700">
                Season-driven marketing with no consistent always-on campaigns
                led to unpredictable admission pipelines.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Approach
              </p>
              <p className="text-sm text-neutral-700">
                Built category and course-specific funnels, with content and
                campaigns aligned to student decision stages and parent
                concerns.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Outcome
              </p>
              <p className="text-sm text-neutral-700">
                Steady enquiries across the year and stronger visibility in key
                regions even outside peak season.
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-5">
        <div className="max-w-xl space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-700">
            Explore Your Playbook
          </p>
          <p className="text-sm text-neutral-800 sm:text-base">
            Want to see what a similar playbook could look like for your brand?
            Share your current metrics and goals, and we&apos;ll walk you
            through a tailored approach.
          </p>
        </div>
        {/* <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-400">
          Discuss Your Case Study
        </Button> */}
      </div>
    </section>
  );
}
