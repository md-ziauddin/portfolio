import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowLeft, BookOpen, Calendar, Moon, Sun } from 'lucide-react';
import { ENGINEER_PROFILE } from '../config/portfolioConfig';
import useBlueprintTheme from '../hooks/useBlueprintTheme';
import SeoAeo from '../components/seo/SeoAeo';

/**
 * ============================================================================
 * ENGINEERING BLOG & CASE STUDY TEMPLATE
 * Styled in the Dual-Theme "Tactile Engineering Blueprint" design system.
 * ============================================================================
 */
const ProjectShowcaseTemplate = ({ data, children }) => {
  const { isDark, toggleTheme } = useBlueprintTheme('blueprint');
  const { title, description, date, rawDate, slug, tags, hero_image } = data.mdx.frontmatter;
  const image = hero_image ? getImage(hero_image) : null;
  const cleanSlug = (slug || '').replace(/^\/+|\/+$/g, '');
  const otherPosts = (data.allMdx?.nodes || []).filter(
    (node) => node.frontmatter.slug?.replace(/^\/+|\/+$/g, '') !== cleanSlug
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
          </header>

          {image && (
            <div className="my-8 rounded-2xl overflow-hidden border border-current/10">
              <GatsbyImage image={image} alt={title} className="w-full" />
            </div>
          )}

          {/* MDX Content */}
          <div
            className={`mt-8 prose max-w-none prose-headings:font-extrabold prose-a:text-emerald-500 prose-code:font-mono prose-pre:rounded-xl ${
              isDark ? 'prose-invert' : 'prose-stone'
            }`}
          >
            {children}
          </div>
        </article>

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
