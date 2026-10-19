/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MD Ziauddin | Forward Deployed Engineer & Senior AI Systems Architect`,
    description: `Senior Software Engineer and Forward Deployed AI Engineer (5+ yrs) specializing in production Voice AI (1M+ calls), hybrid RAG, and low-latency distributed systems.`,
    author: `MD Ziauddin`,
    siteUrl: `https://ziadev.in`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showcase`,
        path: `${__dirname}/src/content/showcase`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `PortfolioData`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [require(`remark-gfm`)]
        }
      }
    }
  ],
}