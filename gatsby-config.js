module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Blazing fast modern site generator for React`,
  },
}
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6ixp9zb0pla9`,
        accessToken: `1YXpnRm9KSgFtV0UMCM03chRO9M5DrKUFW7ScPoMf34`,
      },
    },
  ],
}
