import React from 'react';

/**
 * ============================================================================
 * HAND-DRAWN EXCALIDRAW BLUEPRINT RENDERER
 * Honors Zia's XP-Pen Tablet + Excalidraw system design workflow.
 * ============================================================================
 */
export default function ExcalidrawBlueprintSVG({ studyId, isDark, isExpanded = false }) {
  const strokeColor = isDark ? '#E2E8F0' : '#1E293B';
  const accentColor = isDark ? '#10B981' : '#D97757';
  const secondaryAccent = isDark ? '#F59E0B' : '#059669';
  const boxFill = isDark ? 'rgba(30, 41, 59, 0.65)' : 'rgba(255, 252, 245, 0.95)';
  const svgClass = isExpanded
    ? 'w-full h-auto max-h-[62vh] select-none'
    : 'w-full h-auto select-none';

  if (studyId === 'omnidimension-voice') {
    return (
      <svg
        viewBox="0 0 680 230"
        className={svgClass}
        role="img"
        aria-label="OmniDimension Voice AI Architecture Sketch"
      >
        <defs>
          <pattern id="sketchGrid1" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={isDark ? '#334155' : '#CBD5E1'} />
          </pattern>
        </defs>
        <rect width="680" height="230" rx="12" fill="url(#sketchGrid1)" />
        <g stroke={strokeColor} strokeWidth="1.8" fill={boxFill}>
          <rect x="20" y="65" width="115" height="68" rx="8" strokeDasharray="3,1" />
          <rect x="175" y="25" width="145" height="62" rx="8" stroke={accentColor} strokeWidth="2.2" />
          <rect x="175" y="118" width="145" height="68" rx="8" />
          <rect x="365" y="65" width="130" height="68" rx="8" />
          <rect x="530" y="30" width="130" height="62" rx="8" stroke={secondaryAccent} />
          <rect x="530" y="120" width="130" height="65" rx="8" />
        </g>
        <g stroke={strokeColor} strokeWidth="1.8" fill="none" strokeLinecap="round">
          <path d="M135 95 C 155 75, 160 58, 175 56" stroke={accentColor} />
          <path d="M135 105 C 155 125, 160 145, 175 148" />
          <path d="M320 56 C 342 58, 348 80, 365 92" stroke={accentColor} strokeDasharray="4,3" />
          <path d="M320 150 C 345 145, 350 118, 365 106" />
          <path d="M495 92 C 510 75, 515 62, 530 60" stroke={secondaryAccent} />
          <path d="M495 108 C 512 125, 515 145, 530 150" strokeDasharray="3,3" />
        </g>
        <g fontFamily="monospace" fontSize="10.5" fill={strokeColor}>
          <text x="32" y="92" fontWeight="bold">1. SIP / WSS</text>
          <text x="32" y="108" opacity="0.75">Twilio/Ozonetel</text>
          <text x="32" y="122" opacity="0.75">+ Streaming STT</text>

          <text x="187" y="48" fill={accentColor} fontWeight="bold">⚡ Contextual Filler</text>
          <text x="187" y="64" fontSize="9.5">&lt;120ms Intent Bridge</text>
          <text x="187" y="78" fontSize="9.5">Masks dead-air wait!</text>

          <text x="187" y="142" fontWeight="bold">Voice AI + RAG</text>
          <text x="187" y="158" opacity="0.75">Parallel LLM +</text>
          <text x="187" y="172" opacity="0.75">Slot Validation</text>

          <text x="378" y="94" fontWeight="bold">Streaming TTS</text>
          <text x="378" y="110" opacity="0.75">Chunked PCM</text>
          <text x="378" y="123" fill={accentColor} fontSize="9.5">~380ms Perceived</text>

          <text x="542" y="53" fill={secondaryAccent} fontWeight="bold">CRM Webhooks</text>
          <text x="542" y="69" fontSize="9.5">Odoo / LeadSquared</text>
          <text x="542" y="82" fontSize="9.5">50+ First Month</text>

          <text x="542" y="143" fontWeight="bold">Auto-QA Pipeline</text>
          <text x="542" y="159" fontSize="9.5">100% SOP Scoring</text>
          <text x="542" y="172" fontSize="9.5">+ Alert Bus</text>
        </g>
        <text x="22" y="214" fontFamily="monospace" fontSize="10" fill={accentColor}>
          ✏️ Excalidraw Tablet Note: &quot;Never block the voice loop on synchronous CRM or LLM cold-starts.&quot;
        </text>
      </svg>
    );
  }

  if (studyId === 'healthcare-rag-ksearch') {
    return (
      <svg
        viewBox="0 0 680 230"
        className={svgClass}
        role="img"
        aria-label="MedSearch AI and MLflow Medical RAG Evaluation Sketch"
      >
        <rect width="680" height="230" rx="12" fill="none" />
        <g stroke={strokeColor} strokeWidth="1.8" fill={boxFill}>
          <rect x="20" y="65" width="122" height="82" rx="8" />
          <rect x="175" y="25" width="142" height="68" rx="8" stroke={accentColor} strokeWidth="2.2" />
          <rect x="175" y="115" width="142" height="68" rx="8" />
          <rect x="350" y="65" width="142" height="82" rx="8" stroke={secondaryAccent} strokeWidth="2.2" />
          <rect x="524" y="65" width="136" height="82" rx="8" />
        </g>
        <g stroke={strokeColor} strokeWidth="1.8" fill="none">
          <path d="M142 96 L175 58" stroke={accentColor} />
          <path d="M142 114 L175 148" />
          <path d="M317 58 L350 96" stroke={accentColor} />
          <path d="M317 148 L350 116" />
          <path d="M492 106 L524 106" stroke={secondaryAccent} />
        </g>
        <g fontFamily="monospace" fontSize="10" fill={strokeColor}>
          <text x="30" y="90" fontWeight="bold">PubMedQA Corpus</text>
          <text x="30" y="106" opacity="0.75">100 &amp; 300 Docs</text>
          <text x="30" y="121" opacity="0.75">300-char Chunks</text>
          <text x="30" y="135" opacity="0.75">Gold qrels Labels</text>

          <text x="186" y="48" fill={accentColor} fontWeight="bold">Qdrant Dense</text>
          <text x="186" y="64" fontSize="9.5">Bedrock Titan v2</text>
          <text x="186" y="79" fontSize="9.5">NDCG: 1.14 / 0.947</text>

          <text x="186" y="138" fontWeight="bold">BM25 + RRF(k=60)</text>
          <text x="186" y="154" fontSize="9.5">50/50 Fusion Test</text>
          <text x="186" y="168" fontSize="9.5">Lexical Noise Trap</text>

          <text x="360" y="90" fill={secondaryAccent} fontWeight="bold">LangGraph Agent</text>
          <text x="360" y="106" fontSize="9.5">Relevance Grader</text>
          <text x="360" y="121" fontSize="9.5">+15.3% NDCG Rescue</text>
          <text x="360" y="135" fontSize="9.5">+13.1% MRR Boost</text>

          <text x="534" y="90" fontWeight="bold">MLflow v2.17.2</text>
          <text x="534" y="106" fontSize="9.5">Claude Sonnet 4.5</text>
          <text x="534" y="121" fontSize="9.5">Rel: 0.8094</text>
          <text x="534" y="135" fontSize="9.5">~240-252ms/query</text>
        </g>
        <text x="22" y="214" fontFamily="monospace" fontSize="10" fill={accentColor}>
          ✏️ Excalidraw Tablet Note: &quot;Disproved naive 50/50 BM25 dogma; LangGraph agentic grading rescued hybrid NDCG by +15.3%.&quot;
        </text>
      </svg>
    );
  }

  if (studyId === 'growwth-ryzup-fintech') {
    return (
      <svg
        viewBox="0 0 680 230"
        className={svgClass}
        role="img"
        aria-label="Growwth Partners and RyzUp Sheets Architecture Sketch"
      >
        <g stroke={strokeColor} strokeWidth="1.8" fill={boxFill}>
          <rect x="20" y="35" width="150" height="65" rx="8" />
          <rect x="20" y="120" width="150" height="65" rx="8" stroke={accentColor} />
          <rect x="225" y="72" width="190" height="82" rx="8" stroke={secondaryAccent} strokeWidth="2.2" />
          <rect x="470" y="55" width="185" height="110" rx="8" />
        </g>
        <g stroke={strokeColor} strokeWidth="1.8" fill="none">
          <path d="M170 68 L225 98" />
          <path d="M170 152 L225 122" stroke={accentColor} />
          <path d="M415 112 L470 112" stroke={secondaryAccent} />
        </g>
        <g fontFamily="monospace" fontSize="10.5" fill={strokeColor}>
          <text x="32" y="60" fontWeight="bold">Fintech Web App</text>
          <text x="32" y="76" fontSize="9.5">React + Next.js</text>
          <text x="32" y="90" fontSize="9.5">Bi-dir WebSockets</text>

          <text x="32" y="144" fill={accentColor} fontWeight="bold">RyzUp Google Sheets</text>
          <text x="32" y="160" fontSize="9.5">Standardized React</text>
          <text x="32" y="174" fontSize="9.5">GAS Add-on Bridge</text>

          <text x="238" y="98" fill={secondaryAccent} fontWeight="bold">Low-Latency WS Hub</text>
          <text x="238" y="114" fontSize="9.5">2,400ms -&gt; 240ms (-90%)</text>
          <text x="238" y="129" fontSize="9.5">Redis Pub/Sub + Stream</text>
          <text x="238" y="144" fontSize="9.5">+40% Release Velocity</text>

          <text x="485" y="82" fontWeight="bold">AI Financial Engine</text>
          <text x="485" y="100" fontSize="9.5">• Live P&amp;L Copilot</text>
          <text x="485" y="116" fontSize="9.5">• Referral Engine Core</text>
          <text x="485" y="132" fontSize="9.5">• In-Sheet Formula RPC</text>
          <text x="485" y="148" fontSize="9.5">• 4 Devs Mentored</text>
        </g>
        <text x="22" y="214" fontFamily="monospace" fontSize="10" fill={accentColor}>
          ✏️ Excalidraw Tablet Note: &quot;Unified WebSockets + React GAS framework eliminated polling bottlenecks.&quot;
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 680 230"
      className={svgClass}
      role="img"
      aria-label="Articulate AI and Fastify Redis Sqids Architecture Sketch"
    >
      <g stroke={strokeColor} strokeWidth="1.8" fill={boxFill}>
        <rect x="20" y="65" width="135" height="75" rx="8" />
        <rect x="195" y="65" width="145" height="75" rx="8" stroke={accentColor} strokeWidth="2.2" />
        <rect x="380" y="30" width="130" height="65" rx="8" stroke={secondaryAccent} />
        <rect x="380" y="115" width="130" height="65" rx="8" />
        <rect x="545" y="65" width="115" height="75" rx="8" />
      </g>
      <g stroke={strokeColor} strokeWidth="1.8" fill="none">
        <path d="M155 102 L195 102" stroke={accentColor} />
        <path d="M340 88 L380 62" stroke={secondaryAccent} />
        <path d="M340 116 L380 148" />
        <path d="M510 62 L545 92" />
        <path d="M510 148 L545 112" />
      </g>
      <g fontFamily="monospace" fontSize="10.5" fill={strokeColor}>
        <text x="32" y="92" fontWeight="bold">Client / Voice</text>
        <text x="32" y="108" fontSize="9.5">Articulate AI &amp;</text>
        <text x="32" y="124" fontSize="9.5">Shortlink Edge</text>

        <text x="208" y="92" fill={accentColor} fontWeight="bold">Fastify Core</text>
        <text x="208" y="108" fontSize="9.5">AJV Schema JIT</text>
        <text x="208" y="124" fontSize="9.5">+ Sqids Bijective</text>

        <text x="392" y="55" fill={secondaryAccent} fontWeight="bold">Redis Edge Cache</text>
        <text x="392" y="72" fontSize="9.5">0.42ms Hit Time</text>
        <text x="392" y="85" fontSize="9.5">Rate Limiter</text>

        <text x="392" y="140" fontWeight="bold">Supabase PG</text>
        <text x="392" y="156" fontSize="9.5">Durable Storage</text>
        <text x="392" y="169" fontSize="9.5">Row-Level Sec</text>

        <text x="556" y="95" fontWeight="bold">Telemetry Sink</text>
        <text x="556" y="111" fontSize="9.5">Async Worker</text>
        <text x="556" y="126" fontSize="9.5">Non-blocking</text>
      </g>
      <text x="22" y="214" fontFamily="monospace" fontSize="10" fill={accentColor}>
        ✏️ Excalidraw Tablet Note: &quot;Fastify + Sqids + Redis delivers sub-millisecond reads with zero collisions.&quot;
      </text>
    </svg>
  );
}
