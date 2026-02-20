import {
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Newspaper,
  Rocket,
  Target,
  Users,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.6fr,1.2fr] lg:items-center">
        <div className="space-y-8 animate-fade-up">
          <Badge className="gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-glow" />
            <span>Performance Marketing Studio</span>
          </Badge>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Everyone Is Making Content.
              <span className="block text-yellow-600">We Make It Viral.</span>
            </h1>
            <p className="max-w-xl text-balance text-base text-neutral-600 sm:text-lg">
              At Vision9, we drive measurable sales and leads through
              performance marketing, strategic branding, and high-impact UGC
              content.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/* <Button
              size="lg"
              className="bg-yellow-500 text-neutral-900 shadow-md shadow-yellow-200 hover:bg-yellow-400"
            >
              Book a Strategy Call
            </Button> */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
            >
              Connect on WhatsApp
            </Button> */}
          </div>
          <div className="grid gap-4 text-sm text-neutral-700 sm:grid-cols-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                What We Do
              </p>
              <p>
                Lead generation and revenue-focused performance campaigns across
                Meta and Google.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                How We Create
              </p>
              <p>
                High-impact UGC, reels, and video content crafted to convert
                viewers into customers.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                How We Partner
              </p>
              <p>
                End-to-end marketing ownership from strategy to execution and
                scaling.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-yellow-200/80 via-yellow-100 to-yellow-50 blur-3xl animate-glow" />
          <Card className="relative grid overflow-hidden sm:grid-cols-[1.1fr,1.1fr]">
            <div className="relative h-52 w-full overflow-hidden sm:h-64">
              <img
                src="/hero.avif"
                alt="Vision9 team planning campaigns and content"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 shadow">
                High-impact UGC and performance creatives
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 p-4 sm:p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Campaign Snapshot
                </CardTitle>
                <CardDescription className="mt-2 text-3xl font-semibold text-yellow-700">
                  94% Success Rate
                </CardDescription>
                <p className="mt-1 text-xs text-neutral-500">
                  Across campaigns and client engagements
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-5 p-0 text-xs text-neutral-700">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-50 text-yellow-800">
                      <Target className="h-4 w-4" />
                    </div>
                    <Badge
                      variant="subtle"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      Performance First
                    </Badge>
                  </div>
                  <div className="text-right text-[0.7rem] leading-tight text-neutral-600">
                    <p>30+ active clients</p>
                    <p>350+ campaigns</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 sm:items-stretch">
                  <div className="flex h-full flex-col justify-between space-y-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                    <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      <BarChart3 className="h-3 w-3 text-yellow-500" />
                      <span>Reach Generated</span>
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-900">
                      500+ Million
                    </p>
                    <p className="text-[0.7rem] text-neutral-600">
                      Views across digital platforms
                    </p>
                  </div>
                  <div className="flex h-full flex-col justify-between space-y-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                    <p className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      <Users className="h-3 w-3 text-yellow-500" />
                      <span>Creator Network</span>
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-900">
                      1,000+ Influencers
                    </p>
                    <p className="text-[0.7rem] text-neutral-600">
                      Pan-India creators and influencers
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 sm:items-stretch">
                  <div className="flex h-full flex-col justify-between space-y-1 rounded-2xl border border-neutral-200 bg-white p-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <Building2 className="h-4 w-4 text-yellow-500" />
                      <span>28+ Brands</span>
                    </p>
                    <p className="text-[0.7rem] text-neutral-600">
                      Partnered across industries
                    </p>
                  </div>
                  <div className="flex h-full flex-col justify-between space-y-1 rounded-2xl border border-neutral-200 bg-white p-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <Newspaper className="h-4 w-4 text-yellow-500" />
                      <span>5000+ Publications</span>
                    </p>
                    <p className="text-[0.7rem] text-neutral-600">
                      International and national media
                    </p>
                  </div>
                  <div className="flex h-full flex-col justify-between space-y-1 rounded-2xl border border-neutral-200 bg-white p-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                      <Globe2 className="h-4 w-4 text-yellow-500" />
                      <span>20,000+ Pages</span>
                    </p>
                    <p className="text-[0.7rem] text-neutral-600">
                      Reach managed across social
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Industries We Work With
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300" />
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-medium text-neutral-800">
          <span className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1">
            Healthcare
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            Education
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            Real Estate
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            FMCG
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            Hospitality
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            Service Brands
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            Astrology
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-1">
            And More
          </span>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
            About Vision9
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            A strategic marketing partner built for measurable business growth.
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            At Vision9, we help brands drive growth through strategic thinking,
            impactful design, and result-oriented communication. We work as an
            extended marketing partner, from strategy to execution, ensuring
            every campaign, creative, and decision is built to generate
            measurable outcomes.
          </p>
          <p className="text-sm text-neutral-700 sm:text-base">
            From early-stage brands to established enterprises, we plug into
            your existing ecosystem, build the right funnels, and create content
            that not only looks good but also performs.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Active Clients */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Active Clients
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Ongoing growth partnerships across key sectors
                </p>
              </div>
            </div>

            <p className="text-3xl font-semibold text-yellow-700">30+</p>
          </div>

          {/* Campaigns */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                <Rocket className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Campaigns
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Successfully planned and executed campaigns
                </p>
              </div>
            </div>

            <p className="text-3xl font-semibold text-yellow-700">350+</p>
          </div>

          {/* Focus */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                <Target className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Focus
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Strategy, creative, and systems aimed at revenue
                </p>
              </div>
            </div>

            <p className="text-3xl font-semibold text-yellow-700">ROI</p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
              Core Services
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 sm:text-3xl">
              What We Help You Do
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-700">
            We design and execute integrated marketing systems that capture
            attention, convert intent, and retain customers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-600">
              Lead Generation and Performance
            </p>
            <h3 className="text-lg font-semibold text-neutral-900">
              Lead Generation and Performance Marketing
            </h3>
            <p className="text-sm text-neutral-700">
              Data-driven campaigns designed to deliver consistent, high-quality
              leads across Meta and Google platforms with clear tracking and
              reporting.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-600">
              Branding and Social
            </p>
            <h3 className="text-lg font-semibold text-neutral-900">
              Branding and Social Media Marketing
            </h3>
            <p className="text-sm text-neutral-700">
              End-to-end brand building through strategic positioning, content
              creation, and full-funnel social media management.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-600">
              Video and UGC
            </p>
            <h3 className="text-lg font-semibold text-neutral-900">
              Video, Reels, and UGC Content Creation
            </h3>
            <p className="text-sm text-neutral-700">
              Authentic, high-performing content built to increase engagement,
              trust, and advertising efficiency across all platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-yellow-100 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.4fr,1.2fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-700">
            Branding and Designing
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Building Brands That Stand Out
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            From brand identity and visual language to digital and offline
            creatives, we deliver end-to-end branding solutions. This includes
            design, printing, and on-ground execution of banners, brochures,
            pamphlets, standees, and more, ensuring consistent brand visibility
            across every touchpoint.
          </p>
          {/* <Button
            size="lg"
            className="bg-yellow-500 text-neutral-900 hover:bg-yellow-400"
          >
            Explore Branding and Designing
          </Button> */}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-yellow-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-700">
              Identity Systems
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Logo systems, color palettes, typography, and brand guidelines to
              keep everything on-brand.
            </p>
          </div>
          <div className="rounded-2xl border border-yellow-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-700">
              On-Ground Presence
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Campaign collaterals, standees, banners, and print materials
              designed for real-world impact.
            </p>
          </div>
          <div className="rounded-2xl border border-yellow-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-700">
              Digital Creatives
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Ad creatives, social posts, and landing page designs aligned with
              performance goals.
            </p>
          </div>
          <div className="rounded-2xl border border-yellow-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-700">
              Consistency at Scale
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Systems to ensure every touchpoint reflects your brand&apos;s
              voice, tone, and promise.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.5fr,1.2fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
            Why Vision9
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Strategy-first. Creative-led. Performance-obsessed.
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            We bring together strategy, creative, media, and systems to build
            marketing engines that keep your brand visible, relevant, and
            profitable.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-neutral-800 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                Strategy-first approach backed by high-impact creative
                execution.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                Industry-specific expertise across healthcare, education, real
                estate, FMCG, and services.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                International-standard quality, processes, and performance
                reporting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                End-to-end execution across digital, offline, and on-ground
                branding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                Performance-driven mindset focused on leads, sales, and ROI.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                Dedicated account ownership and transparent communication.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
              <span>
                Long-term partnerships built for sustainable, scalable growth.
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
            Our Process
          </p>
          <h3 className="mt-3 text-xl font-semibold text-neutral-900 sm:text-2xl">
            How We Work
          </h3>
          <div className="mt-6 grid gap-5">
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-neutral-900">
                1
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  Discovery
                </p>
                <p className="text-xs text-neutral-700">
                  Understanding your business, market, current funnels, and
                  growth objectives.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-neutral-900">
                2
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  Strategy
                </p>
                <p className="text-xs text-neutral-700">
                  Developing a tailored roadmap across channels, content, and
                  budgets aligned with your goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-neutral-900">
                3
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  Execution
                </p>
                <p className="text-xs text-neutral-700">
                  Implementing campaigns, creatives, tracking, and systems
                  across digital and offline touchpoints.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-neutral-900">
                4
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900">
                  Optimization and Scale
                </p>
                <p className="text-xs text-neutral-700">
                  Continuous improvement to maximize performance, reduce cost
                  per result, and scale what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-neutral-200 bg-white px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.5fr,1.2fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
            Case Studies
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Proven Strategies. Real Outcomes.
          </h2>
          <p className="text-sm text-neutral-700 sm:text-base">
            Explore how Vision9 has helped brands strengthen their presence,
            improve reach, and generate measurable growth through structured
            marketing systems and content-led performance.
          </p>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-yellow-400 bg-white text-yellow-700 hover:bg-yellow-50"
          >
            View Case Studies
          </Button> */}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Healthcare Brand
            </p>
            <p className="mt-2 text-sm font-semibold text-neutral-900">
              3x increase in qualified leads
            </p>
            <p className="mt-1 text-xs text-neutral-700">
              Revamped funnel, high-intent content, and optimized ad spends
              across Meta and Google.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Real Estate Client
            </p>
            <p className="mt-2 text-sm font-semibold text-neutral-900">
              Lowered CPL while scaling
            </p>
            <p className="mt-1 text-xs text-neutral-700">
              Regionalized creatives and performance-driven landing pages that
              converted interest into site visits.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-600">
            Clients and Experience
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Trusted by Growth-Focused Brands
          </h2>
        </div>
        <p className="max-w-3xl text-sm text-neutral-700 sm:text-base">
          Vision9 partners with brands across healthcare, education, real
          estate, FMCG, hospitality, and service industries to build consistent,
          scalable marketing systems. We focus on sustainable growth, not just
          short-lived spikes.
        </p>
        <div className="grid gap-4 text-xs text-neutral-900 sm:grid-cols-4">
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-semibold text-neutral-900">Structured Systems</p>
            <p className="mt-1 text-[0.7rem] text-neutral-700">
              Marketing engines that keep running beyond a single campaign.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-semibold text-neutral-900">Sector Expertise</p>
            <p className="mt-1 text-[0.7rem] text-neutral-700">
              Playbooks tailored for your category and audience behavior.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-semibold text-neutral-900">Always-On Insights</p>
            <p className="mt-1 text-[0.7rem] text-neutral-700">
              Reporting that makes decisions faster and more confident.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
            <p className="font-semibold text-neutral-900">Partner Mindset</p>
            <p className="mt-1 text-[0.7rem] text-neutral-700">
              We operate like an in-house team, not an external vendor.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-700">
          Ready to Grow with Vision9
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-900 sm:text-3xl">
          Ready to Grow with a Strategic Marketing Partner?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-700 sm:text-base">
          Let&apos;s discuss how Vision9 can help your brand achieve clarity,
          consistency, and scalable growth through performance-led marketing,
          powerful branding, and content that actually converts.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* <Button
            size="lg"
            className="bg-yellow-500 text-neutral-900 hover:bg-yellow-400"
          >
            Book a Strategy Call
          </Button> */}
          {/* <Button
            size="lg"
            variant="outline"
            className="border-yellow-400 bg-white text-yellow-700 hover:bg-yellow-50"
          >
            Contact Us
          </Button> */}
        </div>
      </section>

      <a
        href="https://wa.me/918147637913"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
}
