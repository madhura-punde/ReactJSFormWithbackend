import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from './Login'
import SignIn from './SignIn'

function Home() {

  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()

  return (
    <div style={{"display": "flex",'justifyContent': 'center',
    'alignItems': 'center', 'flexDirection': 'column', 'marginTop': 100}}>


            <Link to={'/Signin'}>
                <button style={{'marginBottom': 10}}>Signup</button>
            </Link>


            <Link to= {"/Login"}>

            <button>Login</button>

            </Link>
           
           

    </div>
  )
}

export default Home