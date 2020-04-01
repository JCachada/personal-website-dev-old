import React from "react"
import { rhythm } from "../utils/typography"

const LeftAlignedColumn = ({ children }) => {
  return (
    <div
      css={{
        float: "left",
        paddingBottom: `${rhythm(3.2)}`,
        width: "50%",
        "@media (max-width: 750px)": { width: "100%", float: "none", paddingBottom: "0" },
      }}
      style={{
        minWidth: "200px",
      }}
    >
      {children}
    </div>
  )
}

export default LeftAlignedColumn
