export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
          About Vision9
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          A strategic marketing partner focused on clarity, consistency, and growth.
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Vision9 is built for brands that want more than vanity metrics. We combine performance marketing, strategic
          branding, and content that sells to create marketing systems that move real business numbers.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr,1.1fr]">
        <article className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            How we work with brands
          </h2>
          <p className="text-sm text-neutral-700">
            We do not operate like a disconnected vendor. Vision9 plugs into your team as an extended marketing
            partner. We understand your business model, sales cycles, and customer journeys before suggesting channels
            or creatives.
          </p>
          <p className="text-sm text-neutral-700">
            Our process blends strategy, execution, and optimization. We align on goals, design the right funnel, build
            the assets required, and then keep testing and refining until the system is stable and scalable.
          </p>
          <p className="text-sm text-neutral-700">
            This approach makes it easy for founders, marketing leaders, and sales teams to stay on the same page,
            because every action is linked back to measurable outcomes.
          </p>
        </article>

        <aside className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Vision9 in numbers
          </h2>
          <dl className="grid gap-3 text-sm text-neutral-800 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-neutral-500">Views generated</dt>
              <dd className="text-base font-semibold text-neutral-900">
                500+ Million
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Brands partnered</dt>
              <dd className="text-base font-semibold text-neutral-900">
                28+ Brands
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Pages and profiles managed</dt>
              <dd className="text-base font-semibold text-neutral-900">
                20,000+ Pages Reach
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Creators and influencers</dt>
              <dd className="text-base font-semibold text-neutral-900">
                1,000+ Influencers
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Campaigns executed</dt>
              <dd className="text-base font-semibold text-neutral-900">
                350+ Campaigns
              </dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Active clients</dt>
              <dd className="text-base font-semibold text-neutral-900">
                30+ Active Clients
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Strategy-first approach
          </h2>
          <p className="text-sm text-neutral-700">
            Every engagement starts with discovery. We study your market, positioning, existing funnels, and unit
            economics before recommending performance plans.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Integrated execution
          </h2>
          <p className="text-sm text-neutral-700">
            Our team spans media, design, content, and tech. This means your campaigns, creatives, and landing pages are
            aligned instead of built in silos.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Transparent reporting
          </h2>
          <p className="text-sm text-neutral-700">
            We track what matters: lead quality, sales, and ROI. Reports are built to help you and your team make faster
            decisions, not just read numbers.
          </p>
        </article>
      </section>
    </section>
  )
}

