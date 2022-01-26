import React from "react"
import { useGlobalContext } from "../../context/context"
import Searchbar from "./Searchbar"

const Main = () => {
  const { searchValue, searchedMovie } = useGlobalContext()

  if (searchValue === "" && searchedMovie === "") {
    return (
      <main>
        <Searchbar />
      </main>
    )
  }

  return <main>{searchedMovie}</main>
}

export default Main
