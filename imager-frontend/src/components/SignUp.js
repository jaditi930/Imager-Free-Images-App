import { Link, useNavigate } from "react-router-dom"

export default function SignUp(props){
  console.log(props)
    let navigate=useNavigate();
    let user={
        username:"",
        email:"",
        password:""
    }
    return (
      <div className="form">
        <form >
        <div className="heading" style={{fontSize:"4rem",paddingBottom:"0px"}}>Join Imager
        <div className="subheading">Already have an account?&nbsp;&nbsp;
        <Link to="/login">Login here</Link>
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
            type="text" 
            name="email" 
            onChange={(e)=>{user.email=e.target.value;}}
            placeholder="Email"
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
           console.log(user)
            props.signup(user);
            navigate("/login")
            }}>Submit</button>
        </div>

    </form>
    </div>

    )
}