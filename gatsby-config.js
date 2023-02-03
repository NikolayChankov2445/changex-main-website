/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Changex`,
    siteUrl: `https://www.changex.io`,
    description: `Non-custodial DeFi wallet with integrated banking and Visa Debit Card. Buy crypto, invest, and grow your wealth on easy mode.`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-221374557-1"
    }
  },{
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        "UA-221374557-1",
        "", // Google Ads / Adwords / AW
        "", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
    }
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-smoothscroll`,
      options: {},
    },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        "icon": `${__dirname}/src/assets/images/icon.png`,
      }
    }]
};
