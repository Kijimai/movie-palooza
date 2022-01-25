import React from "react"
import tmdbLogo from "../../images/tmdb-logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__attribution">
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <a
          title="Visit the movie database website"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.themoviedb.org/?language=en-US"
        >
          <img
            className="footer__logo"
            src={tmdbLogo}
            alt="the movie database logo"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
