import React, { useEffect, useState } from "react"
import { useGlobalContext } from "../../../context/context"
import { useNavigate } from "react-router-dom"
import axios from "axios"

//temporary

const Discover = () => {
  const { searchValue, fetchDiscovered, discoveredMovies } = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    fetchDiscovered()
  }, [])

  return (
    <section className="discover">
      <div className="discover__container">
        {discoveredMovies.map((movie) => {
          const { id, poster_path, title, vote_average, overview } = movie
          return (
            <article key={id} className="discover-movie">
              <img
                className="discover-movie__image"
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={movie.title}
              />
              <div className="discover-movie__info">
                <div
                  className="rating"
                  style={{
                    backgroundColor: `${vote_average >= 5 ? "green" : "red"}`,
                  }}
                >
                  <p>{vote_average}</p>
                </div>
                <h2>{title}</h2>
                <p>{overview.substring(0, 100)}...</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Discover
