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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Comfortaa`, `400`],
      },
    },
  ],
}
