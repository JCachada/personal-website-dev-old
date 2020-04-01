import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

  
typography.options.bodyColor = "#c0c0c0";
typography.options.headerWeight = "500"

typography.options.overrideThemeStyles = () => ({
  blockquote: {
    color: 'white',
    fontStyle: 'italic'
  },
  a: 
  {
    color: "#96c4eb",
    textdecoration: "wavy"
  }
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options