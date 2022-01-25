import React from "react"
import { FaSearch } from "react-icons/fa"

const Searchbar = () => {
  return (
    <section className="search">
      <form className="search__form">
        <label htmlFor="search-movie">
          <FaSearch />
        </label>
        <input
          className="search__searchbar"
          id="search-movie"
          type="text"
          placeholder="Search for a movie"
        />
      </form>
    </section>
  )
}

export default Searchbar
