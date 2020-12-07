exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            miniTitle
            publishDate
            blogContent {
              raw
            }
            images {
              file {
                url
              }
            }
            author
          }
        }
      }
    }
  `)

  const path = require("path")
  console.log("Result: ", result)
  const blogs = result.data.allContentfulBlogPost.edges

  console.log(blogs)

  blogs.forEach(blog => {
    const blogPost = blog.node
    console.log("Blog Post: ", blogPost)
    createPage({
      path: `/blogs/${blogPost.title}`,
      component: path.resolve("./src/templates/blog.tsx"),
      context: {
        title: blogPost.title,
        publishedDate: blogPost.publishDate,
        body: blogPost.blogContent.raw,
        imageUrl: blogPost.images.file.url,
        author: blogPost.author,
      },
    })
  })
}
