import React from 'react'
import {Link} from 'react-router-dom'

const Coctail = ({image,name, id, info, glass})=> {
  console.log("called")

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name}/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn cocktail-link">
          details
        </Link>
      </div>
    </article>
  )
}

export default Coctail