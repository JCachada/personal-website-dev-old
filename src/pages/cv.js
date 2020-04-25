import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import LeftAlignedColumn from "../components/left-aligned-column"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import TwoColumnRow from "../components/two-column-row"
import RightAlignedColumn from "../components/right-aligned-column"
import CenteredText from "../components/centered-text"

const CV = ({ location }) => {
  return (
    <Layout>
      <CenteredText>
        <h1>Want to work with me?</h1>
        <p>
          The first thing you should do if you want to know more about me is
          check out the <a href="https://jcachada.dev/about">about me</a>{" "}
          section, the{" "}
          <a href="https://jcachada.dev/am-I-any-good">am I any good</a>{" "}
          section, and my{" "}
          <a href="https://jcachada.dev/mission-statement/">
            mission statement.
          </a>
          Those links will function as a cover letter of sorts, and hopefully
          make it clear what kind of person I am. If you think we'd be a good
          match, this page contains my qualifications, my academic and
          professional background, and contact information at the bottom.
        </p>
      </CenteredText>
      <TwoColumnRow>
        <LeftAlignedColumn>
          <h1>Work Experience:</h1>
          <h2>2019 - Current</h2>
          <p>
            <b>Software Engineer</b> @{" "}
            <a href="https://www.farfetch.com/pt/">Farfetch.</a>
          </p>
          <ul style={{ paddingLeft: "30px" }}>
            <li>
              Developing and maintaining the translation service for{" "}
              <a href="https://www.farfetch.com">farfetch.com</a>.
            </li>
            <li>Handling geo-distribution in three datacenters.</li>
            <li>Handling high throughput (20k+ requests per minute).</li>
            <li>
              Usage of several different technologies, like .NET Core, Kafka and
              ElasticSearch.
            </li>
          </ul>
          <h2>2016 - 2018</h2>
          <p>
            <b>Researcher</b> @{" "}
            <a href="https://www.cetaps.com/">
              Center for English, Translation and Anglo-Portuguese Studies.
            </a>
          </p>
          <p>
            <ul style={{ paddingLeft: "30px" }}>
              <li>
                Producing academic research with a specific focus on American
                Culture and Literature.
              </li>
              <li>Attending and presenting several conferences.</li>
              <li>
                Organizing conferences such as the Junior Researchers in
                Anglo-American Studies conference.
              </li>
            </ul>
          </p>
          <h1>Other Skills:</h1>
          <p>
            <ul style={{ paddingLeft: "30px" }}>
              <li>
                Fluent in English, Portuguese and Spanish, with cursory
                knowledge of Chinese. 2018 IELTS certificate with 8.5 Score for
                the English language, and level 1 Certificate in Chinese.
              </li>
              <li>
                Very familiar with agile methodologies applied to Software
                Development. Worked in Scrum and Kanban.
              </li>
              <li>
                Organizing conferences such as the Junior Researchers in
                Anglo-American Studies conference.
              </li>
            </ul>
          </p>
        </LeftAlignedColumn>
        <RightAlignedColumn>
          <h1>Education:</h1>
          <h2>2018-2019</h2>
          <p>
            <b>Post-Grad</b> in Software Development.
          </p>
          <p>
            <a href="https://www.isep.ipp.pt/">
              ISEP - Porto's Engineering Institute.
            </a>
          </p>
          <h2>2016-2018</h2>
          <p>
            <b>Master's Degree</b> in Anglo-American Studies.
          </p>
          <p>
            <a href="https://sigarra.up.pt/flup/pt/web_page.inicial">
              FLUP - University of Porto: Faculty of Arts.
            </a>
          </p>
          <h2>2013-2016</h2>
          <p>
            <b>Bachelor's Degree</b> in Philosophy.
          </p>
          <p>
            <a href="https://sigarra.up.pt/flup/pt/web_page.inicial">
              FLUP - University of Porto: Faculty of Arts.
            </a>
          </p>
          <h1>Awards:</h1>
          <ul style={{ paddingLeft: "30px" }}>
            <li>
              CETAPS/ALB Grant, in recognition of high attainments during the
              Master's Programme in Anglo-American Studies. Granted by the
              "Associação Luso-Britânica".
            </li>
            <li>
              JRAAS Seal of Quality, in recognition of excellence in research
              with my Master's dissertation,{" "}
              <i>
                Escaping the Narrative: The postmodern myth of American and Don
                DeLillo's work.
              </i>
            </li>
          </ul>
          <h1>Contact Me:</h1>
          <p>
            Reach me at jcachada AT tutanota DOT com, or contact me through{" "}
            <a href="https://www.linkedin.com/in/joão-cachada-4178a017b">
              LinkedIn.
            </a>
          </p>
        </RightAlignedColumn>
      </TwoColumnRow>
    </Layout>
  )
}

export default CV
