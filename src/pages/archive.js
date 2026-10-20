import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { ArrowLeft, ArrowUpRight, BookOpen, FolderGit2, Moon, Sun } from 'lucide-react';
import { ENGINEER_PROFILE } from '../config/portfolioConfig';
import useBlueprintTheme from '../hooks/useBlueprintTheme';
import SeoAeo from '../components/seo/SeoAeo';

/**
 * ============================================================================
 * ARCHIVE & ENGINEERING BLOG INDEX (/archive)
 * Unified Dual-Theme index of all Engineering Articles, Flagship Case Studies,
 * and Enterprise Client Deliveries (VMware, Ariksa, OmniDimension, Growwth).
 * ============================================================================
 */
const ArchivePage = () => {
  const { isDark, toggleTheme } = useBlueprintTheme('blueprint');

  const data = useStaticQuery(graphql`
    query BlueprintArchiveQuery {
      allPortfolioData {
        edges {
          node {
            archive {
              year
              title
              company
              technologies
              link
            }
          }
        }
      }
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            slug
            tags
          }
        }
      }
    }
  `);

  const legacyArchive = data?.allPortfolioData?.edges?.[0]?.node?.archive || [];
  const mdxPosts = data?.allMdx?.nodes || [];

  const fullProjectRows = [
    {
      year: '2026',
      title: 'Enterprise Autonomous Voice AI & Auto-QA (1M+ Calls)',
      company: 'OmniDimension',
      technologies: ['TypeScript', 'Python', 'Voice AI Pipelines', 'STT/TTS', 'Odoo / LeadSquared'],
      link: '/showcase/omnidimension-voice-ai-latency',
      internal: true
    },
    {
      year: '2026',
      title: 'MedSearch AI & K-Search Medical RAG Pipeline (0.9471 / 1.1417 NDCG@10)',
      company: 'Independent Side Project',
      technologies: ['Qdrant', 'AWS Bedrock Titan v2', 'LangGraph', 'MLflow v2.17.2', 'FastAPI'],
      link: '/showcase/hybrid-rag-qdrant-benchmarking',
      internal: true
    },
    {
      year: '2025',
      title: 'RyzUp Sheets React GAS Framework & Real-Time Fintech AI',
      company: 'Growwth Partners',
      technologies: ['React.js', 'WebSockets', 'Google Apps Script', 'Node.js', 'Redis'],
      link: 'https://ryzup.ai/',
      internal: false
    },
    {
      year: '2025',
      title: 'Articulate AI - Real-Time WebRTC & Gemini Voice Interviewer',
      company: 'Open Architecture',
      technologies: ['Next.js', 'Nest.js', 'WebRTC', 'Gemini Live API', 'Supabase'],
      link: '/showcase/articulate-ai',
      internal: true
    },
    ...legacyArchive.map((item) => ({ ...item, internal: false }))
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-emerald-500 selection:text-slate-950 ${
        isDark ? 'bg-[#0B0D10] text-slate-100 dark' : 'bg-[#FAF8F5] text-[#141413]'
      }`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
          : 'radial-gradient(rgba(20, 20, 19, 0.07) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <SeoAeo
        title="Engineering Archive & Blog Index"
        description="Complete archive of MD Ziauddin's enterprise AI systems, Voice AI architectures, VMware deliveries, and technical blog posts."
        pathname="/archive"
        isDark={isDark}
      />

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-[#0B0D10]/85 border-slate-800/80'
            : 'bg-[#FAF8F5]/85 border-stone-200/90'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-xl border transition-all whitespace-nowrap shrink-0 ${
              isDark
                ? 'border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60'
                : 'border-stone-300 text-stone-700 hover:text-black hover:border-stone-400 bg-white'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Back to {ENGINEER_PROFILE.name}</span>
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-amber-300 hover:border-slate-600'
                : 'bg-white border-stone-300 text-stone-800 hover:bg-stone-100'
            }`}
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
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Section 1: Blog Posts */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-500/15 text-emerald-500 mb-3">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>TECHNICAL BLOG &amp; SYSTEM NOTES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Field Notes &amp; System Archive
          </h1>
          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-2xl">
            All technical write-ups and historical enterprise systems built across OmniDimension, Growwth Partners, VMware, and Ariksa.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:[grid-template-rows:auto_auto_1fr_auto]">
            {mdxPosts.map((post) => {
              const slug = post.frontmatter.slug.replace(/^\/+|\/+$/g, '');
              return (
                <Link
                  key={post.id}
                  to={`/showcase/${slug}`}
                  className={`p-5 rounded-2xl border md:row-span-4 grid md:grid-rows-subgrid gap-0 transition-all ${
                    isDark
                      ? 'bg-[#11151C]/90 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-stone-200 hover:border-emerald-600/50 shadow-sm'
                  }`}
                >
                  {/* Row 1: Date */}
                  <div className="font-mono text-xs text-emerald-500 font-bold pb-2">
                    {post.frontmatter.date}
                  </div>

                  {/* Row 2: Title */}
                  <h2 className="font-bold text-base leading-snug pb-2.5">
                    {post.frontmatter.title}
                  </h2>

                  {/* Row 3: Description */}
                  <div className="pb-4">
                    <p className="text-xs opacity-80 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                  </div>

                  {/* Row 4: Action */}
                  <div className="pt-3 border-t border-current/10 font-mono text-xs font-bold text-emerald-500 inline-flex items-center gap-1">
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 2: Complete Project Ledger Table */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-amber-500/15 text-amber-500 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 shrink-0" />
            <span>CHRONOLOGICAL SYSTEM LEDGER (2021 - 2026)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            All Production Deployments &amp; Projects
          </h2>

          <div
            className={`rounded-2xl border overflow-hidden ${
              isDark ? 'bg-[#11151C]/90 border-slate-800' : 'bg-white border-stone-200 shadow-sm'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-current/10 font-mono text-xs uppercase opacity-70">
                    <th className="py-3.5 px-4">Year</th>
                    <th className="py-3.5 px-4">System / Project</th>
                    <th className="py-3.5 px-4 hidden sm:table-cell">Organization</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">Architecture Stack</th>
                    <th className="py-3.5 px-4">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-current/10 text-xs sm:text-sm">
                  {fullProjectRows.map((project, index) => (
                    <tr key={index} className="hover:bg-current/[0.02] transition-colors">
                      <td className="py-4 px-4 font-mono text-xs opacity-70 whitespace-nowrap">
                        {project.year}
                      </td>
                      <td className="py-4 px-4 font-bold">{project.title}</td>
                      <td className="py-4 px-4 hidden sm:table-cell opacity-80 whitespace-nowrap">
                        {project.company}
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1.5">
                          {(project.technologies || []).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded font-mono text-[11px] bg-emerald-500/10 text-emerald-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono text-xs whitespace-nowrap">
                        {project.internal ? (
                          <Link
                            to={project.link}
                            className="text-emerald-500 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            <span>Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-500 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            <span>Inspect</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArchivePage;