import React,{useContext} from 'react'
import ComC from './components/ComC'
import {  fName,lName } from './App'
const ComB = () => {
  const firstName=useContext(fName);
  const lastName=useContext(lName)
  return (
<h1>
  My name is {firstName}{lastName}
</h1>
  )
}

export default ComB