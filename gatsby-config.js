require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: "UPDATE",
    author: {
      name: "こうすけ (Kosuke Muraka)",
      summary:
        "フリーランスのフロントエンドエンジニア. バックエンドも少々. Web 開発, Web 制作, ブログ運営などをメインに活動しています",
    },
    description:
      "UPDATE は, フロントエンドエンジニアとして活動するこうすけのクリエイターブログです. 主にプログラミング, デザイン, SEO, 普段の活動などについて発信しています.",
    siteUrl: "https://upd.world",
    social: {
      twitter: "kosuke_upd",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
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
          "gatsby-remark-prismjs",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "UPDATE",
        short_name: "UPDATE",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
  ],
}
