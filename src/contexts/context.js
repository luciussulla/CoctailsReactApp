import React, {createContext, useContext} from 'react'
const AppContext = createContext()

const AppProvider = ({children})=> {

  return(
    <AppContext.Provider value={
      {
        someVal: 1,
      }
    }
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext} 