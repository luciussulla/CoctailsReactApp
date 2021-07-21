import React from 'react'
import Coctail from './Coctail'
import Loading from './Loading'
import {useGlobalContext} from '../contexts/context'

export default function CoctailList() {
  const {cocktails, loading} = useGlobalContext()
  console.log(cocktails)

  if(loading) {
    return <Loading/>
  }

  if(cocktails.length<1) {
    return (
      <h2 className="section-title">No coctails match the search</h2>
    )
  }

  return (
   <section className="cocktail-section">
     <h2 className="section-title">cocktails</h2>
     <div className="cocktails-center">
       {cocktails.map(item=> {
         return <Coctail key={item.id} {...item}/>
       })}
     </div>
   </section>
  )
}
