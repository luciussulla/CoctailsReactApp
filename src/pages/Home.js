import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'
import {useGlobalContext} from '../contexts/context'

import CoctailList from '../components/CoctailList'
import SearchBox from '../components/SearchBox'

export default function Home() {
  const {someVal} = useGlobalContext()
  
  return (
    <div>
      <SearchBox/>
      <CoctailList/>
      {someVal}
    </div>
  )
}
