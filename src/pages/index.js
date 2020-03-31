import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <div style={{maxWidth:"75%"}}><h1>Hi.</h1></div>
    </Layout>
  )
}

export default Index
