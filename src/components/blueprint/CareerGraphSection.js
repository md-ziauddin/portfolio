import React, { useState, useMemo } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Network,
  Quote,
  Sparkles
} from 'lucide-react';
import { CAREER_TIMELINE, PEER_RECOMMENDATIONS } from '../../config/portfolioConfig';

/**
 * ============================================================================
 * CAREER EVOLUTION, ENTERPRISE DEPENDENCY GRAPH & PEER ENDORSEMENTS
 * Nods to Zia's AntV G6 visualization background, enterprise progression,
 * and verified leadership testimonials from VMware & partners.
 * ============================================================================
 */
export default function CareerGraphSection({ isDark }) {
  const [selectedRoleId, setSelectedRoleId] = useState(CAREER_TIMELINE[0].id);

  const activeRole = useMemo(
    () => CAREER_TIMELINE.find((r) => r.id === selectedRoleId) || CAREER_TIMELINE[0],
    [selectedRoleId]
  );

  return (
    <section id="experience" className="py-16 sm:py-20 scroll-mt-20">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 mb-3">
          <Network className="w-3.5 h-3.5" />
          <span>ENTERPRISE TRACK RECORD • INSPIRED BY ANTV G6 DEPENDENCY GRAPHS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Career Evolution: Frontend → Full-Stack → Forward Deployed AI
        </h2>
        <p className="mt-2 text-sm sm:text-base opacity-80 max-w-2xl">
          Over 5+ years, my work has evolved from building enterprise React UIs and AntV G6 infrastructure graphs (VMware, Ariksa) to leading fintech platform modernization and owning 1M+ call Voice AI deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-3">
          {CAREER_TIMELINE.map((item, idx) => {
            const isSelected = item.id === selectedRoleId;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedRoleId(item.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? isDark
                      ? 'bg-emerald-500/10 border-emerald-500/60 shadow-lg'
                      : 'bg-amber-50/80 border-orange-500/60 shadow-md'
                    : isDark
                    ? 'bg-[#11151C]/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs opacity-70">{item.period}</span>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-current/10 opacity-75'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">{item.role}</h3>
                    <p className="text-xs opacity-75">
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-emerald-500' : 'opacity-40'
                    }`}
                  />
                </div>
                {idx < CAREER_TIMELINE.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-3 left-7 w-0.5 h-3 bg-current/20" />
                )}
              </button>
            );
          })}
        </div>

        <div
          className={`lg:col-span-7 rounded-2xl border p-6 sm:p-8 ${
            isDark
              ? 'bg-[#11151C]/95 border-slate-800'
              : 'bg-white border-stone-200/90 shadow-sm'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-current/10">
            <div>
              <span className="font-mono text-xs text-emerald-500 font-bold uppercase">
                {activeRole.period} • {activeRole.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                {activeRole.role} @ {activeRole.company}
              </h3>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 font-semibold">
              {activeRole.badge}
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base font-medium opacity-95">
            {activeRole.highlight}
          </p>

          <div className="mt-5 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider opacity-65">
              Verified Production Impact &amp; Ownership:
            </h4>
            {activeRole.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span className="opacity-90">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-current/10">
            <div className="font-mono text-xs uppercase tracking-wider opacity-65 mb-3 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-amber-500" />
              <span>Connected Architecture &amp; Skill Nodes:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeRole.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl font-mono text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                >
                  ● {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Verified Peer & Leadership Endorsements (VMware & Enterprise) */}
      <div className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-500">
            <Sparkles className="w-4 h-4" />
            <span>VERIFIED ENGINEERING &amp; LEADERSHIP ENDORSEMENTS (LINKEDIN)</span>
          </div>
          <span className="font-mono text-xs opacity-65">
            From Directors, MTS &amp; Senior Backend Engineers @ VMware
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:[grid-template-rows:auto_1fr_auto]">
          {PEER_RECOMMENDATIONS.slice(0, 3).map((rec) => (
            <blockquote
              key={rec.author}
              className={`p-5 rounded-2xl border md:row-span-3 grid md:grid-rows-subgrid gap-0 transition-all ${
                isDark
                  ? 'bg-[#11151C]/85 border-slate-800 hover:border-slate-700'
                  : 'bg-white/95 border-stone-200/90 shadow-sm hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-current/10">
                <span className="font-mono text-[11px] font-semibold text-emerald-500 truncate">
                  {rec.relationship}
                </span>
                <Quote className="w-3.5 h-3.5 text-amber-500 shrink-0 opacity-80" />
              </div>

              <div className="flex items-start pb-4">
                <p className="text-xs sm:text-sm italic opacity-85 leading-relaxed">
                  &ldquo;{rec.quote}&rdquo;
                </p>
              </div>

              <footer className="pt-3 border-t border-current/10 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-bold text-xs sm:text-sm">{rec.author}</div>
                  <div className="font-mono text-[11px] text-emerald-500 line-clamp-2 leading-snug">
                    {rec.title}
                  </div>
                </div>
                <Award className="w-4 h-4 text-amber-500 shrink-0 opacity-80 ml-2" />
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
