import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/image-center-layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(
        absolutePath: { regex: "/landing-page-mobile-background.png/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(
        absolutePath: { regex: "/landing-page-background.png/" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 760px)`,
    },
  ]

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          marginLeft: 0,
          paddingLeft: 0,
          zIndex: -1,
        }}
      >
        <SEO title="All posts" />
        <Image
          fluid={sources}
          alt="Landing page background."
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        ></Image>
      </div>
    </Layout>
  )
}

export default Index
