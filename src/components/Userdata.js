import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'

function Userdata()  {
    // useEffect(()=>{
    //     let userData=JSON.parse(localStorage.getItem('formdata'))
    //     console.log(userData);
    // })
    let navigate=useNavigate();
        const userData=JSON.parse(localStorage.getItem('formdata'))
function updateData(e,name){
// console.log(e.target,name);
navigate('/edit')

}
  return (
  <>
  <table>
    <thead> 
      <tr>
      
      <th>
            FirstName
        </th>
        <th>
            LastName
        </th>
        <th>
            Email
        </th>
        <th>
            Password
        </th>
        <th>
       Action
        </th>
        </tr>
        </thead>
       
  
   
    <tbody>
      <tr>
      <td>
      {userData.firstName}
        </td>
        <td>
      {userData.lastName}
        </td>
        <td>
      {userData.email}
        </td>
        <td>
      {userData.password}
        </td>
        <td>
            <button onClick={(e)=>{updateData(e,userData.firstName)}}>Edit</button>
        </td>
      </tr>
    <tr>
    <td>
      {userData.firstName}
        </td>
        <td>
      {userData.lastName}
        </td>
        <td>
      {userData.email}
        </td>
        <td>
      {userData.password}
        </td>
        <td>
            {/* <button onClick={updateData()}>Edit</button> */}
        </td>
    </tr>
    </tbody>
    <tbody>
       
    </tbody>
  </table>
  </>
  )
}

export default Userdata