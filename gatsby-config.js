module.exports = {
  siteMetadata: {
    title: 'Alcina Wong - Hi!',
    icon: 'src/images/aw-favicon-icon-blue.png',
    siteUrl: `https://www.alcinawong.com`,
    description: `Alcina Wong's Portfolio`,
    image: 'src/images/aw-favicon-icon-blue.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/aw-favicon-icon-blue.png', // This path is relative to the root of the site.
        // pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            subsets: [`latin`],
          },
          {
            family: `PT Serif`,
            variants: [`300`, `400`]
          },
        ],
      },
    },
  ],
}