import React from "react"
import { rhythm } from "../utils/typography"

const RightAlignedColumn = ({ children }) => {
  return (
    <div
    css={{
        float: "right",
        width: "50%",
        paddingLeft:  `${rhythm(3.2)}`,
        "@media (max-width: 750px)": { width: "100%", float: "none", paddingLeft: `${rhythm(0)}`},
      }}
      style={{
        paddingBottom: `${rhythm(3.2)}`,
        minWidth: "200px",
      }}
    >
      {children}
    </div>
  )
}

export default RightAlignedColumn
