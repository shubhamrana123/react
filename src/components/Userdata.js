import React ,{useEffect}from 'react'


function Userdata()  {
    // useEffect(()=>{
    //     const userData=JSON.parse(localStorage.getItem('formdata'))
    // })
        const userData=JSON.parse(localStorage.getItem('formdata'))
   
  return (
  <>
  <table>
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
    </tr>
  </table>
  </>
  )
}

export default Userdata