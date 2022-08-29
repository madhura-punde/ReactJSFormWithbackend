import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import { useSelector } from 'react-redux';


function App() {
  const users = useSelector(state=>state.users)
  console.log(users)

  return (
  
  <div className="App">


     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path = "/Signin" element= {<SignIn/>}/>
          <Route path = "/Login" element = {<Login/>}/>
         
      </Routes>
     
    </div>
  );
}

export default App;
