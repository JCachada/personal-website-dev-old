import React from "react"
import { rhythm } from "../utils/typography"

const TwoColumnRow = ({ children }) => {
  return (
    <main
      style={{
        fontSize: "18px",
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
        padding: `${rhythm(0)} ${rhythm(3)} ${rhythm(3)} ${rhythm(3)}`,
      }}
    >
      {children}
    </main>
  )
}

export default TwoColumnRow
