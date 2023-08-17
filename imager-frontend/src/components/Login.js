import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
export default function Login(props){
    let navigate=useNavigate();
    let user={
        username:"",
        password:""
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
        placeholder="Username"
        onChange={(e)=>{user.username=e.target.value;}}
      />
            </div>
        <div>
        <input 
          type="password" 
          name="password" 
          placeholder="Password"
          onChange={(e)=>{user.password=e.target.value;}}
        />
        </div>
        <div>
        <button type="submit" onClick={(e)=>{
           e.preventDefault();
            props.login(user);
            navigate("/")
            }}>Submit</button>
        </div>
    </form>
    </div>
    )
}