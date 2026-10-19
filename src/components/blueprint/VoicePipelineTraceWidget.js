import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Play, Zap } from 'lucide-react';
import { VOICE_PIPELINE_NODES } from '../../config/portfolioConfig';

/**
 * ============================================================================
 * HERO INTERACTIVE VOICE AI PIPELINE TRACE (FULL-WIDTH 12-COLUMN VIEW)
 * Demonstrates Zia's signature Dynamic Contextual Filler & FDE architecture.
 * ============================================================================
 */
export default function VoicePipelineTraceWidget({ isDark }) {
  const [pipelineMode, setPipelineMode] = useState('optimized'); // 'optimized' | 'standard'
  const [activeNodeId, setActiveNodeId] = useState('filler');
  const [simulatingStep, setSimulatingStep] = useState(2);
  const [isSimulating, setIsSimulating] = useState(false);

  const runPacketSimulation = useCallback(() => {
    setIsSimulating(true);
    setSimulatingStep(0);
    setActiveNodeId(VOICE_PIPELINE_NODES[0].id);
  }, []);

  useEffect(() => {
    if (!isSimulating) return;
    const timer = setInterval(() => {
      setSimulatingStep((prev) => {
        if (prev >= VOICE_PIPELINE_NODES.length - 1) {
          setIsSimulating(false);
          return 2;
        }
        const nextIndex = prev + 1;
        setActiveNodeId(VOICE_PIPELINE_NODES[nextIndex].id);
        return nextIndex;
      });
    }, 850);
    return () => clearInterval(timer);
  }, [isSimulating]);

  const activeNode = useMemo(
    () => VOICE_PIPELINE_NODES.find((n) => n.id === activeNodeId) || VOICE_PIPELINE_NODES[2],
    [activeNodeId]
  );

  const perceivedLatency = pipelineMode === 'optimized' ? 380 : 1850;

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-7 transition-all duration-300 shadow-xl ${
        isDark
          ? 'bg-[#11151C]/95 border-slate-800 shadow-black/40'
          : 'bg-white/95 border-stone-200/90 shadow-stone-900/5'
      }`}
    >
      {/* Top Bar: Widget Title & Packet Trace Simulator */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-current/10">
        <div className="flex items-start sm:items-center gap-3">
          <span className="relative flex h-3 w-3 mt-1 sm:mt-0 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-emerald-500 block">
              LIVE SYSTEM TRACE • OMNIDIMENSION SCALE (1M+ CALLS)
            </span>
            <h2 className="font-bold text-base sm:text-lg">
              Enterprise Voice AI + RAG Conversational Loop (Click any stage to inspect telemetry)
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Mode Toggle: Standard vs Zia's Optimized Pipeline */}
          <div className="flex flex-col sm:inline-flex sm:flex-row items-stretch sm:items-center gap-1.5 p-1 rounded-xl bg-current/5 border border-current/10 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setPipelineMode('standard')}
              className={`py-1.5 px-3 rounded-lg font-mono text-xs font-medium transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer whitespace-nowrap ${
                pipelineMode === 'standard'
                  ? isDark
                    ? 'bg-rose-950/90 text-rose-200 border border-rose-500/40 shadow-sm'
                    : 'bg-rose-50 text-rose-900 border border-rose-300 shadow-sm'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span>Standard Sequential</span>
              <span className="font-bold text-rose-500">1,850ms wait</span>
            </button>

            <button
              type="button"
              onClick={() => setPipelineMode('optimized')}
              className={`py-1.5 px-3 rounded-lg font-mono text-xs font-medium transition-all flex items-center justify-between sm:justify-start gap-2 cursor-pointer whitespace-nowrap ${
                pipelineMode === 'optimized'
                  ? isDark
                    ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-500/40 shadow-sm'
                    : 'bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-sm'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span>⚡ Zia&apos;s FDE Pipeline</span>
              <span className="font-bold text-emerald-500">380ms perceived</span>
            </button>
          </div>

          <button
            type="button"
            onClick={runPacketSimulation}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 w-full sm:w-auto ${
              isDark
                ? 'bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300'
            }`}
          >
            <Play className={`w-3.5 h-3.5 shrink-0 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Tracing Live Packet...' : 'Simulate Live Call Turn'}</span>
          </button>
        </div>
      </div>

      {/* Perceived Wait Time Visual Meter */}
      <div className="mt-4 p-3.5 rounded-xl border border-current/10 bg-current/[0.02]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono mb-2">
          <span className="opacity-80">
            Caller Perceived Response Wait Time (Turn-Taking Dead Air):
          </span>
          <span
            className={`font-bold px-2.5 py-0.5 rounded sm:whitespace-nowrap ${
              pipelineMode === 'optimized'
                ? 'bg-emerald-500/15 text-emerald-500'
                : 'bg-rose-500/15 text-rose-500'
            }`}
          >
            {perceivedLatency}ms{' '}
            {pipelineMode === 'optimized'
              ? '• Natural Human Cadence (-79% Latency)'
              : '• Awkward Caller Silence'}
          </span>
        </div>
        <div className="w-full h-2.5 rounded-full bg-current/10 overflow-hidden flex">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              pipelineMode === 'optimized'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-400 w-[24%]'
                : 'bg-gradient-to-r from-amber-500 to-rose-500 w-[92%]'
            }`}
          />
        </div>
      </div>

      {/* Full-Width Interactive 6-Node Architecture Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {VOICE_PIPELINE_NODES.map((node, index) => {
          const IconComponent = node.icon;
          const isSelected = activeNodeId === node.id;
          const isPacketHere = isSimulating && simulatingStep === index;
          const isDisabledFiller = pipelineMode === 'standard' && node.id === 'filler';
          const displayedLatency =
            pipelineMode === 'optimized' ? node.optimizedLatency : node.standardLatency;

          return (
            <button
              type="button"
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`group relative text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isDisabledFiller
                  ? 'opacity-40 border-dashed border-current/20'
                  : isSelected || isPacketHere
                  ? isDark
                    ? 'bg-emerald-500/10 border-emerald-400/70 ring-1 ring-emerald-400/40'
                    : 'bg-amber-50/90 border-orange-500/70 ring-1 ring-orange-500/30'
                  : 'border-current/10 hover:border-current/30 bg-current/[0.02]'
              }`}
            >
              {node.isHeroInnovation && pipelineMode === 'optimized' && (
                <span className="absolute -top-2.5 right-2.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500 text-slate-950 shadow whitespace-nowrap">
                  FDE INNOVATION
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <span className="font-mono text-[11px] opacity-60">STEP {node.step}</span>
                  <span
                    className={`font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap ${
                      isDisabledFiller
                        ? 'bg-current/10'
                        : pipelineMode === 'optimized'
                        ? 'bg-emerald-500/15 text-emerald-500'
                        : 'bg-rose-500/15 text-rose-500'
                    }`}
                  >
                    {isDisabledFiller ? 'BYPASSED' : `${displayedLatency}ms`}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div
                    className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                      isSelected
                        ? isDark
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-orange-500/15 text-orange-700'
                        : 'bg-current/10 opacity-80'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-xs leading-snug">{node.title}</p>
                    <p className="text-[11px] opacity-70 leading-snug mt-0.5">{node.subtitle}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep-Dive Telemetry & Live Call Stream Drawer */}
      <div
        className={`mt-4 p-4 sm:p-5 rounded-xl border transition-all ${
          isDark
            ? 'bg-slate-900/90 border-slate-800'
            : 'bg-stone-100/80 border-stone-200/90'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500">
              STAGE {activeNode.step}: {activeNode.title.toUpperCase()}
            </span>
            <span className="font-mono text-xs opacity-75">{activeNode.protocol}</span>
          </div>
          <span className="font-mono text-[11px] opacity-60">
            Click any stage card above to inspect optimization details
          </span>
        </div>

        <div className="my-2.5 px-3.5 py-2 rounded-lg bg-current/5 font-mono text-xs text-emerald-500 leading-relaxed break-words">
          {activeNode.liveTranscript}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start pt-1">
          <p className="lg:col-span-6 text-xs sm:text-sm opacity-90 leading-relaxed">
            {activeNode.description}
          </p>
          <div className="lg:col-span-6 p-3 rounded-lg bg-current/[0.03] border border-current/10 flex items-start gap-2.5 text-xs sm:text-sm">
            <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold">Zia&apos;s FDE Optimization: </strong>
              <span className="opacity-90">{activeNode.fdeOptimization}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
