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
    <AppContext.Provider value={{ handleSubmit, handleChange, searchValue }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }

// get genres, name, id, homepage, imdb_id, original language, original_title, overview, poster_path, release_date, runtime, status, title,
