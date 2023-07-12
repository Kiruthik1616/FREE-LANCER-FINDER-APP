import './login.css';
import google from "../google.png";
import {Link} from "react-router-dom";
// import Button from 
function Login() {
  return (
    
    <div className="logincover">
          <div className="cover">

         <h1>LOGIN:</h1>

            <p>USERNAME:
         <input type="text" placeholder="username" required/>
         </p>
         <p>
         PASSWORD:
         <input type="password" placeholder="password" required/>
         </p>
         <div className="button"><p> LOGIN</p> </div>
         
         <p className="text">Or login using 
         {/* <div className="image"> */}
         
         {/* </div> */}
         {/* <img src={google} > */}
         {/* <img src="google.png" > */}
         <button>

          <Link to="/gmail" className='see'>Gmail</Link>
          {/* </img> */}
          {/* </img> */}
         </button>
         </p>

         <div className="account">
            <p>Don't have an account?</p>
            <Link to="/signup" className='aaa'>Signup</Link>
            
        </div>      
</div>
    </div>
  );
}

export default Login;