import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
function Userform() {
    let navigate= useNavigate()
    const [userData,setUserData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'Miri@123'
    })
    const updateUserData=(data)=>{
 setUserData(previousState=>{
     localStorage.setItem('formdata',JSON.stringify({...previousState,...data}))

navigate('userdata')
 }

)
// console.log(previousState);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    function submit(data) {
        JSON.stringify(data)
      localStorage.setItem('formData',JSON.stringify(data));
      
    }
  return (
    <div className='formGroup'>
    <h1> form</h1>
 
    <form onSubmit={handleSubmit(updateUserData)}>
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