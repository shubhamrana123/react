import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom'

function Userdata(props)  {
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
  {/* {JSON.stringify(props.list[0])} */}
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
    {props.list.map((data)=>( 
    <tr  key={data.firstName}>
    {/* data=  {JSON.stringify(data)} */}
    <td >
      {(data.firstName)}
        </td>
        <td  >
      {data.lastName}
        </td>
        <td   >
      {data.email}
        </td>
        <td >
      {data.password}
        </td>
        <td>
        <button onClick={(e)=>{updateData(e,userData.firstName)}}>Edit</button>
        </td>
    </tr>)
        
      )}
   
   
   
    </tbody>
    <tbody>
       
    </tbody>
  </table>
  </>
  )
}

export default Userdata