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
      { path: '/contact', name: 'Contact' },
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
        background_color: 'rgb(68, 108, 139)',
        theme_color: 'rgb(68, 108, 139)',
        display: 'minimal-ui',
        icon: 'src/images/headshot-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`300`, `400`, `700`, `900`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
