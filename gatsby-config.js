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
    title: `MD Ziauddin | Senior Software Engineer`,
    description: `Personal portfolio for MD Ziauddin, a Senior Software Engineer specializing in AI/Cloud, System Architecture, and Full-stack Delivery.`,
    author: `MD Ziauddin`,
    siteUrl: `https://your-domain.com/`,
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
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `PortfolioData`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}