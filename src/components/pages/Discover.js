import React from "react"
import { useNavigate } from "react-router-dom"
const Discover = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>DISCOVER PAGE</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Discover
