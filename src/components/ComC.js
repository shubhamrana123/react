import React from 'react'
import { fName ,lName} from '../App'
const ComC = () => {
  return (

    <fName.Consumer>{(fname)=>{
        return (
<lName.Consumer>{(lName)=>{
return <p>this is {fname},{lName}</p>
}}</lName.Consumer>
        )
       
    }}</fName.Consumer>
  )
}

export default ComC