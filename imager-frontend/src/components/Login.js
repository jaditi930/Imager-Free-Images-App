import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
import axios from "axios";

export default function Login(props){
    let navigate=useNavigate();
    let user={
        username:"",
        password:""
    }
    function login(user){
        console.log(user)
        axios.post("http://localhost:4000/login",user)
        .then((response)=>{
          props.setToken(response.data.token)
          props.setMsg("Logged in Successfully")
            navigate("/")
        })
        .catch((err)=>{
          console.log(err)
        props.setMsg("Username or Password is wrong")
        })
      }
    return (
        <div className="form">
        <form >
        <div className="heading" style={{fontSize:"4rem",paddingBottom:"0px"}}>Welcome Back
        <div className="subheading">New to Imager?&nbsp;&nbsp;
        <Link to="/login">SignUp here</Link>
        </div>
        </div>
            <div>
            <input 
        type="text" 
        name="username" 
        id="username"
        placeholder="Username"
        onChange={(e)=>{user.username=e.target.value;}}
      />
            </div>
        <div>
        <input 
          type="password" 
          name="password" 
          id="password"
          placeholder="Password"
          onChange={(e)=>{user.password=e.target.value;}}
        />
        </div>
        <div>
        <button onClick={(e)=>{
           e.preventDefault();
            login(user)
            document.getElementById("username").value=""
            document.getElementById("password").value=""
            }}>Submit</button>
        </div>
    </form>
    </div>
    )
}