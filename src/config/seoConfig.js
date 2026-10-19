/**
 * ============================================================================
 * CENTRALIZED SEO & AEO (ANSWER ENGINE OPTIMIZATION) CONFIGURATION
 * Single source of truth for Search Engines (Google, Bing) and AI Answer
 * Engines (Perplexity, ChatGPT Search, Claude, Google AI Overviews, Copilot).
 * ============================================================================
 */

export const SEO_AEO_CONFIG = {
  siteUrl: 'https://ziadev.in',
  siteName: 'MD Ziauddin - Forward Deployed AI & Systems Architect',
  defaultTitle: 'MD Ziauddin | Forward Deployed Engineer (FDE) & Senior AI Systems Architect',
  titleTemplate: '%s | MD Ziauddin',
  defaultDescription:
    'Senior Software Engineer and Forward Deployed AI Engineer (5+ yrs) specializing in production Voice AI (1,000,000+ outbound calls at OmniDimension), sub-400ms conversational latency mitigation, MLflow-benchmarked Qdrant + Bedrock medical RAG architectures, and low-latency distributed systems (TypeScript, Python, Fastify, React, Next.js, AWS/GCP).',
  author: 'MD Ziauddin',
  handle: '@md-ziauddin',
  locale: 'en_US',
  language: 'en',
  themeColorPaper: '#FAF8F5',
  themeColorDark: '#0B0D10',
  canonicalDomain: 'ziadev.in',
  llmsTxtPath: '/llms.txt',
  llmsFullTxtPath: '/llms-full.txt',
  sitemapPath: '/sitemap-index.xml',

  social: {
    linkedin: 'https://www.linkedin.com/in/md-ziauddin',
    github: 'https://github.com/md-ziauddin',
    portfolio: 'https://ziadev.in'
  },

  keywords: [
    'MD Ziauddin',
    'ziadev.in',
    'Forward Deployed Engineer',
    'FDE AI Engineer',
    'Senior Software Engineer AI',
    'Voice AI Architect',
    'Conversational Latency Mitigation',
    'Dynamic Contextual Filler',
    'OmniDimension Voice AI',
    'LangGraph Production Workflows',
    'Hybrid RAG Qdrant Weaviate MLflow',
    'STT TTS Benchmarking',
    'Fastify Redis Sqids System Design',
    'React Google Apps Script GAS Framework',
    'RyzUp Sheets AI',
    'Enterprise AI Engineer India'
  ],

  /**
   * Schema.org Person & Professional Profile Entity
   */
  personEntity: {
    '@type': 'Person',
    '@id': 'https://ziadev.in/#person',
    name: 'MD Ziauddin',
    alternateName: ['Zia', 'Ziauddin', 'ziadev'],
    jobTitle: 'Forward Deployed Engineer (FDE) & Senior AI Systems Engineer',
    description:
      'Senior Software Engineer and Forward Deployed AI Engineer with 5+ years of experience scaling enterprise Voice AI deployments to 1,000,000+ outbound calls, reducing fintech platform latency by 90%, and delivering mission-critical software for global enterprises including VMware.',
    url: 'https://ziadev.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'OmniDimension',
      description: 'Enterprise Production Voice AI & Autonomous Agent Platform'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Future Institute of Engineering and Management',
      department: 'Bachelor of Technology (B.Tech) in Information Technology (2017-2021)'
    },
    sameAs: [
      'https://www.linkedin.com/in/md-ziauddin',
      'https://github.com/md-ziauddin'
    ],
    knowsAbout: [
      'Production Voice AI Systems',
      'Conversational Latency Mitigation & Dynamic Contextual Fillers',
      'Speech-to-Text (STT) and Text-to-Speech (TTS) Benchmarking',
      'Large Language Models (LLMs) & Agentic Workflows (LangGraph, LangChain)',
      'Retrieval-Augmented Generation (RAG) & Vector Databases (Qdrant, Weaviate, MLflow)',
      'Automated LLM Evaluation & SOP Compliance Pipelines',
      'Distributed Backend Engineering (TypeScript, Node.js, Fastify, Python)',
      'Real-Time Bidirectional WebSockets & WebRTC Audio Streaming',
      'Enterprise CRM Integrations (Odoo, LeadSquared, Twilio, Exotel, Ozonetel)',
      'Full-Stack React.js, Next.js & Standardized Google Apps Script (React GAS)',
      'OAuth 2.0 Enterprise Security & AntV G6 Infrastructure Graph Visualization',
      'Cloud Infrastructure (AWS Bedrock, GCP, Azure, Docker, Kubernetes, Supabase)'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Bachelor of Technology (B.Tech) in Information Technology',
        credentialCategory: 'Degree',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'Future Institute of Engineering and Management'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Become an AI Engineer',
        recognizedBy: { '@type': 'Organization', name: 'LinkedIn Learning' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: '5-Day GenAI Intensive',
        recognizedBy: { '@type': 'Organization', name: 'Google & Kaggle' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google Cloud Machine Learning Engineer Learning Path',
        recognizedBy: { '@type': 'Organization', name: 'Google Cloud' }
      }
    ]
  },

  /**
   * AEO (Answer Engine Optimization) Structured Q&A Pairs
   */
  aeoFaqs: [
    {
      id: 'who-is-md-ziauddin',
      question: 'Who is MD Ziauddin and what is his core engineering specialization?',
      answer:
        'MD Ziauddin (ziadev.in) is a Senior Software Engineer and Forward Deployed AI Engineer (FDE) based in India with 5+ years of production experience. He specializes in turning complex AI and distributed architectures into low-latency production systems - most notably scaling autonomous enterprise Voice AI campaigns to 1,000,000+ outbound calls at OmniDimension, cutting fintech application latency by 90% at Growwth Partners, and modernizing enterprise licensing & OAuth 2.0 systems for VMware.'
    },
    {
      id: 'voice-ai-latency-mitigation',
      question: 'How did MD Ziauddin reduce Voice AI conversational latency from 1,850ms to ~380ms?',
      answer:
        'Standard sequential Voice AI pipelines block on STT endpointing, RAG retrieval, LLM inference, and synchronous CRM webhooks, causing 1.8s+ of awkward dead-air. MD Ziauddin engineered a sub-120ms Dynamic Contextual Filler engine that classifies caller intent immediately after VAD/STT and streams natural conversational bridges while the Voice AI pipeline queries RAG and Odoo/LeadSquared CRM operations asynchronously - reducing perceived Time-To-First-Audio (TTFA) to ~380ms.'
    },
    {
      id: 'hybrid-rag-benchmarks',
      question: 'What were the findings of MD Ziauddin’s MLflow Medical RAG Evaluation Pipeline?',
      answer:
        'Across 180 MLflow evaluations on PubMedQA (100-doc and 300-doc sweeps) using Qdrant v1.12.4, AWS Bedrock Titan v2 embeddings (1,024-dim), and Claude Sonnet 4.5, MD Ziauddin demonstrated that pure dense retrieval achieved 1.1417 NDCG@10 (100 docs) and 0.9471 NDCG@10 (300 docs), while naive 50/50 BM25 + Dense fusion degraded MRR by ~40% due to lexical collisions on common medical terms. Adding a self-correcting LangGraph Agentic relevance grading loop rescued hybrid NDCG@10 by +15.3% (0.5587 to 0.6441) and MRR@10 by +13.1% at ~246ms per query.'
    },
    {
      id: 'forward-deployed-role',
      question: 'What makes MD Ziauddin effective as a Forward Deployed Engineer (FDE) or Tech Lead?',
      answer:
        'At OmniDimension, MD Ziauddin was promoted from Software Engineer to Forward Deployed Engineer within 3 months. He operates across the entire lifecycle: sketching system architectures on his tablet in Excalidraw with customer stakeholders, benchmarking STT/LLM/TTS model matrices, building bidirectional CRM integrations (driving 50+ qualified patient consultations in the first month), and leading live production triage across engineering teams.'
    },
    {
      id: 'hiring-availability',
      question: 'What roles is MD Ziauddin open to and how can hiring teams reach him?',
      answer:
        'MD Ziauddin is available for high-impact Forward Deployed Engineer (FDE), Senior AI Systems Engineer, Staff/Lead Full-Stack Engineer, and Solution Architect roles (remote, hybrid, or onsite in India & globally). Connect with him directly on LinkedIn at linkedin.com/in/md-ziauddin or explore his work on GitHub at github.com/md-ziauddin.'
    }
  ]
};

/**
 * Helper to build the complete Schema.org JSON-LD @graph for any page or MDX article
 */
export function buildJsonLdGraph({
  pathname = '/',
  pageTitle,
  pageDescription,
  article = null
} = {}) {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const fullUrl = `${SEO_AEO_CONFIG.siteUrl}${cleanPath}`;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SEO_AEO_CONFIG.siteUrl}/#website`,
      url: SEO_AEO_CONFIG.siteUrl,
      name: SEO_AEO_CONFIG.siteName,
      description: SEO_AEO_CONFIG.defaultDescription,
      inLanguage: SEO_AEO_CONFIG.language,
      publisher: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#person` }
    },
    SEO_AEO_CONFIG.personEntity,
    {
      '@type': article ? 'WebPage' : 'ProfilePage',
      '@id': `${fullUrl}#webpage`,
      url: fullUrl,
      name: pageTitle || SEO_AEO_CONFIG.defaultTitle,
      description: pageDescription || SEO_AEO_CONFIG.defaultDescription,
      isPartOf: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#website` },
      about: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#person` },
      mainEntity: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#person` },
      inLanguage: SEO_AEO_CONFIG.language
    }
  ];

  // Include FAQPage schema on homepage / portfolio page for Answer Engine Optimization
  if (!article) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${SEO_AEO_CONFIG.siteUrl}/#faq`,
      mainEntity: SEO_AEO_CONFIG.aeoFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  // Include TechArticle + BreadcrumbList schema for MDX blog / case study pages
  if (article) {
    graph.push(
      {
        '@type': 'TechArticle',
        '@id': `${fullUrl}#article`,
        headline: article.title,
        description: article.description || pageDescription || SEO_AEO_CONFIG.defaultDescription,
        datePublished: article.dateIso || article.date,
        dateModified: article.dateIso || article.date,
        author: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#person` },
        publisher: { '@id': `${SEO_AEO_CONFIG.siteUrl}/#person` },
        mainEntityOfPage: { '@id': `${fullUrl}#webpage` },
        keywords: Array.isArray(article.tags) ? article.tags.join(', ') : '',
        proficiencyLevel: 'Expert'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${fullUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'MD Ziauddin Portfolio',
            item: SEO_AEO_CONFIG.siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Engineering Field Notes & Case Studies',
            item: `${SEO_AEO_CONFIG.siteUrl}/#blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: fullUrl
          }
        ]
      }
    );
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}
