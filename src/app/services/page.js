import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
          Services
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Performance marketing and brand systems designed to move your numbers.
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Vision9 combines media buying, creative strategy, and funnel design to
          build predictable, scalable marketing systems. Every service is
          aligned to the same outcome: more qualified leads, more sales, and
          better ROI.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Lead Generation and Performance Marketing
          </h2>
          <p className="text-sm text-neutral-700">
            We design and manage full-funnel campaigns across Meta and Google
            tailored to your ideal customer profile. From audience mapping to
            offer strategy and landing pages, every step is built to convert
            intent into action.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>
              Meta and Google Ads strategy, campaign structure, and optimization
            </li>
            <li>
              Lead magnets, landing pages, and form flows optimized for
              conversions
            </li>
            <li>
              End-to-end tracking with UTM, pixels, and analytics dashboards
            </li>
            <li>
              Weekly performance reviews with clear actions and iteration plans
            </li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Branding and Social Media Marketing
          </h2>
          <p className="text-sm text-neutral-700">
            We create or refine your brand&apos;s positioning, messaging, and
            visual identity, then express it through consistent, high-quality
            social media content that nurtures trust and recall.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Brand positioning, narrative, and communication guidelines</li>
            <li>
              Content calendars and creative direction for social channels
            </li>
            <li>
              Design systems for posts, stories, carousels, and ad creatives
            </li>
            <li>Community building and engagement-focused content formats</li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Video, Reels, and UGC Content
          </h2>
          <p className="text-sm text-neutral-700">
            We work with in-house creators and a curated influencer network to
            produce content that looks native to the platform but is engineered
            to convert, not just entertain.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>
              Short-form video strategy for Instagram, Facebook, and YouTube
            </li>
            <li>
              Scriptwriting, storyboarding, and shot planning for campaigns
            </li>
            <li>UGC-style ads featuring real customers and creators</li>
            <li>
              Iterative testing of hooks, formats, offers, and calls-to-action
            </li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Funnels, Automation, and Retention
          </h2>
          <p className="text-sm text-neutral-700">
            We connect your campaigns to CRM, marketing automation, and sales
            workflows so that every lead is tracked, nurtured, and followed up
            systematically.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Landing pages integrated with CRM and marketing automation</li>
            <li>Email, WhatsApp, and SMS workflows for lead nurturing</li>
            <li>Lead qualification frameworks and handover to sales teams</li>
            <li>
              Reporting focused on pipeline, not just clicks and impressions
            </li>
          </ul>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-5">
        <div className="max-w-xl space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-700">
            Next Step
          </p>
          <p className="text-sm text-neutral-800 sm:text-base">
            Share your current marketing funnels and goals, and we&apos;ll map a
            performance roadmap tailored to your brand.
          </p>
        </div>
        {/* <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-400">
          Book a Strategy Call
        </Button> */}
      </div>
    </section>
  );
}
