import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'
import {useGlobalContext} from '../contexts/context'
import SearchBox from '../components/SearchBox'

export default function Home() {
  const {someVal} = useGlobalContext()

  return (
    <div>
      <SearchBox/>
      {someVal}
    </div>
  )
}
