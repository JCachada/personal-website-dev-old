import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query instaQuery {
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
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
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
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
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
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <div
        style={{
          backgroundColor: "#1b191f",
          padding: `${rhythm(0.2)} ${rhythm(3 / 4)}`,
          textAlign: "center",
        }}
      >
        <footer>
          <a
            href={`https://instagram.com/j.cachada`}
            style={{ boxShadow: "none" }}
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
          <a href={`https://github.com/JCachada`} style={{ boxShadow: "none" }}>
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
        </footer>
      </div>
    </div>
  )
}

export default Layout
