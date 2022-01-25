import React from "react"
import {navLinks} from "../../utils/routes"
// const navLinks = ["discover", "about", "contact"]

const Navigator = () => {
  return (
    <nav className="navigator">
      <div className="navigator__inner">
        <a href="/" className="site-title">Movie Palooza</a>
      </div>
      <ul className="navigator__links">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <a className="navigator__link" href={`${link.route}`}>
                {link.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigator
