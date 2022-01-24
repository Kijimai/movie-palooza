import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  createContext,
} from "react"
import axios from "axios"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "hello world" }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {}

export { AppProvider, AppContext, useGlobalContext }
