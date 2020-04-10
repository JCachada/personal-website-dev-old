module.exports = {
  siteMetadata: {
    title: `J. Cachada Personal Website`,
    author: {
      name: `João Cachada`,
      summary: `awesome dude.`,
    },
    description: `A personal website for all of my j.cachada needs.`,
    siteUrl: `https://jcachada.dev`,
    social: {
      instagram: `j.cachada`,
    },
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        languages: ["en"],
        type: "MarkdownRemark", // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: "title",
            indexed: true, // If indexed === true, the field will be indexed.
            resolver: "frontmatter.title",
            // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: "description",
            indexed: true,
            resolver: "frontmatter.description",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: false,
          },
          {
            name: "url",
            indexed: false,
            resolver: "fields.slug",
            store: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
