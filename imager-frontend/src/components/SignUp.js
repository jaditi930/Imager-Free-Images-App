import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function SignUp(props){
    let navigate=useNavigate();
    let user={
        username:"",
        email:"",
        password:""
    }
    async function signup(user){
      await axios.post("https://imager-api.onrender.com/signup",user)
       .then((response)=>{
         props.setMsg("Account Created Successfully")
         navigate("/login")
     
       })
       .catch((err)=>{
         props.setMsg("Username or email already exists")
         navigate("/signup")
     
       })
     }
    return (
      <div className="form">
        <form >
        <div className="heading" style={{paddingBottom:"0px"}}>Join Imager
        <div className="subheading">Already have an account?&nbsp;&nbsp;
        <Link to="/login">Login here</Link>
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
            type="text" 
            name="email" 
            id="email" 
            onChange={(e)=>{user.email=e.target.value;}}
            placeholder="Email"
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
        <button type="submit" onClick={ (e)=>{
           e.preventDefault();
            signup(user)
            document.getElementById("username").value=""
            document.getElementById("password").value=""
            document.getElementById("email").value=""
            }}>Submit</button>
        </div>

    </form>
    </div>

    )
}