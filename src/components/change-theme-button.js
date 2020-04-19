import React from "react"
import { useColorMode } from "theme-ui"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const ChangeThemeButton = () => {
  let [colorMode, setColorMode] = useColorMode()

  const data = useStaticQuery(graphql`
    query changeThemeButtonQuery {
      lightThemeButton: file(
        absolutePath: { regex: "/light-theme-button.png/" }
      ) {
        childImageSharp {
          fixed(height: 20, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deepThemeButton: file(
        absolutePath: { regex: "/deep-theme-button.png/" }
      ) {
        childImageSharp {
          fixed(height: 20, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      darkThemeButton: file(
        absolutePath: { regex: "/dark-theme-button.png/" }
      ) {
        childImageSharp {
          fixed(height: 20, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let themeImage

  if (colorMode === "dark" || colorMode === "default") {
    themeImage = (
      <Image
        fixed={data.deepThemeButton.childImageSharp.fixed}
        alt={"deepTheme-icon-dark"}
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
    )
  } else if (colorMode === "deep") {
    themeImage = (
      <Image
        fixed={data.lightThemeButton.childImageSharp.fixed}
        alt={"lightTheme-icon-dark"}
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
    )
  } else if (colorMode === "light") {
    themeImage = (
      <Image
        fixed={data.darkThemeButton.childImageSharp.fixed}
        alt={"darkTheme-icon-light"}
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
    )
  }

  return (
    <header>
      <button
        onClick={e => {
          setColorMode((colorMode = nextTheme(colorMode)))
        }}
        style={{
          background: "Transparent",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
          outline: "none",
        }}
      >
        {themeImage}
      </button>
    </header>
  )
}

function nextTheme(colorMode) {
  if (colorMode === "dark" || colorMode === "default") {
    return "deep"
  } else if (colorMode === "deep") {
    return "light"
  } else if (colorMode === "light") {
    return "dark"
  }
}

export default ChangeThemeButton
