import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const users = useSelector(state=>state.users)

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()
  

  const handleLogin = ()=>{
    const payload2 = {
      email : email,
      password : password
    }

  axios.post('http://localhost:8787/login',{payload2})

    .then(function (response) {
      console.log(response.data.message);
      alert(response.data.message)
    })
    .catch(function (error) {
      console.log(error);
      alert('Some error occured!')
    });   
      
}
    

  return (
    <div>

    <form>
        <input type='email' placeholder= 'Enter Email' value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>

        <input type='password' placeholder= 'Enter Password'  value={password} 
          onChange={(e)=>setpassword(e.target.value)}/>

        <input type="button" value='Login' onClick={()=>{handleLogin()}}/>
      </form>
      <Link to={'/'}><button>Go To Home Page</button></Link>


    </div>
  )
}

export default Login