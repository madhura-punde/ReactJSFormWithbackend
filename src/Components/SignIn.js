import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'


function SignIn() {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setpassword] = useState('')

  const dispatch = useDispatch()

  const register = ()=>{

   const  payloadpass = {
      FirstName, LastName, Email, 
      Password };
      console.log(payloadpass)

    // dispatch({
    //   type : 'REGISTER',
    //   payload : payloadpass

    // })
   
    axios
    .post('http://localhost:8787/register',{payloadpass})
    .then(function (response) {
      // console.log(response);
      alert(response.data.message)
    })
    .catch(function (error) {
      // console.log(error);
      alert(error)
    });
    
  }

  return (
    <div>
        <form>
        <input type='text' placeholder= 'Enter First name' value={FirstName} 
          onChange={(e)=>setFirstName(e.target.value)}/>
        <input type='text' placeholder= 'Enter Last name'  value={LastName} 
          onChange={(e)=>setLastName(e.target.value)}/>
        <input type='email' placeholder= 'Enter Email'  value={Email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder= 'Enter Password'  value={Password} 
          onChange={(e)=>setpassword(e.target.value)}/>
        
        <input type="button" value='Register' onClick={()=>{register()}}/>
        
      </form>

      <Link to={"/Login"}>
          <button>Go To Login </button>
      </Link>       
    </div>
  )
}

export default SignIn