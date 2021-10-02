module.exports = {
  siteMetadata: {
    title: 'Nicholas Kreps',
    titleTemplate: '%s · Engineer - Developer - Creator',
    description: 'Engineer, Developer & Creator',
    url: 'https://www.nicholaskreps.com',
    image: '/images/headshot.jpg',
    owner: 'Nicholas Kreps',
    twitter: '@nicholaskreps',
    nav: [
      { path: '/about', name: 'About' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nicholas Kreps',
        short_name: 'Nicholas Kreps',
        start_url: '/',
        background_color: 'rgb(95, 149, 190)',
        theme_color: 'rgb(95, 149, 190)',
        display: 'minimal-ui',
        icon: 'src/images/headshot-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,700,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
