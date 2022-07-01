import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { userformData } from '../App'
const reducer= (state, action)=>{
  console.log(state,action);
  if(action.type==="increment")
  return state +1;
    }
    
function Userform(props) {
  const userDatas= useContext(userformData)
   const [count , setCount] = useState(0)
   const [color , setColor] = useState('blue')
  // const [count, dispatch]= useReducer(reducer,5)

  let navigate = useNavigate()
  const [userData, setUserData] = useState({
    id: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: 'Miri@123'
  })
  useEffect(()=>{
  
    setTimeout(() => {
    
      setColor('green')
       setCount((count=>count+1))
       
      // dispatch({type:"increment"})
    }, 1000);
  })

  const editUserData = (data) => {
    setUserData(previousState => {
      localStorage.setItem('formdata', JSON.stringify({ ...previousState, ...data }))
    })
    console.log(props);
  props.addUser(data);
    navigate('userdata');
    
    // console.log(previousState);
  }
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
   
    <div className='formGroup' style={{backgroundColor:color}}>
{/* <button onClick={setColor({backgroundColor:'red'})}>change</button> */}
      <p>{count}</p>
       {JSON.stringify(userDatas)}
       {JSON.stringify(props)}
      {JSON.stringify(userDatas)}
      useEffect example
      <h1>I've rendered {count} times!</h1>;
      <h1> form</h1>

      <form onSubmit={handleSubmit(editUserData)}>
        <label>
          FirstName:
        </label>
        <input type="text" {...register('firstName', { required: true, maxLength: 10 })}></input>
        {errors.firstName && <p>please check first name</p>}<br></br>
        <label>
          Last Name:
        </label>
        <input type="text" {...register('lastName', { required: true, maxLength: 10 })}></input>
        {errors.lastName && <p>please check last name</p>} <br></br>
        <label>
          Email:
        </label>
        <input type="text" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></input>
        {errors.email && <p>please check email</p>}
        <br></br>
        <label>
          Password:
        </label>
        <input type="password" {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}></input>
        {errors.password && <p>please check password</p>} <br></br>
        <input type="submit" value="Add Data" ></input>
      </form>

    </div>
  )
}

export default Userform