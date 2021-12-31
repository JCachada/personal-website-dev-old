import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftAlignedColumn from "../components/left-aligned-column"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import RightAlignedColumn from "../components/right-aligned-column"
import TwoColumnRow from "../components/two-column-row"
import Image from "gatsby-image"
import { ThemeProvider } from "theme-ui"
import { useColorMode } from "theme-ui"

const Index = ({ data }) => {
  const lastPost = data.mostRecentPost.edges
  const lastGamePost = data.mostRecentGamePost.edges
  const lastBookPost = data.mostRecentBookPost.edges
  let builtWith

  const [colorMode] = useColorMode()

  if (colorMode === "light") {
    builtWith = (
      <div>
        <a
          href={`https://www.gatsbyjs.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.gatsbyLogoLight.childImageSharp.fixed}
            alt={"gatsby-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://reactjs.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.reactLogoLight.childImageSharp.fixed}
            alt={"react-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://graphql.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.graphqlLogoLight.childImageSharp.fixed}
            alt={"graphql-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://www.javascript.com/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.javascriptLogoLight.childImageSharp.fixed}
            alt={"javascript-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://html.spec.whatwg.org/#is-this-html5?`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.htmlLogoLight.childImageSharp.fixed}
            alt={"html-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://www.w3schools.com/css/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.cssLogoLight.childImageSharp.fixed}
            alt={"css-icon-light"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
      </div>
    )
  } else {
    builtWith = (
      <div>
        <a
          href={`https://www.gatsbyjs.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.gatsbyLogo.childImageSharp.fixed}
            alt={"gatsby-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://reactjs.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.reactLogo.childImageSharp.fixed}
            alt={"react-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://graphql.org/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.graphqlLogo.childImageSharp.fixed}
            alt={"graphql-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://www.javascript.com/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.javascriptLogo.childImageSharp.fixed}
            alt={"javascript-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://html.spec.whatwg.org/#is-this-html5?`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.htmlLogo.childImageSharp.fixed}
            alt={"html-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
        <a
          href={`https://www.w3schools.com/css/`}
          style={{ boxShadow: "none", verticalAlign: "middle" }}
        >
          <Image
            fixed={data.cssLogo.childImageSharp.fixed}
            alt={"css-icon"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 0,
              borderRadius: `0%`,
            }}
            imgStyle={{
              borderRadius: `0%`,
            }}
          />
        </a>
      </div>
    )
  }

  return (
    <ThemeProvider>
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
            <h2>Last Post:</h2>

            {lastPost.map(({ node }) => {
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

            <h4>Built with:</h4>

            {builtWith}
          </LeftAlignedColumn>

          <RightAlignedColumn>
            <h2>Current Projects:</h2>

            <h4>Last update: UNTITLED BOOK</h4>

            {lastBookPost.map(({ node }) => {
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

            <h4>Last update: UNTITLED VIDEO GAME</h4>
            

            {lastGamePost.map(({ node }) => {
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
            
            <link
              href="https://fonts.googleapis.com/css?family=Raleway:400,300,600,800,900"
              rel="stylesheet"
              type="text/css"
            ></link>
          </RightAlignedColumn>
        </TwoColumnRow>
      </Layout>
    </ThemeProvider>
  )
}

export default Index

export const mostRecentQuery = graphql`
  query {
    mostRecentPost: allMarkdownRemark(
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
    mostRecentGamePost: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "gamedev" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
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
    mostRecentBookPost: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "book" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
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
    gatsbyLogo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reactLogo: file(absolutePath: { regex: "/react-icon.png/" }) {
      childImageSharp {
        fixed(height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    javascriptLogo: file(absolutePath: { regex: "/javascript-icon.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    htmlLogo: file(absolutePath: { regex: "/html-icon.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    graphqlLogo: file(absolutePath: { regex: "/graphql-icon.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cssLogo: file(absolutePath: { regex: "/css-icon.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gatsbyLogoLight: file(absolutePath: { regex: "/gatsby-icon-light.png/" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    reactLogoLight: file(absolutePath: { regex: "/react-icon-light/" }) {
      childImageSharp {
        fixed(height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    javascriptLogoLight: file(
      absolutePath: { regex: "/javascript-icon-light.png/" }
    ) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    htmlLogoLight: file(absolutePath: { regex: "/html-icon-light.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    graphqlLogoLight: file(
      absolutePath: { regex: "/graphql-icon-light.png/" }
    ) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cssLogoLight: file(absolutePath: { regex: "/css-icon-light.png/" }) {
      childImageSharp {
        fixed(height: 30, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
