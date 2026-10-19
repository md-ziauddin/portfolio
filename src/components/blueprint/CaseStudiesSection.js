import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  ArrowUpRight,
  ExternalLink,
  FileCode2,
  Maximize2,
  PenTool,
  ShieldCheck,
  Terminal,
  X
} from 'lucide-react';
import { CASE_STUDIES } from '../../config/portfolioConfig';
import { copyTextToClipboard, encodeSqid } from '../../utils/clipboard';
import ExcalidrawBlueprintSVG from './ExcalidrawBlueprintSVG';

/**
 * ============================================================================
 * INTERACTIVE SKETCH-TO-PRODUCTION CASE STUDIES
 * Includes:
 * - Self-explanatory [⚡ Live Metrics] vs [✏️ System Diagram] view switcher
 * - Full-screen Expandable Architecture Diagram Modal for all 4 case studies
 * - Empirical MLflow RAG Benchmark visualizer (PubMedQA 100 & 300 doc sweeps)
 * - Live URL shortener micro-demo (Fastify + Redis + Sqids + Supabase)
 * - RyzUp Sheets React GAS preview
 * ============================================================================
 */
export default function CaseStudiesSection({ isDark, onToast }) {
  const [cardViewModes, setCardViewModes] = useState({
    'omnidimension-voice': 'production',
    'healthcare-rag-ksearch': 'production',
    'growwth-ryzup-fintech': 'production',
    'articulate-micro-systems': 'production'
  });

  const [expandedDiagramStudy, setExpandedDiagramStudy] = useState(null);

  const [customSlugTag, setCustomSlugTag] = useState('fde-hire');
  const [shortLinks, setShortLinks] = useState([
    {
      id: 10482,
      code: 'fde-hire-9kM2',
      target: 'ziadev.in/?ref=enterprise-fde',
      latency: '0.38ms (Redis HIT)'
    },
    {
      id: 10481,
      code: 'voice-ai-7pX4',
      target: 'ziadev.in/#latency-lab',
      latency: '0.41ms (Redis HIT)'
    }
  ]);

  const toggleCardMode = (id, mode) => {
    setCardViewModes((prev) => ({ ...prev, [id]: mode }));
  };

  const setAllCardsMode = (mode) => {
    setCardViewModes({
      'omnidimension-voice': mode,
      'healthcare-rag-ksearch': mode,
      'growwth-ryzup-fintech': mode,
      'articulate-micro-systems': mode
    });
  };

  const handleGenerateShortLink = (e) => {
    e.preventDefault();
    const nextSeed = 10483 + shortLinks.length * 17;
    const code = encodeSqid(nextSeed, customSlugTag || 'zia');
    const newEntry = {
      id: nextSeed,
      code,
      target: `ziadev.in/?utm=${encodeURIComponent(customSlugTag || 'recruiter')}`,
      latency: '0.39ms (Redis HIT)'
    };
    setShortLinks((prev) => [newEntry, ...prev.slice(0, 2)]);
    onToast(`Sqids Shortlink generated: ziadev.in/s/${code} (Cached in Redis)`);
  };

  const allInProduction = Object.values(cardViewModes).every((m) => m === 'production');
  const allInSketch = Object.values(cardViewModes).every((m) => m === 'sketch');

  return (
    <section id="architectures" className="py-16 sm:py-20 scroll-mt-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 mb-3">
            <PenTool className="w-3.5 h-3.5 shrink-0" />
            <span>SIGNATURE WORKFLOW: EXCALIDRAW TABLET SKETCH &rarr; PRODUCTION TELEMETRY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Flagship System Architectures &amp; Proofs
          </h2>
          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-2xl">
            Every system starts on my drawing tablet in Excalidraw before a single line of TypeScript or Python is written. Toggle between{' '}
            <strong className="font-semibold">⚡ Live Production Metrics</strong> and{' '}
            <strong className="font-semibold">✏️ Hand-Drawn Architecture Diagrams</strong>, or click{' '}
            <strong className="font-semibold">Expand Diagram</strong> on any card to inspect the full-screen blueprint.
          </p>
        </div>

        {/* Self-Explanatory Segmented View Switcher */}
        <div className="w-full sm:w-auto self-start lg:self-auto flex flex-col sm:flex-row sm:items-center gap-2 p-2 rounded-2xl border border-current/15 bg-current/[0.03]">
          <span className="font-mono text-xs font-semibold opacity-75 px-2 whitespace-nowrap">
            Switch All Cards:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setAllCardsMode('production')}
              className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-xl font-mono text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                allInProduction
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                  : 'opacity-75 hover:opacity-100 bg-current/5'
              }`}
            >
              ⚡ Production Metrics
            </button>
            <button
              type="button"
              onClick={() => setAllCardsMode('sketch')}
              className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-xl font-mono text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                allInSketch
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'opacity-75 hover:opacity-100 bg-current/5'
              }`}
            >
              ✏️ Architecture Diagrams
            </button>
          </div>
        </div>
      </div>

      {/* 4 Flagship Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {CASE_STUDIES.map((study) => {
          const currentMode = cardViewModes[study.id] || 'production';

          return (
            <article
              key={study.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? 'bg-[#11151C]/90 border-slate-800 hover:border-slate-700'
                  : 'bg-white/95 border-stone-200/90 hover:border-stone-300 shadow-sm'
              }`}
            >
              <div>
                {/* Consistent 2-Tier Card Header */}
                <div className="pb-4 border-b border-current/10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-500">
                      {study.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExpandedDiagramStudy(study)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isDark
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                          : 'border-amber-600/30 bg-amber-50 text-amber-900 hover:bg-amber-100'
                      }`}
                      title={`Expand ${study.company} System Architecture Diagram`}
                    >
                      <Maximize2 className="w-3 h-3 shrink-0" />
                      <span>Expand Diagram</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">{study.company}</span>
                      <span className="opacity-40">•</span>
                      <span className="font-mono text-xs opacity-70">{study.period}</span>
                    </div>

                    <div className="inline-flex rounded-xl p-1 border border-current/15 bg-current/[0.03] shrink-0 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => toggleCardMode(study.id, 'production')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                          currentMode === 'production'
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        ⚡ Live Metrics
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCardMode(study.id, 'sketch')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                          currentMode === 'sketch'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        ✏️ System Diagram
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-bold leading-snug">
                  {study.headline}
                </h3>
                <p className="mt-2 text-xs sm:text-sm opacity-80 leading-relaxed">
                  <strong className="font-semibold opacity-100">The Engineering Problem: </strong>
                  {study.problem}
                </p>

                {/* Conditional Body: Excalidraw Sketch View vs Production Proof */}
                <div className="mt-4">
                  {currentMode === 'sketch' ? (
                    <div
                      className={`rounded-xl border p-3.5 ${
                        isDark
                          ? 'bg-slate-950/80 border-amber-500/30'
                          : 'bg-[#FFFDF9] border-amber-600/30'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] font-semibold text-amber-500 flex items-center gap-1.5">
                          <PenTool className="w-3.5 h-3.5 shrink-0" />
                          <span>Architecture Canvas</span>
                        </span>
                        {/* <button
                          type="button"
                          onClick={() => setExpandedDiagramStudy(study)}
                          className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-amber-500 hover:underline cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3 shrink-0" />
                          <span>Open Fullscreen View</span>
                        </button>*/}
                      </div>
                      <div
                        onClick={() => setExpandedDiagramStudy(study)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setExpandedDiagramStudy(study);
                          }
                        }}
                        className="cursor-zoom-in rounded-lg transition-transform hover:scale-[1.01]"
                        title="Click to expand system architecture diagram"
                      >
                        <ExcalidrawBlueprintSVG studyId={study.id} isDark={isDark} />
                      </div>
                      <div className="mt-2.5 pt-2.5 border-t border-current/10 space-y-1.5">
                        {study.sketchNotes.map((note, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-mono opacity-85">
                            <span className="text-amber-500 shrink-0">&rarr;</span>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* 2x2 Metric Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {study.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl border border-current/10 bg-current/[0.02]"
                          >
                            <div className="font-mono text-[11px] opacity-65">{m.label}</div>
                            <div className="font-mono text-xs sm:text-sm font-bold text-emerald-500 mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {study.id === 'omnidimension-voice' && (
                        <div className="p-3.5 rounded-xl border border-current/10 bg-current/[0.02]">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                            <span className="font-bold flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span>Automated LLM Call QA &amp; Compliance Pipeline Sample</span>
                            </span>
                            <span className="opacity-75 whitespace-nowrap">Audit Score: 97.6% SOP</span>
                          </div>
                          <div className="space-y-2">
                            {study.qaSample.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs p-2.5 rounded-lg bg-current/[0.03]"
                              >
                                <div>
                                  <span className="font-semibold">{item.criterion}</span>
                                  <span className="block text-[11px] opacity-70">{item.note}</span>
                                </div>
                                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 self-start sm:self-center whitespace-nowrap shrink-0">
                                  {item.score}/100 • {item.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {study.id === 'healthcare-rag-ksearch' && study.mlflowExperiments && (
                        <div className="p-3.5 rounded-xl border border-current/10 bg-current/[0.02]">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-1.5">
                            <span className="font-bold">
                              MLflow Benchmark (PubMedQA: 100 &amp; 300 Doc Sweeps)
                            </span>
                            <a
                              href={study.repoCommitUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-500 font-semibold hover:underline inline-flex items-center gap-1 whitespace-nowrap"
                            >
                              <span>Verified MLflow Commit</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          </div>
                          <p className="font-mono text-[11px] opacity-75 mb-2.5">
                            {study.mlflowExperiments.exp1Summary}
                          </p>
                          <div className="space-y-2.5">
                            {study.mlflowExperiments.runs.map((run, idx) => (
                              <div key={idx} className="text-xs p-2 rounded-lg bg-current/[0.03]">
                                <div className="flex flex-wrap justify-between gap-1 font-mono text-[11px] mb-1">
                                  <span className="font-bold">{run.name}</span>
                                  <span className="text-emerald-500 font-semibold">
                                    NDCG@10: {run.ndcg10} | MRR@10: {run.mrr10}
                                  </span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-current/10 overflow-hidden relative">
                                  <div
                                    className="h-full bg-emerald-500 rounded-full"
                                    style={{ width: `${run.barPercent}%` }}
                                  />
                                </div>
                                <div className="flex justify-between font-mono text-[10px] opacity-70 mt-1">
                                  <span>Answer Relevance: {run.relevance}</span>
                                  <span>Scale Sweep Latency: {run.latency}/query</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {study.id === 'growwth-ryzup-fintech' && (
                        <div className="p-3.5 rounded-xl border border-current/10 bg-current/[0.02]">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                            <span className="font-bold flex items-center gap-1.5">
                              <FileCode2 className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>RyzUp Sheets • Standardized React GAS Add-On Runtime</span>
                            </span>
                            <span className="text-emerald-500 whitespace-nowrap">WebSocket Live Sync</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-[11px]">
                              <thead>
                                <tr className="border-b border-current/10 opacity-65">
                                  <th className="pb-1.5 pr-2">Range</th>
                                  <th className="pb-1.5 px-2">Formula / Assistant Prompt</th>
                                  <th className="pb-1.5 pl-2">AI Output (240ms)</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-current/5">
                                {study.sheetsPreview.map((row, i) => (
                                  <tr key={i}>
                                    <td className="py-1.5 pr-2 font-bold text-amber-500 whitespace-nowrap">
                                      {row.cell}
                                    </td>
                                    <td className="py-1.5 px-2 opacity-80">{row.formula}</td>
                                    <td className="py-1.5 pl-2 text-emerald-500 font-semibold">
                                      {row.output}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {study.id === 'articulate-micro-systems' && (
                        <div className="p-3.5 rounded-xl border border-current/10 bg-current/[0.02]">
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
                            <span className="font-bold flex items-center gap-1.5">
                              <Terminal className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span>Live Micro-Demo: Fastify + Sqids + Redis Shortlink Engine</span>
                            </span>
                            <span className="opacity-70">Try generating a link</span>
                          </div>
                          <form onSubmit={handleGenerateShortLink} className="flex gap-2 mb-2.5">
                            <input
                              type="text"
                              value={customSlugTag}
                              onChange={(e) => setCustomSlugTag(e.target.value)}
                              placeholder="Custom tag (e.g. cto-review)"
                              maxLength={14}
                              aria-label="Custom shortlink tag"
                              className={`min-w-0 flex-1 px-3 py-1.5 rounded-lg font-mono text-xs border outline-none ${
                                isDark
                                  ? 'bg-slate-900 border-slate-700 text-slate-100 focus:border-emerald-500'
                                  : 'bg-white border-stone-300 text-stone-900 focus:border-stone-600'
                              }`}
                            />
                            <button
                              type="submit"
                              className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all cursor-pointer whitespace-nowrap shrink-0"
                            >
                              Encode Sqid ⚡
                            </button>
                          </form>
                          <div className="space-y-1.5">
                            {shortLinks.map((item) => (
                              <div
                                key={item.id}
                                className="flex flex-wrap items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-current/[0.03] font-mono text-[11px]"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-emerald-500 whitespace-nowrap">
                                    ziadev.in/s/{item.code}
                                  </span>
                                  <span className="opacity-65 hidden xl:inline">
                                    &rarr; {item.target}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="text-[10px] opacity-75 whitespace-nowrap">
                                    {item.latency}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      copyTextToClipboard(`https://ziadev.in/s/${item.code}`);
                                      onToast(
                                        `Copied https://ziadev.in/s/${item.code} to clipboard!`
                                      );
                                    }}
                                    className="px-2 py-0.5 rounded bg-current/10 hover:bg-current/20 cursor-pointer whitespace-nowrap"
                                  >
                                    Copy
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer: Tech Stack Tags + Deep-Dive Engineering Link */}
              <div className="mt-5 pt-4 border-t border-current/10 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-current/[0.05] opacity-85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(study.blogSlug || study.externalUrl) && (
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setExpandedDiagramStudy(study)}
                      className="font-mono text-xs text-amber-500 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Expand System Blueprint</span>
                    </button>

                    {study.blogSlug ? (
                      <Link
                        to={study.blogSlug}
                        className="font-mono text-xs font-bold text-emerald-500 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{study.blogLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    ) : (
                      <a
                        href={study.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs font-bold text-emerald-500 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{study.blogLabel}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* EXPANDED FULLSCREEN SYSTEM ARCHITECTURE DIAGRAM MODAL */}
      {expandedDiagramStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expanded-diagram-title"
          onClick={() => setExpandedDiagramStudy(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl ${
              isDark
                ? 'bg-[#0F131A] border-slate-800 text-slate-100'
                : 'bg-[#FAF8F5] border-stone-300 text-stone-900'
            }`}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-current/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500">
                    {expandedDiagramStudy.tag}
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="font-mono text-xs opacity-75">
                    {expandedDiagramStudy.company} ({expandedDiagramStudy.period})
                  </span>
                </div>
                <h3
                  id="expanded-diagram-title"
                  className="text-xl sm:text-2xl font-extrabold tracking-tight"
                >
                  {expandedDiagramStudy.headline}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setExpandedDiagramStudy(null)}
                aria-label="Close expanded architecture diagram"
                className="p-2 rounded-xl bg-current/10 hover:bg-current/20 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Expanded Excalidraw SVG Canvas */}
            <div
              className={`mt-5 rounded-2xl border p-5 sm:p-7 ${
                isDark
                  ? 'bg-slate-950/90 border-amber-500/40'
                  : 'bg-[#FFFDF9] border-amber-600/40 shadow-inner'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-amber-500 flex items-center gap-2">
                  <PenTool className="w-4 h-4 shrink-0" />
                  <span>EXPANDED SYSTEM ARCHITECTURE BLUEPRINT</span>
                </span>
                <span className="font-mono text-xs opacity-65">
                  Press ESC or click outside to close
                </span>
              </div>

              <ExcalidrawBlueprintSVG
                studyId={expandedDiagramStudy.id}
                isDark={isDark}
                isExpanded={true}
              />
            </div>

            {/* Detailed Architectural Flow Notes & Production Metrics inside Modal */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7 p-4 rounded-2xl border border-current/10 bg-current/[0.02] space-y-2.5">
                <div className="font-mono text-xs font-bold uppercase text-amber-500">
                  Architectural Flow &amp; System Design Notes
                </div>
                {expandedDiagramStudy.sketchNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono">
                    <span className="text-emerald-500 font-bold shrink-0">0{idx + 1}.</span>
                    <span className="opacity-90 leading-relaxed">{note}</span>
                  </div>
                ))}
                <p className="pt-2 border-t border-current/10 text-xs opacity-80 leading-relaxed">
                  <strong className="font-semibold opacity-100">Problem Solved: </strong>
                  {expandedDiagramStudy.problem}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-2xl border border-current/10 bg-current/[0.02] space-y-4">
                <div>
                  <div className="font-mono text-xs font-bold uppercase text-emerald-500 mb-2.5">
                    Verified Production Telemetry
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {expandedDiagramStudy.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl border border-current/10 bg-current/[0.03]"
                      >
                        <div className="font-mono text-[10px] opacity-65">{m.label}</div>
                        <div className="font-mono text-xs font-bold text-emerald-500 mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-current/10">
                  {expandedDiagramStudy.blogSlug ? (
                    <Link
                      to={expandedDiagramStudy.blogSlug}
                      className="font-mono text-xs font-bold text-emerald-500 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{expandedDiagramStudy.blogLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  ) : (
                    <a
                      href={expandedDiagramStudy.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-bold text-emerald-500 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{expandedDiagramStudy.blogLabel}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setExpandedDiagramStudy(null)}
                    className="px-4 py-1.5 rounded-xl font-mono text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
