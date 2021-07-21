import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../contexts/context'

export default function SearchBox() {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('')
  
  const searchCocktail = ()=> {
    setSearchTerm(searchValue.current.value)
  }
  
  useEffect(()=> {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e)=> {
    e.preventDefault()
  }

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="search-label" htmlFor="name">Enter search:</label>
          <input className="search-input" id="name" type="text" placeholder="eg. mohito" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </div>
  )
}