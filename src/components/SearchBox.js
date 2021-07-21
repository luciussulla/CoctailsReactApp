import React from 'react'
import { useGlobalContext } from '../contexts/context'

export default function SearchBox() {
  const {setSearchTerm} = useGlobalContext();
  
  return (
    <div className="search-box">
      <div className="form-control">
        <label className="search-label">Enter search:</label>
        <input className="search-input" type="text" placeholder="eg. mohito"/>
      </div>
    </div>
  )
}