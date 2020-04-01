import React from "react"
import { rhythm } from "../utils/typography"

const RightAlignedColumn = ({ children }) => {
  return (
    <div
    css={{
        float: "right",
        width: "50%",
        "@media (max-width: 750px)": { width: "100%", float: "none" },
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
