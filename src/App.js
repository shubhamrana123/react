import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userdata from './components/Userdata';
import Userform from './components/Userform';
import Editform from './components/Editform';
import ComA from './ComA';
import { Provider } from 'react';
const fName= createContext();
const lName = createContext()
const userformData = createContext()
function App() {
  const [userData,setUserData]= useState([]);
  
 
  // const [color,setColor] = useState({  brand: "Ford",
  // model: "Mustang",
  // year: "1964",
  // color: "red"})
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // function submit(data) {
  //   localStorage.setItem('formData',data);
    
  // }

  const addUser = (data)=>
  {
    console.log("added",JSON.stringify(data))
    setUserData(prevState=>(
      [...prevState,data]
    ))
  }


  return (
<>
<fName.Provider value={'shubham'}>
 
    <userformData.Provider value={userData}>
  <ComA/>
  </userformData.Provider>
 
  </fName.Provider>
{/* <ComA></ComA> */}
{/* <Userform/>
 <Userdata/> */}
 <BrowserRouter>
<Routes>
    <Route path="userdata" element={<Userdata list={userData}></Userdata>} />
<Route path="/" element={<Userform addUser={addUser}></Userform>} />
<Route path='/edit' element={<Editform list={userData} ></Editform>}/>
</Routes>
 </BrowserRouter>
 
 {/* < userList/> */}
</>
/* <div className='formGroup'>
    <h1>{color.brand}</h1>
    <p> its model is {color.model} and color is {color.color}</p>
 <button type="button" onClick={()=>{
  setColor(previousState=>{
    // console.log(previousState);
    return {...previousState,color:'green'}
  })
 }}>Green</button>
      </div> */
  );
}

export default App;
export {fName,lName,userformData};