import React from "react"
import { useGlobalContext } from "../../context/context"
import { useNavigate } from "react-router-dom"
const Discover = () => {
  const { searchValue } = useGlobalContext()
  const navigate = useNavigate()

  return (
    <div>
      <h1>DISCOVER PAGE</h1>
      <h2>{searchValue}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Discover
