import React from "react"
import { rhythm } from "../utils/typography"

const LeftAlignedColumnText = ({ children }) => {
  return (
    <main
      style={{
        fontSize: "18px",
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(35),
        padding: `${rhythm(0)} ${rhythm(3)} ${rhythm(3)} ${rhythm(3)}`,
      }}
    >
      <div class="row">
        <div class="column" style={{ float: "left", width: "50%" }}>
          {children}
        </div>
      </div>
    </main>
  )
}

export default LeftAlignedColumnText
