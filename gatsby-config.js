require("dotenv").config({ path: ".env" })

const siteTitle = "UPDATE"

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
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: null,
            },
          },
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteTitle,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(({ node }) => {
                return {
                  title: node.title,
                  description: node.description.description,
                  date: node.publishDate,
                  url: `${process.env.GATSBY_BASE_URL}/${node.slug}`,
                  guid: `${process.env.GATSBY_BASE_URL}/${node.slug}`,
                }
              })
            },
            query: `
              {
                allContentfulBlogPost(
                  limit: 5
                  sort: { fields: publishDate, order: DESC }
                ) {
                  edges {
                    node {
                      title
                      slug
                      description {
                        description
                      }
                      publishDate
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: siteTitle,
            feed_url: `${process.env.GATSBY_BASE_URL}/rss.xml`,
            site_url: process.env.GATSBY_BASE_URL,
          },
        ],
      },
    },
  ],
}
