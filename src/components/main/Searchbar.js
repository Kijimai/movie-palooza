import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context/context"
import { FaSearch } from "react-icons/fa"

const Searchbar = () => {
  const { handleSubmit } = useGlobalContext()

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <label htmlFor="search-movie">
          <FaSearch />
        </label>
        <input
          className="search__searchbar"
          id="search-movie"
          type="text"
          placeholder="Search for a movie"
        />
        <button>Search</button>
      </form>
    </section>
  )
}

export default Searchbar
