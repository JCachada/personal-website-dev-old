import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      Test
    </Layout>
  )
}

export default Index

export const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
