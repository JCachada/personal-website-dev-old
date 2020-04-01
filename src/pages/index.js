import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftAlignedColumn from "../components/left-aligned-column"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import RightAlignedColumn from "../components/right-aligned-column"
import TwoColumnRow from "../components/two-column-row"

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Homepage" />
      <TwoColumnRow>
        <LeftAlignedColumn>
          <h1 style={{ wordWrap: "normal" }}>Hi. I'm João Cachada.</h1>
          <p>I write code and stories. I also develop video games.</p>
          <p>
            I made this website so you can keep up with whatever I'm doing at
            the moment.
          </p>
        </LeftAlignedColumn>

        <RightAlignedColumn>
          <h2>Last Post:</h2>

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
        </RightAlignedColumn>
      </TwoColumnRow>
    </Layout>
  )
}

export default Index

export const mostRecentQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
