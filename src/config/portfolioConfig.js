import {
  PhoneCall,
  Mic,
  Sparkles,
  Database,
  Volume2,
  ShieldCheck
} from 'lucide-react';

/**
 * ============================================================================
 * PORTFOLIO DOMAIN DATA & ARCHITECTURAL CONTENT CONFIG
 * Single source of truth for MD Ziauddin's interactive systems, case studies,
 * Voice AI latency calculator models, and career graph.
 * ============================================================================
 */

export const ENGINEER_PROFILE = {
  name: 'MD Ziauddin',
  handle: 'ziadev.in',
  role: 'Forward Deployed Engineer (FDE) & Senior AI Systems Engineer',
  shortTitle: 'Forward Deployed AI Engineer',
  experienceYears: '5+ Years',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/md-ziauddin',
  github: 'https://github.com/md-ziauddin',
  ragRepoUrl: 'https://github.com/md-ziauddin/rag_evaluation_pipeline',
  workflowSignature:
    'Tablet + Excalidraw System Sketch -> Benchmark & Telemetry Spec -> Production TypeScript / Python / Fastify',
  summary:
    'Senior Software Engineer and Forward Deployed AI Engineer with 5+ years of experience architecting full-stack platforms, real-time distributed systems, and production-grade Voice AI & GenAI workflows. Proven track record of scaling enterprise Voice AI deployments to 1,000,000+ outbound calls, reducing fintech platform latency by 90%, and delivering mission-critical software for global enterprises including VMware.'
};

export const TELEMETRY_METRICS = [
  {
    id: 'voice-scale',
    value: '1,000,000+',
    label: 'Enterprise Outbound Voice AI Calls',
    detail:
      'Architected and scaled autonomous healthcare & e-commerce Voice AI workflows from design to high-volume production.',
    badge: 'OMNIDIMENSION • PRODUCTION SCALE',
    delta: '99.4% Uptime'
  },
  {
    id: 'latency-cut',
    value: '-90%',
    label: 'Platform Application Latency Reduction',
    detail:
      'Re-architected static request-response workflows into a low-latency bidirectional WebSocket AI assistant architecture.',
    badge: 'GROWWTH PARTNERS • FINTECH CORE',
    delta: '2,400ms -> 240ms'
  },
  {
    id: 'fde-velocity',
    value: '3 Months',
    label: 'Fast-Track Promotion to FDE',
    detail:
      'Promoted within 90 days to spearhead enterprise solution architecture, customer CRM integrations, and live launch triage.',
    badge: 'SWE - GENAI -> FORWARD DEPLOYED ENG',
    delta: 'End-to-End Ownership'
  },
  {
    id: 'release-velocity',
    value: '+40%',
    label: 'Engineering Release Velocity',
    detail:
      'Created a standardized React Google Apps Script (GAS) framework and modular monorepo patterns across product teams.',
    badge: 'SYSTEM STANDARDIZATION & MENTORSHIP',
    delta: '4 Engineers Mentored'
  }
];

export const FDE_VALUE_PILLARS = [
  {
    id: 'pillar-voice-rag',
    badge: '01 • PRODUCTION VOICE & GENAI',
    title: 'Sub-400ms Voice AI & Empirically Benchmarked RAG',
    description:
      'I build AI systems that survive real enterprise traffic, from Dynamic Contextual Fillers masking 1.8s LLM latency across 1,000,000+ calls to MLflow-benchmarked Qdrant + Bedrock medical RAG pipelines (0.9471 NDCG@10).'
  },
  {
    id: 'pillar-distributed-backend',
    badge: '02 • DISTRIBUTED SYSTEMS & FULL-STACK',
    title: '90% Latency Cuts & High-Throughput Primitives',
    description:
      'Whether replacing polling bottlenecks with multiplexed WebSockets + Redis Pub/Sub, securing VMware APIs with OAuth 2.0, or building standardized React GAS frameworks, I focus on tail latency and developer velocity (+40%).'
  },
  {
    id: 'pillar-fde-execution',
    badge: '03 • FORWARD-DEPLOYED LEADERSHIP',
    title: 'Whiteboard Architecture to Live Production Triage',
    description:
      'Promoted to FDE in 3 months at OmniDimension. I work directly with enterprise customers to translate business SOPs into Excalidraw blueprints, integrate Odoo/LeadSquared CRMs, and lead live launch incident resolution.'
  }
];

export const VOICE_PIPELINE_NODES = [
  {
    id: 'telephony',
    step: '01',
    title: 'Telephony Ingress',
    subtitle: 'Twilio / Ozonetel / Exotel',
    icon: PhoneCall,
    standardLatency: 140,
    optimizedLatency: 95,
    protocol: 'SIP Trunking + Bi-dir WebSockets (8kHz mulaw)',
    description:
      'Handles high-concurrency outbound campaign dialing and real-time audio frame streaming across enterprise healthcare and e-commerce lines.',
    fdeOptimization:
      'Tuned jitter buffers and regional WebSocket termination to shave 45ms off raw audio transport overhead.',
    liveTranscript: '[SIP/WSS] Call connected -> Caller: "Hi, I need to reschedule my cardiology visit..."'
  },
  {
    id: 'stt',
    step: '02',
    title: 'Streaming STT & VAD',
    subtitle: 'Deepgram / Soniox / Speechmatics',
    icon: Mic,
    standardLatency: 420,
    optimizedLatency: 165,
    protocol: 'WebSocket Binary Audio Frames + Early Endpointing',
    description:
      'Benchmarked multi-provider STT engines across diverse regional accents and noisy cellular networks to find the optimal accuracy-to-latency frontier.',
    fdeOptimization:
      'Configured custom Voice Activity Detection (VAD) silence thresholds and interim token streaming, cutting turn-detection delay by 255ms.',
    liveTranscript: '[STT Interim 165ms] Intent: appointment_reschedule | Entity: department=cardiology'
  },
  {
    id: 'filler',
    step: '03',
    title: 'Dynamic Contextual Filler',
    subtitle: 'Latency Masking Engine',
    icon: Sparkles,
    standardLatency: 0,
    optimizedLatency: 120,
    isHeroInnovation: true,
    protocol: 'Sub-120ms Intent Classifier + Pre-warmed Audio',
    description:
      'Injects context-aware, natural conversational bridges ("Let me check that schedule for you right now...") while heavy LLM & CRM lookups execute asynchronously.',
    fdeOptimization:
      'Zia’s signature GenAI optimization: reduces perceived conversational dead-air from 1,850ms down to ~380ms during live enterprise calls.',
    liveTranscript: '⚡ Agent (380ms Bridge): "I can certainly help with cardiology - let me check tomorrow afternoon’s slots right now..."'
  },
  {
    id: 'rag_llm',
    step: '04',
    title: 'Voice AI + RAG Engine',
    subtitle: 'Vector Search + LLM Streaming',
    icon: Database,
    standardLatency: 890,
    optimizedLatency: 480,
    protocol: 'Parallel Vector Retrieval + Streaming Tool Calls',
    description:
      'Executes stateful conversation orchestration, querying clinic SOPs and live doctor availability while enforcing strict compliance guardrails.',
    fdeOptimization:
      'Executed vector retrieval in parallel with filler playback so the first verified LLM response token is ready the moment the filler completes.',
    liveTranscript: '[Voice AI + RAG] Retrieved Clinic SOP #14 + 2 open slots (Dr. Mehta, 3:30 PM & 4:15 PM)'
  },
  {
    id: 'tts',
    step: '05',
    title: 'Streaming Neural TTS',
    subtitle: 'Chunked First-Byte Synthesis',
    icon: Volume2,
    standardLatency: 400,
    optimizedLatency: 135,
    protocol: 'PCM / mulaw Byte-Stream Chunking',
    description:
      'Synthesizes ultra-natural voice responses streamed directly into the telephony WebSocket as soon as the first clause is generated.',
    fdeOptimization:
      'Profiled ElevenLabs Flash & Cartesia Sonic streaming chunk sizes to achieve sub-140ms Time-To-First-Audio (TTFA).',
    liveTranscript: '[TTS Stream] Playing verified slot confirmation with zero conversational overlap.'
  },
  {
    id: 'crm_qa',
    step: '06',
    title: 'CRM Sync & Auto-QA',
    subtitle: 'Odoo / LeadSquared + SOP Auditor',
    icon: ShieldCheck,
    standardLatency: 310,
    optimizedLatency: 45,
    protocol: 'Event-Driven Webhooks + Async LLM Compliance Eval',
    description:
      'Writes qualified patient bookings into Odoo/LeadSquared CRMs and runs an automated post-call LLM QA audit against operational SOPs.',
    fdeOptimization:
      'Generated 50+ qualified patient consultations in the first month and automated 100% of post-call SOP compliance scoring.',
    liveTranscript: '[Odoo CRM + QA] Lead #4092 booked • SOP Compliance Score: 98.4% (Pass)'
  }
];

export const CASE_STUDIES = [
  {
    id: 'omnidimension-voice',
    tag: 'ENTERPRISE VOICE AI & QA INFRASTRUCTURE',
    company: 'OmniDimension',
    role: 'Forward Deployed Engineer / SWE - GenAI',
    period: 'Nov 2025 - Oct 2026',
    headline: 'Scaling Autonomous Voice AI to 1M+ Calls with Sub-400ms Perceived Latency',
    problem:
      'Enterprise healthcare and e-commerce voice campaigns suffered from 1.8s+ awkward conversational silences during LLM/CRM lookups, while manual QA teams could only audit <1% of call recordings against strict clinical and operational SOPs.',
    metrics: [
      { label: 'Outbound Volume', value: '1,000,000+ Calls' },
      { label: 'Perceived Latency', value: '~380ms TTFA' },
      { label: 'First Month Conversions', value: '50+ Consultations' },
      { label: 'QA Audit Coverage', value: '100% Automated SOP' }
    ],
    techStack: [
      'TypeScript',
      'Python',
      'Voice AI Pipelines',
      'STT/TTS Benchmarking',
      'WebSockets',
      'Odoo & LeadSquared CRM',
      'Twilio / Ozonetel / Exotel',
      'Event-Driven Alerts'
    ],
    blogSlug: '/showcase/omnidimension-voice-ai-latency',
    blogLabel: 'Read 1M+ Call Architecture Post ->',
    sketchNotes: [
      'Decouple telephony audio loop from synchronous CRM & RAG blocking calls',
      'Trigger <120ms micro-intent filler while the Voice AI pipeline queries RAG',
      'Stream post-call recording to asynchronous LLM SOP Evaluator + Alert Bus'
    ],
    qaSample: [
      {
        criterion: 'HIPAA / Patient Identity Verification',
        score: 98,
        status: 'PASS',
        note: 'Verified DOB & consent within first 18s'
      },
      {
        criterion: 'Turn-Taking Latency (<500ms threshold)',
        score: 95,
        status: 'PASS',
        note: 'Contextual filler masked 640ms Odoo slot lookup'
      },
      {
        criterion: 'Appointment Qualification & CRM Sync',
        score: 100,
        status: 'PASS',
        note: 'LeadSquared webhook confirmed slot #LS-8841'
      }
    ]
  },
  {
    id: 'healthcare-rag-ksearch',
    tag: 'HEALTHCARE AI SIDE PROJECT • MLFLOW RAG BENCHMARKING',
    company: 'MedSearch AI & K-Search Engine',
    role: 'AI Systems Architect (Side Project)',
    period: 'Empirical MLflow Suite',
    headline: 'Empirical Medical RAG Evaluation Pipeline: Qdrant, Bedrock Titan v2 & LangGraph',
    problem:
      'Standard AI dogma assumes naive 50/50 Hybrid BM25 + Dense search always beats dense retrieval. Across 180 MLflow evaluations on PubMedQA (100-doc & 300-doc scale sweeps), naive BM25 matched generic clinical tokens ("patient", "cell"), degrading MRR by ~40% until rescued by an Agentic LangGraph reflection loop.',
    metrics: [
      { label: 'Dense NDCG@10 (100 / 300 Docs)', value: '1.1417 / 0.9471' },
      { label: 'Agentic Hybrid Rescue (Exp 2)', value: '+15.3% NDCG / +13.1% MRR' },
      { label: 'Peak Answer Relevance', value: '0.8094 (Dense Agentic)' },
      { label: 'Scale Sweep Latency (300 Docs)', value: '~240ms - 252ms / query' }
    ],
    techStack: [
      'Python 3.11',
      'FastAPI',
      'Qdrant (v1.12.4)',
      'AWS Bedrock (Titan v2 + Claude Sonnet 4.5)',
      'LangGraph (Agentic RAG)',
      'BM25 + RRF (k=60)',
      'MLflow (v2.17.2)',
      'ranx IR Evals'
    ],
    blogSlug: '/showcase/hybrid-rag-qdrant-benchmarking',
    blogLabel: 'Read Full MLflow Benchmark Report ->',
    repoCommitUrl: 'https://github.com/md-ziauddin/rag_evaluation_pipeline/commit/c4af8e04fe5793619b37927639a270f745ed8740',
    sketchNotes: [
      'PubMedQA (pqa_labeled) -> Recursive Chunking (300 chars, 30 overlap) -> Qdrant v1.12.4 + Bedrock Titan v2 (1,024-dim)',
      'Compare 4 MLflow Runs: Dense+Linear, Dense+Agentic, Hybrid+Linear (RRF k=60), and Hybrid+Agentic (LangGraph)',
      'Agentic LangGraph relevance grading catches BM25 lexical false positives (+15.3% NDCG & +13.1% MRR in 300-doc sweep)'
    ],
    mlflowExperiments: {
      exp1Summary: 'Exp 1 (100 Docs, ~500 Chunks, 15 Queries): Dense NDCG@10 = 1.1417 | MRR@10 = 0.4989 | Answer Relevance = 0.8094 (~500ms/query)',
      exp2Summary: 'Exp 2 Scale Sweep (300 Docs, ~1,500 Chunks, 30 Queries): ~240ms-252ms/query',
      runs: [
        {
          name: 'Run 1: Dense + Linear (Qdrant + Titan v2)',
          mrr10: '0.4450 (Exp 1: 0.4989)',
          ndcg10: '0.9471 (Exp 1: 1.1417)',
          relevance: '0.7955',
          latency: '~251ms',
          barPercent: 95
        },
        {
          name: 'Run 2: Dense + Agentic (LangGraph Reflection)',
          mrr10: '0.4450 (Exp 1: 0.4989)',
          ndcg10: '0.9471 (Exp 1: 1.1417)',
          relevance: '0.8094 (Exp 1 Peak)',
          latency: '~252ms',
          barPercent: 95
        },
        {
          name: 'Run 4: Hybrid + Agentic (LangGraph Rescue)',
          mrr10: '0.2922 (+13.1% vs Linear)',
          ndcg10: '0.6441 (+15.3% vs Linear)',
          relevance: '0.7929',
          latency: '~246ms',
          barPercent: 68
        },
        {
          name: 'Run 3: Hybrid + Linear (Naive 50/50 BM25 + RRF)',
          mrr10: '0.2583 (Lexical Noise)',
          ndcg10: '0.5587',
          relevance: '0.7853',
          latency: '~240ms',
          barPercent: 56
        }
      ]
    }
  },
  {
    id: 'growwth-ryzup-fintech',
    tag: 'REAL-TIME FINTECH & REACT GAS FRAMEWORK',
    company: 'Growwth Partners & RyzUp Sheets',
    role: 'Senior Software Engineer',
    period: 'Jul 2024 - Nov 2025',
    headline: 'Cutting Fintech Latency by 90% & Embedding AI Assistants Inside Google Sheets',
    problem:
      'Financial analysts and CFOs were stuck between a high-latency web platform (2.4s+ polling delays) and fragmented Google Sheets workflows that lacked real-time AI modeling or standardized frontend engineering.',
    metrics: [
      { label: 'Application Latency', value: '-90% (2.4s -> 240ms)' },
      { label: 'Release Velocity', value: '+40% Faster Cycles' },
      { label: 'Team Leadership', value: '4 Engineers Mentored' },
      { label: 'Core Ownership', value: 'AI Assistant & Referral' }
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'WebSockets',
      'Google Apps Script (React GAS)',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Turborepo'
    ],
    externalUrl: 'https://ryzup.ai/',
    blogLabel: 'Visit RyzUp AI Platform ->',
    sketchNotes: [
      'Replace REST polling with multiplexed bidirectional WebSocket channels',
      'Build standardized React + TypeScript bundler bridge for Google Apps Script',
      'Unify AI Assistant & Referral Engine state across Web and Sheets add-on'
    ],
    sheetsPreview: [
      {
        cell: 'A1:D1',
        formula: '=RYZUP_AI("Analyze Q3 SaaS burn vs ARR")',
        output: 'Net burn improved 18.4%; CAC payback 11.2 mos'
      },
      {
        cell: 'A2:D2',
        formula: '=RYZUP_FORECAST(B2:M2, "runway_months")',
        output: '22.4 Months Runway (+3.2 mos optimized)'
      },
      {
        cell: 'A3:D3',
        formula: '=RYZUP_AUDIT("Flag anomalies > 15% MoM")',
        output: '2 cloud infra spikes flagged ($4,820 variance)'
      }
    ]
  },
  {
    id: 'articulate-micro-systems',
    tag: 'REAL-TIME VOICE & HIGH-THROUGHPUT BACKEND PRIMITIVES',
    company: 'Articulate AI & Core Micro-Systems',
    role: 'Lead Systems Architect',
    period: 'Open Architecture Project',
    headline: 'Articulate AI Mock Interviewer & Sub-Millisecond Fastify + Redis + Sqids Engine',
    problem:
      'Building responsive consumer voice coaching and high-throughput link/telemetry primitives requires zero-bloat backend engineering where every millisecond of serialization and cache lookup counts.',
    metrics: [
      { label: 'Cache Hit Latency', value: '0.42ms Redis Lookup' },
      { label: 'ID Obfuscation', value: 'Collision-Free Sqids' },
      { label: 'API Framework', value: 'Fastify JSON Schema' },
      { label: 'Persistence', value: 'Supabase PostgreSQL' }
    ],
    techStack: [
      'Fastify',
      'Redis',
      'Sqids',
      'Supabase',
      'PostgreSQL',
      'Next.js',
      'WebRTC / Voice AI',
      'System Design'
    ],
    blogSlug: '/showcase/articulate-ai',
    blogLabel: 'Read Articulate AI Deep-Dive ->',
    sketchNotes: [
      'Fastify + AJV pre-compiled schemas for 3x faster JSON serialization',
      'Sqids bijective encoding from Postgres sequences -> Redis write-through cache',
      'Async analytics flush to Supabase so redirect path never blocks on DB I/O'
    ]
  }
];

/**
 * Published Vendor Benchmarks (Pipecat STT, Coval/Gradium TTS, Artificial Analysis LLM TTFT)
 * paired with our FDE Pipeline Optimizations so visitors can inspect both the raw vendor
 * baseline and our concrete engineering optimizations.
 */
export const LATENCY_LAB_MODELS = {
  telephony: [
    {
      id: 'twilio_edge',
      name: 'Twilio Media Streams (WSS)',
      standardLatency: 160,
      optimizedLatency: 95,
      region: 'Global Edge',
      vendorSource: 'Standard multi-hop WSS relay + default jitter buffer (160ms)',
      optimizationNote: 'Pinned regional edge WSS termination + 20ms mulaw frame pacing (-65ms)'
    },
    {
      id: 'ozonetel_exotel',
      name: 'Ozonetel / Exotel SIP-WSS',
      standardLatency: 220,
      optimizedLatency: 130,
      region: 'APAC / Enterprise',
      vendorSource: 'Standard PSTN SIP trunk + gateway bridge buffer (220ms)',
      optimizationNote: 'Direct regional SIP-WSS peering & reduced gateway framing (-90ms)'
    },
    {
      id: 'webrtc_direct',
      name: 'Direct WebRTC (Opus Edge)',
      standardLatency: 110,
      optimizedLatency: 55,
      region: 'Browser / Mobile',
      vendorSource: 'Standard TURN relay WebRTC audio transport (110ms)',
      optimizationNote: 'Direct STUN/ICE peer routing + 20ms Opus in-band FEC (-55ms)'
    }
  ],
  stt: [
    {
      id: 'deepgram_nova3',
      name: 'Deepgram Nova-3 Streaming',
      standardLatency: 247,
      optimizedLatency: 165,
      accuracy: '96.8% WER',
      vendorSource: 'Published Pipecat median TTFS (Time-to-Final-Segment): 247ms (TTFT ~91-131ms)',
      optimizationNote: 'Persistent WSS + custom 220ms VAD endpointing & interim token trigger (-82ms)'
    },
    {
      id: 'soniox_streaming',
      name: 'Soniox Real-Time (stt-rt-v5)',
      standardLatency: 260,
      optimizedLatency: 180,
      accuracy: '97.2% Medical',
      vendorSource: 'Published Pipecat median TTFS benchmark: 260ms (P95: 305ms)',
      optimizationNote: 'Early endpoint detection + medical domain token boosting (-80ms)'
    },
    {
      id: 'speechmatics',
      name: 'Speechmatics Enterprise',
      standardLatency: 495,
      optimizedLatency: 310,
      accuracy: '98.1% Multi-Accent',
      vendorSource: 'Published Pipecat median TTFS benchmark: 495ms (P95: 676ms)',
      optimizationNote: 'Configured low-latency max_delay operating point + partial transcript routing (-185ms)'
    }
  ],
  llm: [
    {
      id: 'gpt4o_mini_rag',
      name: 'GPT-4o-mini + Qdrant RAG',
      standardTtft: 220,
      standardRag: 240,
      optimizedTtft: 145,
      optimizedRag: 150,
      vendorSource: 'Published median TTFT ~220ms (Artificial Analysis) + 240ms uncached RAG = 460ms',
      optimizationNote: 'Prompt prefix caching (145ms TTFT) + HNSW RAM-pinned Qdrant (150ms) (-165ms)'
    },
    {
      id: 'claude_haiku_bedrock',
      name: 'Claude 3.5 Haiku (Bedrock)',
      standardTtft: 390,
      standardRag: 250,
      optimizedTtft: 260,
      optimizedRag: 150,
      vendorSource: 'Published AWS Bedrock median TTFT ~390ms + 250ms RAG lookup = 640ms',
      optimizationNote: 'VPC-peered Bedrock streaming (260ms TTFT) + parallel Qdrant query (150ms) (-230ms)'
    },
    {
      id: 'gpt4o_complex_rag',
      name: 'GPT-4o + Multi-Hop RAG',
      standardTtft: 520,
      standardRag: 460,
      optimizedTtft: 360,
      optimizedRag: 250,
      vendorSource: 'Published GPT-4o median TTFT ~520ms + 460ms multi-hop retrieval = 980ms',
      optimizationNote: 'Speculative parallel RAG pre-fetch on interim STT tokens (-370ms)'
    }
  ],
  tts: [
    {
      id: 'cartesia_sonic',
      name: 'Cartesia Sonic-3 (SSM)',
      standardLatency: 190,
      optimizedLatency: 95,
      quality: 'Ultra-Low TTFB',
      vendorSource: 'Published independent median TTFA: ~190ms (Server-only TTFB ~80-90ms)',
      optimizationNote: 'Persistent WSS + raw 8kHz PCM/mulaw byte-stream chunking (-95ms)'
    },
    {
      id: 'elevenlabs_flash',
      name: 'ElevenLabs Flash v2.5',
      standardLatency: 188,
      optimizedLatency: 125,
      quality: 'High Expressiveness',
      vendorSource: 'Published Coval/Gradium median TTFA: 188ms (Server-only TTFB ~75ms)',
      optimizationNote: 'WSS connection pooling + clause-boundary streaming schedule (-63ms)'
    },
    {
      id: 'deepgram_aura2',
      name: 'Deepgram Aura-2 Enterprise',
      standardLatency: 301,
      optimizedLatency: 155,
      quality: 'Enterprise Telephony',
      vendorSource: 'Published Coval independent median TTFA: 301ms (Steady-state TTFB ~90-200ms)',
      optimizationNote: 'Co-located Deepgram STT-to-Aura WSS audio loop with zero HTTP handshakes (-146ms)'
    }
  ]
};

export const LATENCY_LAB_PRESETS = [
  {
    id: 'unoptimized-vendor-baseline',
    label: '1. Published Vendor Baseline (Unoptimized)',
    telephony: 'ozonetel_exotel',
    stt: 'speechmatics',
    llm: 'gpt4o_complex_rag',
    tts: 'deepgram_aura2',
    stackMode: 'standard',
    filler: false
  },
  {
    id: 'omnidimension-prod',
    label: '2. OmniDimension FDE Stack (Optimized + Filler)',
    telephony: 'twilio_edge',
    stt: 'deepgram_nova3',
    llm: 'gpt4o_mini_rag',
    tts: 'cartesia_sonic',
    stackMode: 'optimized',
    filler: true
  },
  {
    id: 'healthcare-hipaa',
    label: '3. Healthcare HIPAA Stack (Soniox + Bedrock)',
    telephony: 'twilio_edge',
    stt: 'soniox_streaming',
    llm: 'claude_haiku_bedrock',
    tts: 'elevenlabs_flash',
    stackMode: 'optimized',
    filler: true
  }
];

export const CAREER_TIMELINE = [
  {
    id: 'omnidimension-fde',
    role: 'Forward Deployed Engineer (FDE)',
    company: 'OmniDimension',
    period: 'Feb 2026 - Oct 2026',
    location: 'India',
    badge: 'PROMOTED IN 3 MONTHS',
    highlight:
      'Spearheaded enterprise Voice AI deployments across 1,000,000+ outbound healthcare & e-commerce calls.',
    bullets: [
      'Promoted from Software Engineer within 90 days to own end-to-end enterprise solution architecture from Excalidraw blueprint through production launch.',
      'Profiled and benchmarked multi-vendor LLM, STT, and TTS matrices to hit sub-400ms perceived conversational turn-taking.',
      'Engineered bidirectional integrations with Odoo and LeadSquared CRMs plus hospital scheduling engines, driving 50+ qualified patient consultations in the first month.',
      'Acted as primary engineering liaison for enterprise rollouts, leading live production triage, root-cause validation, and cross-team incident resolution.'
    ],
    skills: ['Voice AI', 'RAG Pipelines', 'STT/TTS Benchmarking', 'Odoo / LeadSquared', 'Production Triage']
  },
  {
    id: 'omnidimension-genai',
    role: 'Software Engineer - GenAI',
    company: 'OmniDimension',
    period: 'Nov 2025 - Feb 2026',
    location: 'India',
    badge: 'CORE GENAI INFRASTRUCTURE',
    highlight:
      'Built the Dynamic Contextual Filler latency-masking system and automated LLM SOP compliance auditing pipeline.',
    bullets: [
      'Engineered a Dynamic Contextual Filler system to mask LLM inference and backend network latency during live voice calls.',
      'Architected an automated LLM-based QA and compliance pipeline auditing 100% of call recordings against operational SOPs and proprietary scoring matrices.',
      'Designed a real-time, rule-based notification framework (broadcast & user-specific alerts) and automated campaign analytics reporting.'
    ],
    skills: ['LLMs & RAG', 'Dynamic Latency Masking', 'Automated LLM Evals', 'Event-Driven Alerts', 'TypeScript / Python']
  },
  {
    id: 'growwth-senior',
    role: 'Senior Software Engineer',
    company: 'Growwth Partners (RyzUp AI)',
    period: 'Jul 2024 - Nov 2025',
    location: 'India',
    badge: '-90% LATENCY • +40% VELOCITY',
    highlight:
      'Led core architectural overhaul of an AI-powered fintech platform and created a standardized React Google Apps Script framework.',
    bullets: [
      'Reduced fintech application latency by 90% and accelerated release velocity by 40% through scalable distributed system design.',
      'Designed and implemented a bidirectional WebSocket communication layer transforming a static web app into a real-time interactive AI financial assistant.',
      'Owned technical architecture, code reviews, and multi-release delivery for flagship AI Assistant and Referral Engine initiatives.',
      'Created a standardized React Google Apps Script (GAS) framework for RyzUp Sheets and mentored 4 junior engineers in system design.'
    ],
    skills: ['WebSockets', 'React.js / Next.js', 'Google Apps Script (GAS)', 'System Architecture', 'Team Mentorship (4 Devs)']
  },
  {
    id: 'copods-vmware-ariksa',
    role: 'Software Engineer (Embedded at VMware & Ariksa)',
    company: 'Copods',
    period: 'Aug 2021 - Apr 2024',
    location: 'India',
    badge: 'ENTERPRISE SECURITY & ANTV G6',
    highlight:
      'Delivered mission-critical OAuth 2.0 security migrations and subscription portals for VMware alongside AntV G6 topology graphs for Ariksa.',
    bullets: [
      'VMware (Mar 2022 - Aug 2023): Led migration of legacy authentication to OAuth 2.0, eliminating security vulnerabilities across core enterprise licensing portals.',
      'VMware: Served as sole UI engineer for company-wide rebranding and built complex subscription & revenue workflows in React.',
      'Ariksa (Aug 2021 - Mar 2022): Engineered real-time infrastructure monitoring dashboards and interactive VM dependency graphs using AntV G6.',
      'Spearheaded multiple React + Node.js + AWS proof-of-concepts (POCs) that secured stakeholder buy-in and green-lit two major enterprise contracts.'
    ],
    skills: ['OAuth 2.0 Security', 'VMware Enterprise UI', 'AntV G6 Graph Visualization', 'React / Node.js', 'AWS / Docker / K8s']
  },
  {
    id: 'early-career',
    role: 'Frontend Engineer & IT Systems Intern',
    company: 'Birbal & Unique Infotech',
    period: 'Jun 2019 - Jul 2021',
    location: 'India',
    badge: 'FOUNDATIONAL SYSTEMS',
    highlight:
      'Built reusable MERN component libraries and automated 100+ machine provisioning workflows.',
    bullets: [
      'Birbal (Apr 2021 - Jul 2021): Translated Figma design systems into high-performance, reusable React & MERN stack components.',
      'Unique Infotech (Jun 2019 - Sep 2019): Programmed batch automation scripts that accelerated 100+ desktop setups by >50% and designed SQL/Python inventory schemas.'
    ],
    skills: ['MERN Stack', 'Figma to React', 'SQL & Python', 'Batch Automation']
  }
];

export const PEER_RECOMMENDATIONS = [
  {
    author: 'Arnab Khound',
    title: 'Director UX @ Netskope (Ex-VMware)',
    relationship: 'Collaborated on multiple VMware enterprise initiatives',
    quote:
      'Zia has always been very meticulous in his approach and hard-working. I collaborated with him on multiple assignments and it was always good to work with him. He will add great value to any engineering team.'
  },
  {
    author: 'Arfa Bakhtiar',
    title: 'Member of Technical Staff (MTS) @ VMware',
    relationship: 'Direct engineering collaborator at VMware',
    quote:
      'Ziauddin is proactive, result-oriented, responsible, and technically sound. His development skills are excellent and he is always ready to put in the effort to get mission-critical work done. A great asset to any company.'
  },
  {
    author: 'Sanket Kadarkar',
    title: 'Sr. Software Engineer @ Spotnana (Ex-VMware, IITB)',
    relationship: 'Backend partner on critical VMware projects',
    quote:
      'For me and many of us from the backend team, Zia was the go-to person for frontend architecture. His due diligence to understand the end-to-end use case enabled us to deliver performance-optimized frontend and backend integrations on time with high quality.'
  },
  {
    author: 'Shivi Makwana',
    title: 'Test Automation Engineer @ VMware',
    relationship: 'Quality & release partner at VMware',
    quote: 'He is a very cooperative and expert UI developer.'
  }
];
