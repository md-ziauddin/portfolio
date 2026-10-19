import React from 'react';
import { Helmet } from 'react-helmet';
import { SEO_AEO_CONFIG, buildJsonLdGraph } from '../../config/seoConfig';

/**
 * ============================================================================
 * MODULAR SEO & AEO (ANSWER ENGINE OPTIMIZATION) HEAD COMPONENT
 * Powered by a single source of truth: `src/config/seoConfig.js`
 *
 * Features:
 * 1. Canonical URLs, Robots directives, Title Templates & Keyword Meta
 * 2. OpenGraph (LinkedIn/Slack/Discord) & Twitter/X Card tags
 * 3. AI Answer Engine discovery links (`/llms.txt` & `/llms-full.txt`)
 * 4. Schema.org JSON-LD `@graph` (WebSite, Person, ProfilePage, FAQPage,
 *    TechArticle & BreadcrumbList for MDX blog posts)
 * ============================================================================
 */
const SeoAeo = ({
  title,
  description,
  pathname = '/',
  lang = 'en',
  meta = [],
  article = null,
  isDark = false
}) => {
  const resolvedTitle = title || SEO_AEO_CONFIG.defaultTitle;
  const resolvedDescription = description || SEO_AEO_CONFIG.defaultDescription;
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const canonicalUrl = `${SEO_AEO_CONFIG.siteUrl}${cleanPath}`;
  const ogType = article ? 'article' : 'profile';

  const jsonLdGraph = buildJsonLdGraph({
    pathname: cleanPath,
    pageTitle: resolvedTitle,
    pageDescription: resolvedDescription,
    article
  });

  const baseMeta = [
    {
      name: 'description',
      content: resolvedDescription
    },
    {
      name: 'keywords',
      content: SEO_AEO_CONFIG.keywords.join(', ')
    },
    {
      name: 'author',
      content: SEO_AEO_CONFIG.author
    },
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    },
    {
      name: 'theme-color',
      content: isDark ? SEO_AEO_CONFIG.themeColorDark : SEO_AEO_CONFIG.themeColorPaper
    },
    // OpenGraph
    {
      property: 'og:site_name',
      content: SEO_AEO_CONFIG.siteName
    },
    {
      property: 'og:title',
      content: resolvedTitle
    },
    {
      property: 'og:description',
      content: resolvedDescription
    },
    {
      property: 'og:type',
      content: ogType
    },
    {
      property: 'og:url',
      content: canonicalUrl
    },
    {
      property: 'og:locale',
      content: SEO_AEO_CONFIG.locale
    },
    // Twitter / X
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:creator',
      content: SEO_AEO_CONFIG.handle
    },
    {
      name: 'twitter:title',
      content: resolvedTitle
    },
    {
      name: 'twitter:description',
      content: resolvedDescription
    }
  ];

  if (article?.date) {
    baseMeta.push({
      property: 'article:published_time',
      content: article.date
    });
    baseMeta.push({
      property: 'article:author',
      content: SEO_AEO_CONFIG.author
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={resolvedTitle}
      titleTemplate={
        title ? SEO_AEO_CONFIG.titleTemplate : null
      }
      meta={baseMeta.concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: canonicalUrl
        },
        {
          rel: 'alternate',
          type: 'text/plain',
          href: SEO_AEO_CONFIG.llmsTxtPath,
          title: 'LLM & AI Answer Engine Summary (llms.txt)'
        },
        {
          rel: 'alternate',
          type: 'text/plain',
          href: SEO_AEO_CONFIG.llmsFullTxtPath,
          title: 'LLM Full Architecture & Career Dossier (llms-full.txt)'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLdGraph)}</script>
    </Helmet>
  );
};

export default SeoAeo;
