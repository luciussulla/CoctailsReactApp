import React, {createContext, useContext, useState, useEffect, useCallback} from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

const AppProvider = ({children})=> {
  const [loading,    setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails,   setCocktails] = useState([])

  const fetchDrinks = useCallback(async ()=> {
    setLoading(true) /* START SET LOADING */ 
    try { 
      const response = await fetch(`${url}${searchTerm}`)
      console.log(response)
      const data = await response.json()
      const {drinks} = data
      if (drinks) {
        const newCocktails = drinks.map((item)=> {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
          return {
            id:idDrink, 
            name: strDrink, 
            image: strDrinkThumb, 
            info: strAlcoholic, 
            glass: strGlass
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)  /* FINISH SET LOADING */ 
    } catch(error) {
      console.log(error)
      setLoading(false)  /* FINISH SET LOADING */ 
    }
  }, [searchTerm])

  useEffect(()=> {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  return(
    <AppContext.Provider value={
      {
        loading, cocktails, setSearchTerm
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