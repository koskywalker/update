const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Contentful から記事一覧を公開日時降順で取得.
  const result = await graphql(`
    {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            slug
            tags {
              slug
            }
          }
        }
      }
      allContentfulTag {
        edges {
          node {
            blog_post {
              id
            }
            name
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  const posts = result.data.allContentfulBlogPost.edges
  const tags = result.data.allContentfulTag.edges

  const indexArchiveTemplate = path.resolve("./src/templates/index-archive.tsx")
  const tagsArchiveTemplate = path.resolve("./src/templates/tags-archive.tsx")
  const postsPerPage = 12

  // 記事一覧ページを生成.
  ;(() => {
    const lastPageNumber = Math.ceil(posts.length / postsPerPage)

    paginate({
      createPage,
      items: posts,
      itemsPerPage: postsPerPage,
      component: indexArchiveTemplate,
      pathPrefix: ({ pageNumber }) => {
        return pageNumber === 0 ? "/" : "/page"
      },
      context: {
        lastPageNumber,
      },
    })
  })()

  // タグ一覧ページを生成.
  tags.forEach((tag) => {
    if (!tag.node.blog_post) {
      return
    }
    const tagName = tag.node.name
    const tagSlug = tag.node.slug
    const lastPageNumber = Math.ceil(tag.node.blog_post.length / postsPerPage)

    paginate({
      createPage,
      items: tag.node.blog_post,
      itemsPerPage: postsPerPage,
      component: tagsArchiveTemplate,
      pathPrefix: `/tags/${tagSlug}`,
      context: {
        tagName,
        tagSlug,
        lastPageNumber,
      },
    })
  })
}
