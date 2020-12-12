const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Contentful から全記事の slug を公開日時降順で取得.
  const result = await graphql(`
    {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 記事一覧ページを生成.
  const posts = result.data.allContentfulBlogPost.edges
  const postsPerPage = 10
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: path.resolve("./src/templates/index.tsx"),
    pathPrefix: ({ pageNumber }) => {
      return pageNumber === 0 ? "/" : "/page"
    },
  })
}
