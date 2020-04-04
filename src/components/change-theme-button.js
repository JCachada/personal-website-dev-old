import React from "react"
import { useColorMode } from "theme-ui"

const ChangeThemeButton = () => {

  let [colorMode, setColorMode] = useColorMode()

  return (
    <header>
      <button
        onClick={e => {
          setColorMode(colorMode = nextTheme(colorMode))
        }}
      >
        Toggle {nextTheme(colorMode)}
      </button>
    </header>
  )
}

function nextTheme(colorMode)
{
  if(colorMode === "dark")
  {
    return "deep";
  }
  else if(colorMode === "deep")
  {
    return "light";
  }
  else if(colorMode === "light")
  {
    return "dark"; 
  }
}

export default ChangeThemeButton