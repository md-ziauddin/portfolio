import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Moon,
  PenTool,
  Radio,
  Sliders,
  Sun
} from 'lucide-react';
import {
  ENGINEER_PROFILE,
  FDE_VALUE_PILLARS,
  TELEMETRY_METRICS
} from '../../config/portfolioConfig';
import useBlueprintTheme from '../../hooks/useBlueprintTheme';
import SeoAeo from '../seo/SeoAeo';
import VoicePipelineTraceWidget from './VoicePipelineTraceWidget';
import CaseStudiesSection from './CaseStudiesSection';
import VoiceLatencyCalculatorLab from './VoiceLatencyCalculatorLab';
import CareerGraphSection from './CareerGraphSection';
import EngineeringBlogSection from './EngineeringBlogSection';

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * ============================================================================
 * MAIN MODULAR PORTFOLIO APPLICATION ("TACTILE ENGINEERING BLUEPRINT")
 * ============================================================================
 */
export default function BlueprintPortfolioApp({ pathname = '/' }) {
  const { isDark, toggleTheme } = useBlueprintTheme('blueprint');
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3600);
  }, []);

  const handleScrollToTop = useCallback((e) => {
    e?.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      if (window.location.hash) {
        window.history.replaceState(null, '', pathname || '/');
      }
    }
  }, [pathname]);

  return (
    <div
      id="top"
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 selection:bg-emerald-500 selection:text-slate-950 ${
        isDark ? 'bg-[#0B0D10] text-slate-100 dark' : 'bg-[#FAF8F5] text-[#141413]'
      }`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
          : 'radial-gradient(rgba(20, 20, 19, 0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <SeoAeo pathname={pathname} isDark={isDark} />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-slate-950 focus:rounded-xl focus:font-mono focus:text-xs focus:font-bold focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Non-intrusive Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl font-mono text-xs font-semibold bg-emerald-500 text-slate-950 shadow-xl"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Sticky Engineering Navigation */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-[#0B0D10]/85 border-slate-800/80'
            : 'bg-[#FAF8F5]/85 border-stone-200/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a
            href="#top"
            onClick={handleScrollToTop}
            className="flex items-center gap-2.5 group shrink-0 cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm border transition-all shrink-0 ${
                isDark
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 group-hover:border-emerald-500/80 group-hover:scale-105'
                  : 'bg-stone-900 text-amber-50 border-stone-800 group-hover:bg-stone-800 group-hover:scale-105'
              }`}
            >
              MZ
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight whitespace-nowrap group-hover:text-emerald-500 transition-colors">
                {ENGINEER_PROFILE.name}
              </div>
              <div className="font-mono text-[10px] opacity-65 hidden sm:block whitespace-nowrap">
                {ENGINEER_PROFILE.shortTitle}
              </div>
            </div>
          </a>

          <nav
            className="hidden lg:flex items-center gap-6 text-xs font-mono font-medium"
            aria-label="Primary architecture sections"
          >
            <a
              href="#architectures"
              className="whitespace-nowrap opacity-75 hover:opacity-100 hover:text-emerald-500 transition-all"
            >
              Architectures
            </a>
            <a
              href="#latency-lab"
              className="whitespace-nowrap opacity-75 hover:opacity-100 hover:text-emerald-500 transition-all"
            >
              Latency Lab
            </a>
            <a
              href="#experience"
              className="whitespace-nowrap opacity-75 hover:opacity-100 hover:text-emerald-500 transition-all"
            >
              Experience
            </a>
            <a
              href="#blog"
              className="whitespace-nowrap opacity-75 hover:opacity-100 hover:text-emerald-500 transition-all"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap opacity-75 hover:opacity-100 hover:text-emerald-500 transition-all"
            >
              Connect
            </a>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-amber-300 hover:border-slate-600'
                  : 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100'
              }`}
              title="Switch between Warm Blueprint Paper and Dark Telemetry Mode"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Blueprint Paper</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>Telemetry Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20 scroll-mt-24">
        {/* SECTION A: HERO INTRO + FULL-WIDTH LIVE VOICE AI PIPELINE TRACE */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-[11px] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Forward Deployed AI &amp; Systems Engineer • India
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
                Turning complex AI &amp; distributed architectures into{' '}
                <span className="underline decoration-emerald-500/60 decoration-wavy underline-offset-4">
                  low-latency
                </span>{' '}
                production systems.
              </h1>

              <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                I&apos;m <strong className="font-semibold">MD Ziauddin</strong> - a Senior Software
                Engineer and Forward Deployed AI Engineer with 5+ years of experience. My work sits at
                the intersection of{' '}
                <strong className="font-semibold">
                  deep backend engineering (TypeScript, Fastify, Python)
                </strong>
                ,{' '}
                <strong className="font-semibold">
                  production Voice AI &amp; hybrid RAG orchestration
                </strong>
                , and high-stakes enterprise delivery across{' '}
                <strong className="font-semibold">
                  OmniDimension (1M+ calls), Growwth Partners, and VMware
                </strong>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#architectures"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md whitespace-nowrap shrink-0"
                >
                  <span>Explore System Architectures</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="#latency-lab"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold border transition-all whitespace-nowrap shrink-0 ${
                    isDark
                      ? 'border-slate-700 hover:bg-slate-800/70'
                      : 'border-stone-300 bg-white hover:bg-stone-100'
                  }`}
                >
                  <Sliders className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Voice AI Latency Lab</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
                  isDark
                    ? 'bg-[#11151C]/90 border-slate-800'
                    : 'bg-white/95 border-stone-200/90 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-current/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500">
                    ARCHITECTURAL OPERATING PROFILE
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-semibold whitespace-nowrap">
                    5+ Years Exp
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono opacity-65 shrink-0">Primary Focus:</span>
                    <span className="font-semibold text-right">
                      Voice AI, Hybrid RAG &amp; Distributed Backends
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono opacity-65 shrink-0">Core Runtime:</span>
                    <span className="font-mono font-semibold text-right">
                      TypeScript • Fastify • Python • React
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono opacity-65 shrink-0">AI &amp; Data Stack:</span>
                    <span className="font-mono font-semibold text-right">
                      LangGraph • Qdrant • Redis • PostgreSQL
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono opacity-65 shrink-0">Production Scale:</span>
                    <span className="font-mono font-semibold text-emerald-500 text-right">
                      1M+ Voice Calls • -90% Sync Latency
                    </span>
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border font-mono text-xs flex items-start gap-2.5 ${
                    isDark
                      ? 'bg-slate-900/70 border-slate-800 text-amber-300'
                      : 'bg-amber-50/80 border-amber-200/80 text-stone-800'
                  }`}
                >
                  <PenTool className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>How I Work:</strong> {ENGINEER_PROFILE.workflowSignature}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FULL-WIDTH INTERACTIVE VOICE PIPELINE TRACE WIDGET */}
          <VoicePipelineTraceWidget isDark={isDark} />
        </div>

        {/* SECTION B: PRODUCTION TELEMETRY STRIP & 3 VALUE PILLARS */}
        <section className="mt-14 sm:mt-16" aria-label="Production telemetry and impact">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-wider opacity-65 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>VERIFIED PRODUCTION TELEMETRY &amp; ENTERPRISE IMPACT</span>
            </span>
            <span className="font-mono text-[11px] opacity-60 hidden sm:inline">
              No vanity skill bars • Real production SLAs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TELEMETRY_METRICS.map((metric) => (
              <div
                key={metric.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  isDark
                    ? 'bg-[#11151C]/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white/95 border-stone-200/90 shadow-sm hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-wide opacity-75 leading-snug mb-2">
                    {metric.badge}
                  </div>
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-500">
                      {metric.value}
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 whitespace-nowrap shrink-0">
                      {metric.delta}
                    </span>
                  </div>
                  <div className="font-bold text-sm mt-2">{metric.label}</div>
                </div>
                <p className="mt-2 text-xs opacity-75 leading-relaxed">{metric.detail}</p>
              </div>
            ))}
          </div>

          {/* 3 Self-Explanatory Value Pillars */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {FDE_VALUE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/80'
                    : 'bg-stone-100/60 border-stone-200/80'
                }`}
              >
                <span className="font-mono text-[11px] font-bold text-amber-500 block mb-1">
                  {pillar.badge}
                </span>
                <h2 className="font-bold text-sm sm:text-base">{pillar.title}</h2>
                <p className="mt-1.5 text-xs opacity-80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION C: 4 SKETCH-TO-PRODUCTION CASE STUDIES */}
        <CaseStudiesSection isDark={isDark} onToast={triggerToast} />

        {/* SECTION D: INTERACTIVE VOICE AI LATENCY LAB */}
        <VoiceLatencyCalculatorLab isDark={isDark} />

        {/* SECTION E: CAREER EVOLUTION, DEPENDENCY GRAPH & PEER ENDORSEMENTS */}
        <CareerGraphSection isDark={isDark} />

        {/* SECTION F: ENGINEERING BLOG & FIELD NOTES */}
        <EngineeringBlogSection isDark={isDark} />

        {/* SECTION G: DIRECT LINKEDIN CONNECTION & ARCHITECTURAL COLLABORATION */}
        <section id="contact" className="pt-8 scroll-mt-20">
          <div
            className={`rounded-3xl border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              isDark
                ? 'bg-[#11151C] border-slate-800'
                : 'bg-stone-900 text-stone-100 border-stone-800'
            }`}
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-500/20 text-emerald-400">
                <Radio className="w-3.5 h-3.5 shrink-0" />
                <span>READY FOR HIGH-IMPACT AI &amp; FDE CHALLENGES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Need an engineer who can design the architecture, benchmark the models, and lead the customer launch?
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                Whether you&apos;re scaling production Voice AI to millions of calls, eliminating hallucinations in clinical or enterprise RAG pipelines, or modernizing high-throughput backend systems, let&apos;s connect directly on LinkedIn.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={ENGINEER_PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg whitespace-nowrap shrink-0"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href={ENGINEER_PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-all whitespace-nowrap shrink-0"
                >
                  <GithubIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Explore GitHub &amp; Benchmarks</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Motive Card: Why Connect on LinkedIn */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <span className="font-mono text-xs font-bold uppercase text-emerald-400">
                  How I Can Help Your Engineering Team
                </span>
                <span className="font-mono text-[11px] text-amber-400 font-semibold">
                  Direct DM on LinkedIn
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Forward-Deployed Voice AI &amp; GenAI:</strong>{' '}
                    Taking enterprise voice agents from 1.8s dead air to sub-400ms natural conversations with 100% automated SOP QA.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Empirically Benchmarked RAG Systems:</strong>{' '}
                    Replacing guesswork with MLflow evaluation matrices across Qdrant, Bedrock, and self-correcting LangGraph agents.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">High-Velocity Full-Stack Architecture:</strong>{' '}
                    Cutting platform latency by 90% with bidirectional WebSockets, Fastify, Redis, and React.
                  </div>
                </div>
              </div>

              <a
                href={ENGINEER_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-mono text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0" />
                <span>Message MD Ziauddin on LinkedIn &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-current/10 py-8 font-mono text-xs opacity-75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              <strong>MD Ziauddin</strong> • Forward Deployed AI &amp; Senior Systems Engineer (India)
            </span>
            <span className="opacity-40">•</span>
            <Link to="/archive" className="text-emerald-500 hover:underline font-semibold">
              Archive &amp; Blog
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={ENGINEER_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              LinkedIn
            </a>
            <span className="opacity-40">•</span>
            <a
              href={ENGINEER_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
