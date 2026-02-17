import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Ready to partner with a performance-first marketing team?
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Share a few details about your brand, your goals, and where you are
          right now. We&apos;ll review and come back with a clear starting point
          and next steps.
        </p>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr,1.1fr]">
        {/* <form className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-800">
                Name
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-800">
                Company / Brand
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                placeholder="Brand name"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-800">
                Email
              </label>
              <input
                type="email"
                className="h-9 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-800">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                className="h-9 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                placeholder="+91-xxxx-xxxxxx"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-800">
              What do you want to focus on?
            </label>
            <select className="h-9 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100">
              <option>Lead generation and performance marketing</option>
              <option>Branding and social media</option>
              <option>Video / UGC content</option>
              <option>Full-funnel marketing partnership</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-neutral-800">
              Tell us about your current situation
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              placeholder="Where are you today? What are your key goals for the next 3–6 months?"
            />
          </div>

         <Button className="w-full bg-yellow-500 text-neutral-900 hover:bg-yellow-400">
            Submit enquiry
          </Button> 
        </form> */}

        <aside className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-800">
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              What happens after you submit?
            </h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs text-neutral-700">
              <li>We review your details and any existing assets you share.</li>
              <li>
                We schedule a discovery call to understand your brand deeply.
              </li>
              <li>We propose a tailored roadmap, scope, and timeline.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              Typical brands we work with
            </h2>
            <p className="mt-2 text-xs text-neutral-700">
              Healthcare, education, real estate, FMCG, hospitality, service
              brands, and more that are ready to invest in structured,
              performance-led marketing.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

