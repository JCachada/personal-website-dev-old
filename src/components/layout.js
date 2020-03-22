import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      instagram: file(absolutePath: { regex: "/instagram-icon.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(absolutePath: { regex: "/github-icon.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      discord: file(absolutePath: { regex: "/discord-icon.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
    <h3
      style={{
        marginBottom: rhythm(0),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Home
      </Link>
      <Link
        style={{
          ...scale(0.3),
          boxShadow: `none`,
          textDecoration: `none`,
          color: `#635e69`,
          paddingLeft: "20px",
        }}
        to={`/am-I-any-good`}
      >
        Am I any good?
      </Link>
      <Link
        style={{
          ...scale(0.3),
          boxShadow: `none`,
          textDecoration: `none`,
          color: `#635e69`,
          paddingLeft: "20px",
        }}
        to={`/blog`}
      >
        Blog
      </Link>
      <Link
        style={{
          ...scale(0.3),
          boxShadow: `none`,
          textDecoration: `none`,
          color: `#635e69`,
          paddingLeft: "20px",
        }}
        to={`/writing`}
      >
        Writing
      </Link>
      <Link
        style={{
          ...scale(0.3),
          boxShadow: `none`,
          textDecoration: `none`,
          color: `#635e69`,
          paddingLeft: "20px",
        }}
        to={`/games`}
      >
        Games
      </Link>
      <Link
        style={{
          ...scale(0.3),
          boxShadow: `none`,
          textDecoration: `none`,
          color: `#635e69`,
          paddingLeft: "20px",
        }}
        to={'/about'}
      >
        About
      </Link>
    </h3>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header
        style={{
          boxShadow: "0px 1px 1px 0px rgba(35,33,41,1)",
          padding: `${rhythm(0.7)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#1b191f",
          textAlign: "center",
          padding: `${rhythm(0.6)} ${rhythm(0)}`,
        }}
      >
        <footer>
          <a
            href={`https://instagram.com/j.cachada`}
            style={{ boxShadow: "none", verticalAlign: "middle" }}
          >
            <Image
              fixed={data.instagram.childImageSharp.fixed}
              alt={"instagram-icon"}
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
            href={`https://github.com/JCachada`}
            style={{ boxShadow: "none", verticalAlign: "middle" }}
          >
            <Image
              fixed={data.github.childImageSharp.fixed}
              alt={"github-icon"}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                marginTop: 0,
                minWidth: 0,
                borderRadius: `0%`,
              }}
              imgStyle={{
                borderRadius: `0%`,
              }}
            />
          </a>
          <a
            href={`https://github.com/JCachada`}
            style={{ boxShadow: "none", verticalAlign: "middle" }}
          >
            <Image
              fixed={data.discord.childImageSharp.fixed}
              alt={"discord-icon"}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                marginTop: 0,
                minWidth: 0,
                borderRadius: `0%`,
              }}
              imgStyle={{
                borderRadius: `0%`,
              }}
            />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
