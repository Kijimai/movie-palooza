import React from "react"
import tmdbLogo from "../../images/tmdb-logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer__attribution">
        <h3>API data provided kindly by: </h3>
        <img src={tmdbLogo} alt="the movie database logo" />
      </div>
    </footer>
  )
}

export default Footer
