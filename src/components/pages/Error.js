import React from "react"
import { useNavigate } from "react-router-dom"
const Error = () => {
  const navigate = useNavigate()

  return (
    <section className="error">
      <div className="error__message-container">
        <h1>404 PAGE NOT FOUND!</h1>
        <p>Looks like the page you were trying to visit could not be found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </section>
  )
}

export default Error
