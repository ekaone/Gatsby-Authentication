require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  pathPrefix: "/Gatsby-Authentication",
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Eka - Gatsby Authentication Tutorial`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        basePath: `/lekoart`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eka - Gatsby Authentication Tutorial`,
        short_name: `Eka`,
        description: `Playful Gatsby Authentication Tutorial and Colorful with LekoArt`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
