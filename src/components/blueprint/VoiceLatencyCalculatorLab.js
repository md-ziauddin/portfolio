import React, { useState, useMemo } from 'react';
import { Award, CheckCircle2, Sliders } from 'lucide-react';
import { LATENCY_LAB_MODELS, LATENCY_LAB_PRESETS } from '../../config/portfolioConfig';

/**
 * ============================================================================
 * INTERACTIVE VOICE AI LATENCY BENCHMARKING LAB
 * Grounded in published third-party vendor benchmarks (Pipecat STT TTFS,
 * Artificial Analysis LLM TTFT, Coval/Gradium TTS TTFA).
 * Lets visitors compare:
 * 1) Published Vendor Standard Baseline (Unoptimized)
 * 2) Zia's Tuned Streaming Pipeline (WSS pooling, custom VAD, PCM chunking)
 * 3) Dynamic Contextual Filler (<120ms conversational bridge)
 * ============================================================================
 */
export default function VoiceLatencyCalculatorLab({ isDark }) {
  const [selectedTelephony, setSelectedTelephony] = useState(LATENCY_LAB_MODELS.telephony[0].id);
  const [selectedStt, setSelectedStt] = useState(LATENCY_LAB_MODELS.stt[0].id);
  const [selectedLlm, setSelectedLlm] = useState(LATENCY_LAB_MODELS.llm[0].id);
  const [selectedTts, setSelectedTts] = useState(LATENCY_LAB_MODELS.tts[0].id);
  const [stackMode, setStackMode] = useState('optimized'); // 'standard' | 'optimized'
  const [useContextualFiller, setUseContextualFiller] = useState(true);
  const [activePresetId, setActivePresetId] = useState('omnidimension-prod');

  const applyPreset = (preset) => {
    setActivePresetId(preset.id);
    setSelectedTelephony(preset.telephony);
    setSelectedStt(preset.stt);
    setSelectedLlm(preset.llm);
    setSelectedTts(preset.tts);
    setStackMode(preset.stackMode || 'optimized');
    setUseContextualFiller(preset.filler);
  };

  const currentConfig = useMemo(() => {
    const tel = LATENCY_LAB_MODELS.telephony.find((t) => t.id === selectedTelephony);
    const stt = LATENCY_LAB_MODELS.stt.find((s) => s.id === selectedStt);
    const llm = LATENCY_LAB_MODELS.llm.find((l) => l.id === selectedLlm);
    const tts = LATENCY_LAB_MODELS.tts.find((t) => t.id === selectedTts);

    const isOpt = stackMode === 'optimized';

    const telLat = isOpt ? tel.optimizedLatency : tel.standardLatency;
    const sttLat = isOpt ? stt.optimizedLatency : stt.standardLatency;
    const llmLat = isOpt
      ? llm.optimizedTtft + llm.optimizedRag
      : llm.standardTtft + llm.standardRag;
    const ttsLat = isOpt ? tts.optimizedLatency : tts.standardLatency;

    const unoptimizedVendorTotal =
      tel.standardLatency +
      stt.standardLatency +
      llm.standardTtft +
      llm.standardRag +
      tts.standardLatency;

    const optimizedPipelineTotal =
      tel.optimizedLatency +
      stt.optimizedLatency +
      llm.optimizedTtft +
      llm.optimizedRag +
      tts.optimizedLatency;

    const activeRawTotal = telLat + sttLat + llmLat + ttsLat;

    const perceivedWait = useContextualFiller
      ? Math.min(activeRawTotal, telLat + sttLat + 120)
      : activeRawTotal;

    let grade = { label: 'OPTIMAL HUMAN CADENCE (<500ms)', color: 'emerald' };
    if (perceivedWait > 500 && perceivedWait <= 950) {
      grade = { label: 'ACCEPTABLE ENTERPRISE TURN', color: 'amber' };
    } else if (perceivedWait > 950) {
      grade = { label: 'AWKWARD CALLER DEAD-AIR (>950ms)', color: 'rose' };
    }

    let fdeNote =
      'Every provider metric above starts with published industry median benchmarks (Pipecat STT TTFS, Artificial Analysis LLM TTFT, and Coval/Gradium TTS TTFA). By combining WebSocket connection pooling, custom 220ms VAD endpointing, RAM-pinned Qdrant HNSW, and our <120ms Dynamic Contextual Filler, we cut perceived caller wait time from ' +
      `${unoptimizedVendorTotal}ms down to ${perceivedWait}ms.`;

    if (!isOpt && !useContextualFiller) {
      fdeNote = `Unoptimized Vendor Baseline (${unoptimizedVendorTotal}ms): Using default vendor settings (standard VAD silence windows, uncached RAG lookups, and non-pooled TTS streams) results in ${unoptimizedVendorTotal}ms of dead air. Switch to "2. OmniDimension FDE Stack" above to see how our pipeline optimizations shave ${
        unoptimizedVendorTotal - optimizedPipelineTotal
      }ms off raw execution and mask the rest with a Dynamic Contextual Filler.`;
    } else if (llm.id === 'gpt4o_complex_rag' && !useContextualFiller) {
      fdeNote =
        'Multi-hop RAG reasoning with GPT-4o takes 980ms unoptimized (610ms optimized). Enabling the Dynamic Contextual Filler bridges caller wait time at ~380ms while retrieval completes in parallel.';
    }

    return {
      tel,
      stt,
      llm,
      tts,
      isOpt,
      telLat,
      sttLat,
      llmLat,
      ttsLat,
      unoptimizedVendorTotal,
      optimizedPipelineTotal,
      activeRawTotal,
      perceivedWait,
      grade,
      fdeNote
    };
  }, [selectedTelephony, selectedStt, selectedLlm, selectedTts, stackMode, useContextualFiller]);

  return (
    <section id="latency-lab" className="py-16 sm:py-20 scroll-mt-20">
      <div
        className={`rounded-3xl border p-6 sm:p-10 ${
          isDark
            ? 'bg-gradient-to-br from-[#11151C] to-[#0D1117] border-slate-800'
            : 'bg-gradient-to-br from-white to-stone-100/90 border-stone-200/90 shadow-lg shadow-stone-900/5'
        }`}
      >
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-6 border-b border-current/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-500/15 text-emerald-500 mb-2">
              <Sliders className="w-3.5 h-3.5 shrink-0" />
              <span>PUBLISHED VENDOR BENCHMARKS VS. FDE PIPELINE OPTIMIZATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Voice AI STT / LLM / TTS Latency Calculator Lab
            </h2>
            <p className="mt-1 text-sm opacity-80 max-w-2xl">
              Grounded in published third-party benchmarks (<strong className="font-semibold">Pipecat STT TTFS, Artificial Analysis LLM TTFT, Coval/Gradium TTS TTFA</strong>). Inspect the raw unoptimized vendor latency first, then toggle our{' '}
              <strong className="font-semibold">Tuned Streaming Stack</strong> and{' '}
              <strong className="font-semibold">Dynamic Contextual Filler</strong> to see how we achieved sub-400ms perceived turn-taking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto self-start xl:self-center">
            {/* Toggle 1: Published Vendor Standard vs Tuned Streaming Stack */}
            <div className="flex flex-col sm:inline-flex sm:flex-row w-full sm:w-auto rounded-2xl p-1 border border-current/15 bg-current/[0.03] gap-1 sm:gap-0">
              <button
                type="button"
                onClick={() => {
                  setStackMode('standard');
                  setActivePresetId('custom');
                }}
                className={`px-3 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  stackMode === 'standard'
                    ? 'bg-rose-500 text-white shadow-sm font-bold'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                Vendor Standard (Unoptimized)
              </button>
              <button
                type="button"
                onClick={() => {
                  setStackMode('optimized');
                  setActivePresetId('custom');
                }}
                className={`px-3 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  stackMode === 'optimized'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                ⚡ FDE Tuned Stack
              </button>
            </div>

            {/* Toggle 2: Dynamic Contextual Filler */}
            <button
              type="button"
              onClick={() => setUseContextualFiller((prev) => !prev)}
              className={`w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 px-4 py-2.5 rounded-2xl border font-mono text-xs font-bold transition-all cursor-pointer shrink-0 ${
                useContextualFiller
                  ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-500'
                  : 'bg-current/5 border-current/20 opacity-75'
              }`}
            >
              <div
                className={`w-9 h-5 rounded-full p-0.5 transition-colors shrink-0 ${
                  useContextualFiller ? 'bg-emerald-500' : 'bg-slate-500'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    useContextualFiller ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </div>
              <div className="text-left">
                <div className="sm:whitespace-nowrap">
                  Contextual Filler: {useContextualFiller ? 'ON (<120ms Bridge)' : 'OFF'}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 1-Click Scenario Presets */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs opacity-65 mr-1">Compare Scenarios:</span>
          {LATENCY_LAB_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => applyPreset(preset)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer border whitespace-nowrap ${
                activePresetId === preset.id
                  ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-500 font-bold'
                  : 'border-current/10 bg-current/[0.02] opacity-75 hover:opacity-100'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* 4 Model Selector Cards with Published Vendor Numbers + Optimization Proof */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:[grid-template-rows:auto_auto_1fr]">
          {/* Card 1: Telephony */}
          <div className="p-4 rounded-2xl border border-current/10 bg-current/[0.02] lg:row-span-3 grid lg:grid-rows-subgrid">
            <div>
              <label
                htmlFor="select-telephony"
                className="block font-mono text-[11px] font-bold uppercase opacity-70 mb-1.5"
              >
                1. Telephony Transport
              </label>
              <select
                id="select-telephony"
                value={selectedTelephony}
                onChange={(e) => {
                  setSelectedTelephony(e.target.value);
                  setActivePresetId('custom');
                }}
                className={`w-full p-2 rounded-lg font-mono text-xs border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-stone-300'
                }`}
              >
                {LATENCY_LAB_MODELS.telephony.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between opacity-75">
                <span>Vendor Standard:</span>
                <span className={ !currentConfig.isOpt ? 'font-bold text-rose-500' : 'line-through opacity-60' }>
                  {currentConfig.tel.standardLatency}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>FDE Optimized:</span>
                <span className="font-bold text-emerald-500">
                  {currentConfig.tel.optimizedLatency}ms (-{currentConfig.tel.standardLatency - currentConfig.tel.optimizedLatency}ms)
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-current/10 text-[11px] space-y-1 self-start">
              <p className="opacity-70">{currentConfig.tel.vendorSource}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{currentConfig.tel.optimizationNote}</span>
              </p>
            </div>
          </div>

          {/* Card 2: STT */}
          <div className="p-4 rounded-2xl border border-current/10 bg-current/[0.02] lg:row-span-3 grid lg:grid-rows-subgrid">
            <div>
              <label
                htmlFor="select-stt"
                className="block font-mono text-[11px] font-bold uppercase opacity-70 mb-1.5"
              >
                2. Speech-to-Text (STT)
              </label>
              <select
                id="select-stt"
                value={selectedStt}
                onChange={(e) => {
                  setSelectedStt(e.target.value);
                  setActivePresetId('custom');
                }}
                className={`w-full p-2 rounded-lg font-mono text-xs border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-stone-300'
                }`}
              >
                {LATENCY_LAB_MODELS.stt.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between opacity-75">
                <span>Pipecat Median TTFS:</span>
                <span className={ !currentConfig.isOpt ? 'font-bold text-rose-500' : 'line-through opacity-60' }>
                  {currentConfig.stt.standardLatency}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>FDE Tuned VAD:</span>
                <span className="font-bold text-emerald-500">
                  {currentConfig.stt.optimizedLatency}ms (-{currentConfig.stt.standardLatency - currentConfig.stt.optimizedLatency}ms)
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-current/10 text-[11px] space-y-1 self-start">
              <p className="opacity-70">{currentConfig.stt.vendorSource}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{currentConfig.stt.optimizationNote}</span>
              </p>
            </div>
          </div>

          {/* Card 3: LLM + RAG */}
          <div className="p-4 rounded-2xl border border-current/10 bg-current/[0.02] lg:row-span-3 grid lg:grid-rows-subgrid">
            <div>
              <label
                htmlFor="select-llm"
                className="block font-mono text-[11px] font-bold uppercase opacity-70 mb-1.5"
              >
                3. LLM + RAG Orchestration
              </label>
              <select
                id="select-llm"
                value={selectedLlm}
                onChange={(e) => {
                  setSelectedLlm(e.target.value);
                  setActivePresetId('custom');
                }}
                className={`w-full p-2 rounded-lg font-mono text-xs border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-stone-300'
                }`}
              >
                {LATENCY_LAB_MODELS.llm.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between opacity-75">
                <span>Vendor TTFT + RAG:</span>
                <span className={ !currentConfig.isOpt ? 'font-bold text-rose-500' : 'line-through opacity-60' }>
                  {currentConfig.llm.standardTtft + currentConfig.llm.standardRag}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>FDE Cached + HNSW:</span>
                <span className="font-bold text-amber-500">
                  {currentConfig.llm.optimizedTtft + currentConfig.llm.optimizedRag}ms (-
                  {currentConfig.llm.standardTtft +
                    currentConfig.llm.standardRag -
                    (currentConfig.llm.optimizedTtft + currentConfig.llm.optimizedRag)}
                  ms)
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-current/10 text-[11px] space-y-1 self-start">
              <p className="opacity-70">{currentConfig.llm.vendorSource}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{currentConfig.llm.optimizationNote}</span>
              </p>
            </div>
          </div>

          {/* Card 4: TTS */}
          <div className="p-4 rounded-2xl border border-current/10 bg-current/[0.02] lg:row-span-3 grid lg:grid-rows-subgrid">
            <div>
              <label
                htmlFor="select-tts"
                className="block font-mono text-[11px] font-bold uppercase opacity-70 mb-1.5"
              >
                4. Text-to-Speech (TTS)
              </label>
              <select
                id="select-tts"
                value={selectedTts}
                onChange={(e) => {
                  setSelectedTts(e.target.value);
                  setActivePresetId('custom');
                }}
                className={`w-full p-2 rounded-lg font-mono text-xs border outline-none ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-stone-300'
                }`}
              >
                {LATENCY_LAB_MODELS.tts.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3 space-y-1 font-mono text-[11px]">
              <div className="flex justify-between opacity-75">
                <span>Published TTFA:</span>
                <span className={ !currentConfig.isOpt ? 'font-bold text-rose-500' : 'line-through opacity-60' }>
                  {currentConfig.tts.standardLatency}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>FDE WSS Chunked:</span>
                <span className="font-bold text-cyan-500">
                  {currentConfig.tts.optimizedLatency}ms (-{currentConfig.tts.standardLatency - currentConfig.tts.optimizedLatency}ms)
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-current/10 text-[11px] space-y-1 self-start">
              <p className="opacity-70">{currentConfig.tts.vendorSource}</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium flex items-start gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{currentConfig.tts.optimizationNote}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Latency Breakdown Bar */}
        <div className="mt-6 p-5 rounded-2xl border border-current/10 bg-current/[0.03]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase opacity-70">
                Latency Progression:
              </span>
              <span className="font-mono text-xs sm:text-sm px-2.5 py-0.5 rounded bg-rose-500/15 text-rose-500 font-semibold">
                Vendor Standard: {currentConfig.unoptimizedVendorTotal}ms
              </span>
              <span className="opacity-50">&rarr;</span>
              <span className="font-mono text-xs sm:text-sm px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-500 font-semibold">
                FDE Tuned Pipeline: {currentConfig.optimizedPipelineTotal}ms
              </span>
              <span className="opacity-50">&rarr;</span>
              <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-500">
                Perceived TTFA: {currentConfig.perceivedWait}ms
              </span>
            </div>
            <span
              className={`font-mono text-xs font-bold px-3 py-1 rounded-full self-start lg:self-auto whitespace-nowrap ${
                currentConfig.grade.color === 'emerald'
                  ? 'bg-emerald-500/20 text-emerald-500'
                  : currentConfig.grade.color === 'amber'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'bg-rose-500/20 text-rose-500'
              }`}
            >
              {currentConfig.grade.label}
            </span>
          </div>

          <div className="w-full h-8 rounded-xl overflow-hidden flex font-mono text-[11px] font-bold text-slate-950">
            <div
              style={{ width: `${(currentConfig.telLat / currentConfig.activeRawTotal) * 100}%` }}
              className="bg-teal-400 flex items-center justify-center px-1 whitespace-nowrap overflow-hidden"
            >
              Tel {currentConfig.telLat}ms
            </div>
            <div
              style={{ width: `${(currentConfig.sttLat / currentConfig.activeRawTotal) * 100}%` }}
              className="bg-emerald-400 flex items-center justify-center px-1 whitespace-nowrap overflow-hidden"
            >
              STT {currentConfig.sttLat}ms
            </div>
            <div
              style={{ width: `${(currentConfig.llmLat / currentConfig.activeRawTotal) * 100}%` }}
              className={`flex items-center justify-center px-2 whitespace-nowrap overflow-hidden ${
                useContextualFiller ? 'bg-amber-400/80' : 'bg-amber-500'
              }`}
            >
              LLM+RAG {currentConfig.llmLat}ms {useContextualFiller ? '(Masked)' : ''}
            </div>
            <div
              style={{ width: `${(currentConfig.ttsLat / currentConfig.activeRawTotal) * 100}%` }}
              className="bg-cyan-400 flex items-center justify-center px-1 whitespace-nowrap overflow-hidden"
            >
              TTS {currentConfig.ttsLat}ms
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-current/10 flex items-start gap-2.5 text-xs sm:text-sm">
            <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="font-mono text-xs uppercase text-amber-500 mr-2">
                Zia&apos;s FDE Benchmark Note:
              </strong>
              <span className="opacity-90">{currentConfig.fdeNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
