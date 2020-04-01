import React from "react"
import { rhythm } from "../utils/typography"

const LeftAlignedColumn = ({ children }) => {
  return (
    <div
      class="column"
      style={{ float: "left", width: "50%", paddingBottom: `${rhythm(3.2)}`, minWidth: "200px"}}
    >
      {children}
    </div>
  )
}

export default LeftAlignedColumn
