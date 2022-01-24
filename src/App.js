import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/app.css"
import Main from "./components/main/Main"
import Discover from "./components/pages/Discover"
import Error from "./components/pages/Error"
import { AppProvider } from "./context/context"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="movies/discover" element={<Discover />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
