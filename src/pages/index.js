import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftAlignedColumn from "../components/left-aligned-column"


const Index = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <LeftAlignedColumn>
        <h1 style={{wordWrap: "normal"}}>Hi. I'm João Cachada.</h1>
      </LeftAlignedColumn>
    </Layout>
  )
}

export default Index
