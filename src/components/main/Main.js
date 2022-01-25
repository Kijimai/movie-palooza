import React from "react"
import { useGlobalContext } from "../../context/context"
import Searchbar from "./Searchbar"

const Main = () => {
  const { searchValue } = useGlobalContext()

  if (!searchValue) {
    return (
      <main>
        <Searchbar />
      </main>
    )
  }

  return <main>{searchValue}</main>
}

export default Main
