import React, { useState, useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Calendar,
  ExternalLink,
  Layers,
  Maximize2,
  Moon,
  PenTool,
  Sun,
  X
} from 'lucide-react';
import { CASE_STUDIES, ENGINEER_PROFILE } from '../config/portfolioConfig';
import useBlueprintTheme from '../hooks/useBlueprintTheme';
import ExcalidrawBlueprintSVG from '../components/blueprint/ExcalidrawBlueprintSVG';
import SeoAeo from '../components/seo/SeoAeo';

const SLUG_TO_STUDY_ID = {
  'omnidimension-voice-ai-latency': 'omnidimension-voice',
  'hybrid-rag-qdrant-benchmarking': 'healthcare-rag-ksearch',
  'articulate-ai': 'articulate-micro-systems'
};

/**
 * ============================================================================
 * ENGINEERING BLOG & CASE STUDY TEMPLATE
 * Styled in the Dual-Theme "Tactile Engineering Blueprint" design system
 * with custom MDX component primitives (tables, code badges, callouts, diagrams).
 * ============================================================================
 */
const ProjectShowcaseTemplate = ({ data, children }) => {
  const { isDark, toggleTheme } = useBlueprintTheme('blueprint');
  const { title, description, date, rawDate, slug, tags, hero_image } = data.mdx.frontmatter;
  const image = hero_image ? getImage(hero_image) : null;
  const cleanSlug = (slug || '').replace(/^\/+|\/+$/g, '');

  const matchedStudy = useMemo(() => {
    const studyId = SLUG_TO_STUDY_ID[cleanSlug];
    return CASE_STUDIES.find((s) => s.id === studyId) || null;
  }, [cleanSlug]);

  const [diagramTab, setDiagramTab] = useState('blueprint');
  const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);

  const otherPosts = (data.allMdx?.nodes || []).filter(
    (node) => node.frontmatter.slug?.replace(/^\/+|\/+$/g, '') !== cleanSlug
  );

  const mdxComponents = useMemo(
    () => ({
      h2: (props) => (
        <h2
          className="mt-10 mb-4 text-xl sm:text-2xl font-extrabold tracking-tight pb-2 border-b border-current/10"
          {...props}
        />
      ),
      h3: (props) => (
        <h3
          className="mt-9 mb-3 text-lg sm:text-xl font-extrabold tracking-tight flex items-center gap-2"
          {...props}
        />
      ),
      h4: (props) => (
        <h4
          className="mt-6 mb-2 text-base sm:text-lg font-bold tracking-tight text-emerald-600 dark:text-emerald-400"
          {...props}
        />
      ),
      p: (props) => (
        <p className="my-4 text-sm sm:text-base leading-relaxed opacity-90" {...props} />
      ),
      ul: (props) => (
        <ul className="my-4 pl-5 space-y-2 list-disc marker:text-emerald-500 text-sm sm:text-base" {...props} />
      ),
      ol: (props) => (
        <ol className="my-4 pl-5 space-y-2.5 list-decimal marker:font-mono marker:font-bold marker:text-emerald-500 text-sm sm:text-base" {...props} />
      ),
      li: (props) => <li className="leading-relaxed pl-1 opacity-90" {...props} />,
      blockquote: (props) => (
        <blockquote
          className={`my-6 px-5 py-4 rounded-2xl border-l-4 border-emerald-500 font-medium text-sm sm:text-base leading-relaxed ${
            isDark
              ? 'bg-emerald-500/10 text-emerald-100'
              : 'bg-emerald-50/90 text-stone-800'
          }`}
          {...props}
        />
      ),
      hr: () => <hr className="my-8 border-t border-current/10" />,
      a: ({ href, children: linkChildren, ...rest }) => {
        const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
        return (
          <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="font-semibold text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/50 underline-offset-4 hover:decoration-emerald-500 inline-flex items-center gap-1"
            {...rest}
          >
            <span>{linkChildren}</span>
            {isExternal && <ExternalLink className="w-3.5 h-3.5 shrink-0 inline" />}
          </a>
        );
      },
      code: ({ className, children: codeChildren, ...rest }) => {
        const isBlockCode = className && className.includes('language-');
        if (isBlockCode) {
          return (
            <code className={`${className} font-mono text-xs sm:text-sm`} {...rest}>
              {codeChildren}
            </code>
          );
        }
        return (
          <code
            className={`px-1.5 py-0.5 mx-0.5 rounded-md font-mono text-[0.84em] font-semibold border ${
              isDark
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : 'bg-stone-200/75 text-stone-900 border-stone-300/90'
            }`}
            {...rest}
          >
            {codeChildren}
          </code>
        );
      },
      pre: (props) => (
        <pre
          className={`my-6 p-4 rounded-2xl border overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed ${
            isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}
          {...props}
        />
      ),
      table: (props) => (
        <div
          className={`my-6 overflow-x-auto rounded-2xl border ${
            isDark ? 'border-slate-800 bg-slate-900/50' : 'border-stone-200/90 bg-stone-50/60'
          }`}
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm" {...props} />
        </div>
      ),
      thead: (props) => (
        <thead
          className={`font-mono text-xs uppercase tracking-wider border-b ${
            isDark
              ? 'bg-slate-900/90 text-emerald-400 border-slate-800'
              : 'bg-stone-200/60 text-stone-800 border-stone-200'
          }`}
          {...props}
        />
      ),
      tbody: (props) => <tbody className="divide-y divide-current/10" {...props} />,
      tr: (props) => (
        <tr className="transition-colors hover:bg-emerald-500/[0.04]" {...props} />
      ),
      th: (props) => <th className="py-3.5 px-4 font-bold whitespace-nowrap" {...props} />,
      td: (props) => <td className="py-3.5 px-4 align-top leading-relaxed" {...props} />
    }),
    [isDark]
  );

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
        title={title}
        description={description}
        pathname={`/showcase/${cleanSlug}`}
        isDark={isDark}
        article={{
          title,
          description,
          date: rawDate || date,
          dateIso: rawDate || date,
          tags
        }}
      />

      {/* Sticky Top Blueprint Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-[#0B0D10]/85 border-slate-800/80'
            : 'bg-[#FAF8F5]/85 border-stone-200/90'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/#blog"
              className={`inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-xl border transition-all whitespace-nowrap shrink-0 ${
                isDark
                  ? 'border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60'
                  : 'border-stone-300 text-stone-700 hover:text-black hover:border-stone-400 bg-white'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Back to Portfolio</span>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs opacity-65 whitespace-nowrap">
              <BookOpen className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Engineering Field Note</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
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
        </div>
      </header>

      {/* Article Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <article
          className={`rounded-3xl border p-6 sm:p-12 transition-all ${
            isDark
              ? 'bg-[#11151C]/95 border-slate-800 shadow-xl'
              : 'bg-white/95 border-stone-200/90 shadow-lg shadow-stone-900/5'
          }`}
        >
          {/* Article Header Metadata */}
          <header className="pb-8 border-b border-current/10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                ARCHITECTURE DEEP-DIVE
              </span>
              {date && (
                <span className="inline-flex items-center gap-1.5 opacity-70">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={rawDate || date}>{date}</time>
                </span>
              )}
              <span className="opacity-70">• By {ENGINEER_PROFILE.name}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-3 text-sm sm:text-base opacity-80 leading-relaxed">
                {description}
              </p>
            )}

            {Array.isArray(tags) && tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg font-mono text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/25"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Key Telemetry Highlights Bar from Matched Case Study */}
            {matchedStudy && Array.isArray(matchedStudy.metrics) && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {matchedStudy.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800'
                        : 'bg-stone-100/70 border-stone-200/80'
                    }`}
                  >
                    <div className="font-mono text-[11px] opacity-65">{m.label}</div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-emerald-500 mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </header>

          {/* Interactive System Architecture Blueprint & Sequence Diagram */}
          {(matchedStudy || image) && (
            <div
              className={`my-8 rounded-2xl border p-4 sm:p-5 ${
                isDark
                  ? 'bg-slate-950/80 border-amber-500/30'
                  : 'bg-[#FFFDF9] border-amber-600/30'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-mono text-xs font-bold text-amber-500 uppercase">
                    System Architecture Blueprint
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {matchedStudy && image && (
                    <div className="inline-flex rounded-xl p-1 border border-current/15 bg-current/[0.03]">
                      <button
                        type="button"
                        onClick={() => setDiagramTab('blueprint')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                          diagramTab === 'blueprint'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        ✏️ System Blueprint
                      </button>
                      <button
                        type="button"
                        onClick={() => setDiagramTab('sequence')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                          diagramTab === 'sequence'
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        📐 WebRTC Sequence Flow
                      </button>
                    </div>
                  )}

                  {matchedStudy && (
                    <button
                      type="button"
                      onClick={() => setIsDiagramModalOpen(true)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-xs font-semibold border transition-all cursor-pointer ${
                        isDark
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                          : 'border-amber-600/40 bg-amber-500/10 text-amber-800 hover:bg-amber-500/20'
                      }`}
                    >
                      <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Expand Fullscreen</span>
                    </button>
                  )}
                </div>
              </div>

              {matchedStudy && diagramTab === 'blueprint' ? (
                <div>
                  <div
                    onClick={() => setIsDiagramModalOpen(true)}
                    className="cursor-zoom-in rounded-xl overflow-hidden"
                    title="Click to expand full architecture blueprint"
                  >
                    <ExcalidrawBlueprintSVG studyId={matchedStudy.id} isDark={isDark} />
                  </div>
                  {Array.isArray(matchedStudy.sketchNotes) && (
                    <div className="mt-3 grid grid-cols-1 gap-1.5">
                      {matchedStudy.sketchNotes.map((node, i) => (
                        <div key={i} className="font-mono text-[11px] flex items-center gap-1.5 opacity-85">
                          <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-500 font-bold inline-flex items-center justify-center text-[10px] shrink-0">
                            {i + 1}
                          </span>
                          <span>{node}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                image && (
                  <div className="rounded-xl overflow-hidden border border-current/10 max-h-[540px] overflow-y-auto bg-white p-2">
                    <GatsbyImage image={image} alt={title} className="w-full" />
                  </div>
                )
              )}
            </div>
          )}

          {/* MDX Content with Custom Blueprint Component Primitives */}
          <div className="mt-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </article>

        {/* Direct LinkedIn Architectural Discussion CTA */}
        <section
          className={`mt-10 rounded-3xl border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
            isDark
              ? 'bg-[#11151C] border-slate-800'
              : 'bg-stone-900 text-stone-100 border-stone-800'
          }`}
        >
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold uppercase text-emerald-400">
              Need This Architecture in Production?
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Discuss Voice AI, Hybrid RAG, or Low-Latency Backends with {ENGINEER_PROFILE.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Connect directly on LinkedIn to discuss system trade-offs, benchmark telemetry, or engineering leadership opportunities.
            </p>
          </div>
          <a
            href={ENGINEER_PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all whitespace-nowrap shrink-0"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </section>

        {/* More Engineering Field Notes */}
        {otherPosts.length > 0 && (
          <section className="mt-12" aria-label="More engineering articles">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider opacity-75">
                More Engineering Field Notes &amp; Architecture Posts
              </h2>
              <Link to="/archive" className="font-mono text-xs text-emerald-500 hover:underline">
                View Full Archive &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((post) => {
                const postSlug = post.frontmatter.slug.replace(/^\/+|\/+$/g, '');
                return (
                  <Link
                    key={post.id}
                    to={`/showcase/${postSlug}`}
                    className={`p-5 rounded-2xl border block transition-all ${
                      isDark
                        ? 'bg-[#11151C]/90 border-slate-800 hover:border-emerald-500/50'
                        : 'bg-white border-stone-200 hover:border-emerald-600/50 shadow-sm'
                    }`}
                  >
                    <div className="font-mono text-[11px] text-emerald-500 mb-1">
                      {post.frontmatter.date}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base leading-snug">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mt-1.5 text-xs opacity-75 line-clamp-2">
                      {post.frontmatter.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Fullscreen Architecture Blueprint Modal */}
      {isDiagramModalOpen && matchedStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${matchedStudy.company} System Architecture Blueprint`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setIsDiagramModalOpen(false)}
        >
          <div
            className={`relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border p-5 sm:p-8 shadow-2xl ${
              isDark
                ? 'bg-[#0D1117] border-slate-700 text-slate-100'
                : 'bg-[#FAF8F5] border-stone-300 text-stone-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-current/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-500">
                    {matchedStudy.tag}
                  </span>
                  <span className="font-mono text-xs opacity-70">
                    {matchedStudy.company} • {matchedStudy.period}
                  </span>
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold">
                  {matchedStudy.headline}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsDiagramModalOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border border-current/20 hover:bg-current/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Close (ESC)</span>
              </button>
            </div>

            <div
              className={`mt-5 rounded-2xl border p-4 sm:p-6 ${
                isDark
                  ? 'bg-slate-950 border-amber-500/40'
                  : 'bg-[#FFFDF9] border-amber-600/40'
              }`}
            >
              <ExcalidrawBlueprintSVG studyId={matchedStudy.id} isDark={isDark} isExpanded={true} />
            </div>

            {Array.isArray(matchedStudy.sketchNotes) && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {matchedStudy.sketchNotes.map((node, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border border-current/10 bg-current/[0.03] font-mono text-xs flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold inline-flex items-center justify-center text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{node}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-current/10 py-8 font-mono text-xs opacity-75">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold">{ENGINEER_PROFILE.name}</span>
            <span>•</span>
            <span>Forward Deployed AI &amp; Senior Systems Engineer (India)</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-emerald-500 transition-colors">
              Portfolio Home
            </Link>
            <span>•</span>
            <Link to="/archive" className="hover:text-emerald-500 transition-colors">
              Archive &amp; Blog
            </Link>
            <span>•</span>
            <a
              href={ENGINEER_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        slug
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
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
        }
      }
    }
  }
`;

export default ProjectShowcaseTemplate;
