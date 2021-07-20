import React from 'react'

export default function SearchBox() {
  return (
    <div className="search-box">
      <div className="form-control">
        <labale className="search-label">Enter search:</labale>
       <input className="search-input" type="text" placeholder="eg. mohito"></input>
      </div>
    </div>
  )
}
