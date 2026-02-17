import { Button } from "@/components/ui/button";

export default function BrandingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
          Branding and Designing
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Branding that looks premium, feels coherent, and sells.
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Vision9 builds brands that stand out across every touchpoint. From
          identity systems to on-ground collaterals, we ensure your brand is
          unmistakable and easy to recognize whether it&apos;s online, on print,
          or on-site.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Brand Identity and Visual Language
          </h2>
          <p className="text-sm text-neutral-700">
            We craft a visual and verbal identity that reflects your
            positioning, values, and audience expectations so that every asset
            looks like it belongs to the same brand.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Logo and mark systems with usage guidelines</li>
            <li>Color palettes, typography, iconography, and graphic styles</li>
            <li>Brand voice, messaging pillars, and tagline exploration</li>
            <li>Brand books and quick-reference identity playbooks</li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Digital and Social Design Systems
          </h2>
          <p className="text-sm text-neutral-700">
            We design reusable systems for your social media and digital
            presence so that content can be produced quickly without losing
            quality or consistency.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Post, story, and reel cover templates across platforms</li>
            <li>Ad creative frameworks for performance campaigns</li>
            <li>Landing page and website layout guidelines</li>
            <li>Design libraries for internal and external teams</li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Print, Events, and On-Ground Presence
          </h2>
          <p className="text-sm text-neutral-700">
            We translate your brand onto physical media that people see, touch,
            and remember, ensuring the same standard of quality as your digital
            presence.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Banners, standees, posters, and in-store branding</li>
            <li>Brochures, pamphlets, kits, and sales presentation design</li>
            <li>Outdoor and event branding for launches and activations</li>
            <li>Coordination support for printing and fabrication vendors</li>
          </ul>
        </article>

        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Consistency and Governance
          </h2>
          <p className="text-sm text-neutral-700">
            Strong brands are consistent brands. We put systems in place that
            make it easy for teams and partners to use the brand correctly.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Brand guideline handbooks and training for internal teams</li>
            <li>Asset management and naming standards for all creatives</li>
            <li>
              Review processes for campaigns, partnerships, and new touchpoints
            </li>
            <li>Quarterly brand audits and refresh recommendations</li>
          </ul>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-6 py-5">
        <div className="max-w-xl space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-700">
            Branding Discovery
          </p>
          <p className="text-sm text-neutral-800 sm:text-base">
            Need to refresh your brand or build from scratch? Share your current
            assets and we&apos;ll propose a branding roadmap and scope.
          </p>
        </div>
        {/* <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-400">
          Explore Branding with Vision9
        </Button> */}
      </div>
    </section>
  );
}

