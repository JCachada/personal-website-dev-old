import React from "react"
import { rhythm } from "../utils/typography"

const RightAlignedColumn = ({ children }) => {
  return (
        <div
          class="column"
          style={{ float: "right", width: "50%", paddingBottom: `${rhythm(3.2)}`, minWidth: "200px" }}
        >
          {children}
        </div>
  )
}

export default RightAlignedColumn
