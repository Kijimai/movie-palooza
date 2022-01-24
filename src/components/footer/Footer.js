import React from "react"
import tmdbLogo from "../../images/tmdb-logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer__attribution">
        <h3>API data provided kindly by: </h3>
        <img className="footer__logo" src={tmdbLogo} alt="the movie database logo" />
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </div>
    </footer>
  )
}

export default Footer
