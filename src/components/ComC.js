import React from 'react'
import { fName } from '../App'
const ComC = () => {
  return (

    <fName.Consumer>{(fname)=>{
        return <p>this is {fname}</p>
    }}</fName.Consumer>
  )
}

export default ComC