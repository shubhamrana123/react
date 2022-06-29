import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
function Editform(props) {
    let navigate=useNavigate()

    const { register, handleSubmit, formState: { errors },reset } = useForm();
    // useEffect(()=>{
    //     handleSubmit = (event) => {
    //         event.preventDefault();
    //         console.log(event.target)
    //       }
    // })
//    useEffect(()=>{
//     setValue(props.list.data)
//    })
    function  updateUserData(data){
localStorage.setItem('formdata',JSON.stringify(data))
navigate('/userdata')
    }
  return (
<>
<form onSubmit={handleSubmit(updateUserData)}>
        <label>
          FirstName:
        </label>
        <input type="text"    defaultValue={props.list.data.firstName}{...register('firstName', { required: true, maxLength: 10 })}></input>
        {errors.firstName && <p>please check first name</p>}<br></br>
        <label>
          Last Name:
        </label>
        <input type="text"  defaultValue={props.list.data.lastName}  {...register('lastName', { required: true, maxLength: 10 })}></input>
        {errors.lastName && <p>please check last name</p>} <br></br>
        <label>
          Email:
        </label>
        <input type="text"  defaultValue={props.list.data.email} {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></input>
        {errors.email && <p>please check email</p>}
        <br></br>
        <button>Save</button>
        <button>Cancel</button>
   </form>

   {/* <p>{JSON.stringify(props.list.data.lastName)}</p> */}
</>
  )
}

export default Editform