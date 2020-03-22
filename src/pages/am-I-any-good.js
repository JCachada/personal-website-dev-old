import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const IsHeAnyGood = ({ location }) => {
  const data = useStaticQuery(graphql`
    query imagesQuery {
      gwent: file(absolutePath: { regex: "/gwent-standing.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sly: file(absolutePath: { regex: "/sly-picture.png/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} title="Am I any good?">
      <SEO title="Am I any good?" />
      <div>
        <article>
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              Why is this page called "Am I any good?"
            </h3>
          </header>
          <section style={{ marginBottom: 0 }}>
            <p></p>
            <p>
              The first thing I have to explain is why this section is here in
              the first place.
            </p>
            <p></p>
            <p>I stole it. 😃</p>
            <p>
              Gitlab's mission statement mentions how they once saw a Hacker
              News comment that said that "Starting immediately, all raganwald
              projects will have a 'Is it any good?' section in the readme, and
              the answer shall be 'yes'." This was intended to apply primarily
              to new projects, but I see no reason why it shouldn't apply to
              people as well.
            </p>
            <p></p>
            <p>
              Time is our most valuable currency. If you somehow landed here,
              you might be trying to figure out if, and why, you should use any
              of yours with me. This section is here to help you with that
              decision. I believe justifying your attention begins with me being
              able to respond with a resounding "yes" to the question of "Am I
              any good?".
            </p>
          </section>
          <header>
            <h3
              style={{
                marginTop: 0,
                marginBottom: rhythm(1 / 4),
              }}
            >
              So... Am I?
            </h3>
          </header>
          <section>
            <p></p>
            <p>Yes!</p>
          </section>
          <header>
            <h3
              style={{
                marginTop: 0,
                marginBottom: rhythm(1 / 4),
              }}
            >
              Okay. Why?
            </h3>
          </header>
          <section>
            <p></p>
            <p>
              There are a lot of reasons. I don't like to brag, but since you
              asked...
            </p>
            <p>
              <ul>
                <li>
                  I finished my B.A. at 20 years old and my Master's at 23. I
                  was top of my class in both.
                </li>
                <li>
                  I successfully made a career change to something radically
                  different (from American Literature to Software Engineering)
                  by 24 years old.
                </li>
                <li>
                  I love to learn! That's a big part of why the career switch
                  worked. I'm always looking to learn new skills.
                </li>
                <li>
                  I'm driven and passionate about quality. I like to deliver
                  above expectations, no matter what I'm doing, and I'm
                  constantly looking for aspects of my life and work that can be
                  improved.
                </li>
                <li>
                  I'm easy to work and / or interact with. Coming from such a
                  diverse background forced me to work with a lot of different
                  people from a lot of different backgrounds, personalities, and
                  interests. And because I like learning so much, I tend to
                  think everyone coming from a different place than me has
                  something they can teach me.
                </li>
              </ul>
            </p>
          </section>
          <header>
            <h3
              style={{
                marginTop: 0,
                marginBottom: rhythm(1 / 4),
              }}
            >
              Sounds like a lot of corporate talk...
            </h3>
          </header>
          <section>
            <p></p>
            <p>Okay, you're right. So here's a bunch of fun stuff about me:</p>
            <p>
              <ul>
                <li>
                  I used to be a competitive video game player. I was the #1
                  ranked player in the world at GWENT: The Witcher Card Game for
                  a while, I coached a bunch of people to tournament victories,
                  and I'm generally really good at card games.
                </li>
                <Image
                  fluid={data.gwent.childImageSharp.fluid}
                  alt="Gwent Leaderboard"
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                  }}
                />
                <p></p>
                <li>
                  I <i>love</i> dogs. I've had dogs all my life. Here's a
                  picture of Sly.
                </li>
                <p></p>
                <div style={{ maxHeight: "100%"}}>
                  <Image
                    fluid={data.sly.childImageSharp.fluid}
                    alt="Sly the dog picture."
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      minWidth: 50,
                      maxHeight: "100%",
                    }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </div>
                <p></p>
                <li>
                  I also love reading, cinema, fitness, video games, lasagna,
                  and all sort of other generic things that lots of people love.
                </li>
              </ul>
            </p>
            <p>
              If you're still not convinced, feel free to check out my work, my
              résumé, and my ramblings.
            </p>
            <p>""</p>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default IsHeAnyGood
