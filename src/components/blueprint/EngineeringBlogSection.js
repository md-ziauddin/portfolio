import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { ArrowUpRight, BookOpen, FolderGit2 } from 'lucide-react';

/**
 * ============================================================================
 * ENGINEERING FIELD NOTES & BLOG SECTION
 * Dynamically queries `allMdx` at build time so every `.mdx` post inside
 * `src/content/showcase/` renders as an article card.
 * ============================================================================
 */
export default function EngineeringBlogSection({ isDark }) {
  const data = useStaticQuery(graphql`
    query BlueprintMdxBlogQuery {
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

  const posts = data?.allMdx?.nodes || [];

  return (
    <section id="blog" className="py-16 sm:py-20 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-500/15 text-emerald-500 mb-3">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>ENGINEERING BLOG &amp; SYSTEM WRITE-UPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Engineering Field Notes &amp; Deep-Dive Articles
          </h2>
          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-2xl">
            Detailed architecture breakdowns covering sub-second Voice AI orchestration, hybrid Qdrant RAG evaluations, and low-latency backend primitives.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <Link
            to="/archive"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold border transition-all whitespace-nowrap shrink-0 ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-emerald-500/60 hover:text-emerald-400'
                : 'bg-white border-stone-300 text-stone-800 hover:border-stone-500 shadow-sm'
            }`}
          >
            <FolderGit2 className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Full Project &amp; Blog Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </div>

      {/* MDX Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => {
          const { title, description, date, slug, tags } = post.frontmatter;
          const cleanSlug = slug.replace(/^\/+|\/+$/g, '');

          return (
            <article
              key={post.id}
              className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? 'bg-[#11151C]/90 border-slate-800 hover:border-emerald-500/50'
                  : 'bg-white/95 border-stone-200/90 hover:border-emerald-600/50 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs mb-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-bold">
                    ARTICLE 0{idx + 1}
                  </span>
                  <time className="opacity-65">{date}</time>
                </div>

                <h3 className="text-lg font-bold leading-snug group-hover:text-emerald-500 transition-colors">
                  <Link to={`/showcase/${cleanSlug}`} className="block">
                    {title}
                  </Link>
                </h3>

                {description && (
                  <p className="mt-2.5 text-xs sm:text-sm opacity-80 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-current/10 space-y-3">
                {Array.isArray(tags) && tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded font-mono text-[10px] bg-current/[0.05] opacity-80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <Link
                    to={`/showcase/${cleanSlug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-500 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
