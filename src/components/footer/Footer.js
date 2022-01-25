import React from "react"
import tmdbLogo from "../../images/tmdb-logo.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer__attribution">
        <h3>API data provided kindly by: </h3>
        <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/?language=en-US"><img className="footer__logo" src={tmdbLogo} alt="the movie database logo" /></a>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </div>
    </footer>
  )
}

export default Footer
