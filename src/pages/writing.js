import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import CenteredText from "../components/centered-text"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Writing" />
      <CenteredText>
        <h1>State of the Art</h1>

        <h4>Last updated: March 2021</h4>

        <p>
          I have started the second draft of my novel. I am around 16 thousand
          words in, after which there will be a period of downtime while I get
          some distance from the draft, then a period of revising the draft, and
          finally a period of sending it out to beta readers and adjusting
          acording to their feedback. Throughout all of this I will post regular
          updates as blog posts. The current estimate is that I'll be done with
          the book this year.
        </p>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </CenteredText>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "book" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            tags
            description
            title
          }
        }
      }
    }
  }
`
