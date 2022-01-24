import React from "react"
import { useNavigate } from "react-router-dom"
const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="error">
      <h1>BIG ERROR</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Error
