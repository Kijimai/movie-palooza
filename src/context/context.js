//ADD A DEMO AUTH
//USE AUTH0
//

import React, { useState, useEffect, useContext, createContext } from "react"
import axios from "axios"

const authAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    // "Content-Type": "application/JSON;charset=utf-8",
  },
})

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("")
  const [discoveredMovies, setDiscoveredMovies] = useState([])

  const fetchDiscovered = async () => {
    const response = await authAxios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c9836af7250a2d3666c4bd9118ac774c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((data) => data)
    console.log(response.data.results)
    setDiscoveredMovies(response.data.results)
  }

  const fetchData = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target[0].value)
    setSearchValue(e.target[0].value)
    console.log("Pressed")
  }

  const handleChange = () => {}

  // useEffect(() => {
  //   authAxios.get("/76341").then(({ data }) => {
  //     console.log(data)
  //   })
  // })

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleChange,
        searchValue,
        fetchDiscovered,
        discoveredMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }

// get genres, name, id, homepage, imdb_id, original language, original_title, overview, poster_path, release_date, runtime, status, title,

//SAVE THE POSTER IMAGE, NAME, RATING, DATE SAVED, WHEN TO WATCH(?),
