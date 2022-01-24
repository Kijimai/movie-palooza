import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/app.css"
import Navigator from "./components/navigator/Navigator"
import Footer from "./components/footer/Footer"
import { AppProvider } from "./context/context"

function App() {
  return (
    <AppProvider>
      <Navigator />
      <Footer />
    </AppProvider>
  )
}

export default App
