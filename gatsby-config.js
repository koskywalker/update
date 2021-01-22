require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_BASE_URL,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_CONTENT_PREVIEW_API_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST_PREVIEW,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: "gatsby-remark-table-of-contents",
            options: {
              exclude: "",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 3,
              className: "toc",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "UPDATE",
        short_name: "UPDATE",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#06b6d4",
        display: "minimal-ui",
        icon: "./src/images/icon-update.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
}
