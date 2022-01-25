import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/app.css"
import Navigator from "./components/navigator/Navigator"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Discover from "./components/pages/Discover"
import Error from "./components/pages/Error"
import { AppProvider } from "./context/context"

function App() {
  return (
    <AppProvider>
      <Navigator />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="discover" element={<Discover />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppProvider>
  )
}

export default App
