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
      <CenteredText>
      <SEO title="Game Development" />
        <h1>State of the Art</h1>

        <h4>Last updated: June 2020</h4>

        <p>
          I'm currently on the very early stages of developing this game. I have
          set up most of the essential systems to sustain it, like dialogue,
          saving games, basic movement and enemy AIs, etc. I am currently
          iterating on gameplay loops to find something that I find engaging and
          that fits the game. You can follow the game's progress on its{" "}
          <a href="https://github.com/JCachada/untitledgame">github</a>,
          although on the early stages of development a lot of the iteration
          involves no code, so you'll see less commits. I'll still post updates as blog posts as I go.
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
      filter: { frontmatter: { tags: { in: "game" } } }
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
