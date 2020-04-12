import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import { useColorMode } from "theme-ui"
import Image from "gatsby-image"
import ChangeThemeButton from "./change-theme-button"
import Search from "./search-box"
import SearchLight from "./search-box-light"

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
      instagramLight: file(
        absolutePath: { regex: "/instagram-icon-light.png/" }
      ) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubLight: file(absolutePath: { regex: "/github-icon-light.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      discordLight: file(absolutePath: { regex: "/discord-icon-light.png/" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let header
  let footer
  let mobileHeader

  const [colorMode] = useColorMode()

  if (colorMode === "light") {
    mobileHeader = (
      <h3
        style={{
          width: "100%",
          marginBottom: rhythm(0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          css={{
            color: `black`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
          }}
          to={`/`}
        >
          Home
        </Link>
        <div
          style={{ float: "right", verticalAlign: "center", paddingTop: "3px" }}
        >
          <ChangeThemeButton></ChangeThemeButton>
        </div>
        <div style={{verticalAlign: "center" }}>
          <SearchLight></SearchLight>
        </div>
      </h3>
    )
  }
  if (colorMode === "light") {
    header = (
      <h3
        style={{
          width: "100%",
          marginBottom: rhythm(0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          css={{
            color: `black`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#2c7aff",
              textDecoration: `underline`,
            },
          }}
          to={"/about"}
        >
          About
        </Link>
        <div
          style={{ float: "right", verticalAlign: "center", paddingTop: "3px" }}
        >
          <ChangeThemeButton></ChangeThemeButton>
        </div>
        <div style={{ float: "right", verticalAlign: "center" }}>
          <SearchLight></SearchLight>
        </div>
      </h3>
    )
    footer = (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: `${rhythm(0.6)} ${rhythm(0)}`,
        }}
      >
        <footer
          style={{
            paddingTop: `${rhythm(0.6)}`,
            boxShadow: "0px -1px 0px rgba(35,33,41,1)",
          }}
        >
          <a
            href={`https://instagram.com/j.cachada`}
            style={{ boxShadow: "none", verticalAlign: "middle" }}
          >
            <Image
              fixed={data.instagramLight.childImageSharp.fixed}
              alt={"instagram-icon-light"}
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
              fixed={data.githubLight.childImageSharp.fixed}
              alt={"github-icon-light"}
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
              fixed={data.discordLight.childImageSharp.fixed}
              alt={"discord-icon-light"}
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
    )
  } else {
    mobileHeader = (
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
          }}
          css={{
            color: `#c0c0c0`,
          }}
          to={`/`}
        >
          Home
        </Link>
        <div
          style={{ float: "right", verticalAlign: "center", paddingTop: "3px" }}
        >
          <ChangeThemeButton></ChangeThemeButton>
        </div>
        <div style={{ verticalAlign: "center" }}>
          <Search></Search>
        </div>
      </h3>
    )
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
          }}
          css={{
            color: `#c0c0c0`,
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#c0c0c0",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#c0c0c0",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#c0c0c0",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#c0c0c0",
              textDecoration: `underline`,
            },
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
            paddingLeft: "20px",
          }}
          css={{
            color: `#635e69`,
            ":hover": {
              color: "#c0c0c0",
              textDecoration: `underline`,
            },
          }}
          to={"/about"}
        >
          About
        </Link>
        <div
          style={{ float: "right", verticalAlign: "center", paddingTop: "3px" }}
        >
          <ChangeThemeButton></ChangeThemeButton>
        </div>
        <div style={{ float: "right", verticalAlign: "center" }}>
          <Search></Search>
        </div>
      </h3>
    )

    footer = (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: `${rhythm(0.6)} ${rhythm(0)}`,
        }}
      >
        <footer
          style={{
            paddingTop: `${rhythm(0.6)}`,
            boxShadow: "0px -1px 0px rgba(35,33,41,1)",
          }}
        >
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
          boxShadow: "0px 1px 1px 0px rgba(35,33,41,1)",
          padding: `${rhythm(0.7)} ${rhythm(3 / 4)}`,
        }}
        css={{
          display: "none",
          "@media (min-width: 750px)": {
            display: "block",
          },
        }}
      >
        {header}
      </header>
      <header
        style={{
          boxShadow: "0px 1px 1px 0px rgba(35,33,41,1)",
          padding: `${rhythm(0.7)} ${rhythm(3 / 4)}`,
        }}
      >
        {mobileHeader}
      </header>
      {children}
      {footer}
    </div>
  )
}

export default Layout
