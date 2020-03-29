import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import { rhythm } from "../utils/typography"

const About = ({ location }) => {
  return (
    <Layout location={location} title="About me">
      <SEO title="About me" />
      <div>
        <article>
          <header>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              About me
            </h3>
          </header>
          <section style={{ marginBottom: 0 }}>
            <p></p>
            <p>My name is João Cachada. Nice to meet you!</p>
            <p></p>
            <p>
              I was born in Portugal in 1995 and I currently work there as a
              Backend Software Engineer. I also write fiction and develop games
              in my free time.
            </p>
            <p>
              I built this website from scratch using{" "}
              <a href="https://www.gatsbyjs.org/">gatsby.</a> Give them a look!
              Or, if you're interested in how I did it, check out the source
              code in{" "}
              <a href="https://github.com/JCachada/personal-website-dev">
                this github repository.
              </a>{" "}
              All the website's code is fully open source and you can copy
              whatever you want at will. I did this as a way to learn a new
              technology and showcase that I'm capable of doing something like
              this even though it's not within my usual expertise (I do backend
              in C#/.NET Core at my day job).
            </p>
            <p></p>
            <p>
              If you find a bug or want to ask a question, feel free to message
              me on Github! If you want to work with me, use the toolbar to
              check out my résumé. If you just want to follow my projects,
              follow me on instagram (the link is in the footer) and check out
              the Writing and Games section.
            </p>
            <p></p>
            <p>
              Thanks for checking my website out. I hope you found what you were
              looking for!
            </p>
            <br></br>
            <br></br>
            <br></br>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default About
