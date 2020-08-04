module.exports = {
  siteMetadata: {
    title: "Trillo CSS project",
    description:
      "This is a project from the udemy course  'Advanced CSS and Sass' applied to gatsby",
    author: "@oscordero",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
