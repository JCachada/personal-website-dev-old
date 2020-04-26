import React from "react"
import { rhythm} from "../utils/typography"

const CenteredTextNoBottomPadding = ({ children }) => {
  return (<main
    style={{
      fontSize: "18px",
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(0)} ${rhythm(3 / 4)} ${rhythm(0)}`,
      wordWrap: "normal"
    }}
  >
    {children}
  </main>)
}

export default CenteredTextNoBottomPadding