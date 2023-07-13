import './login.css';
// import profile from "./user.jpg";
// import mail from "./mail.jpg";
// import pass from "./pass.jpg";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             {/* <img src={profile} alt="profile" className="profile"/> */}
             <div>
             </div>
           </div>
         </div>
         <div>
           <h1>USER LOGIN</h1>
           <div>
            <br></br>
             {/* <img src={mail} alt="mail" className="mail"/> */}
             <input type="text" placeholder="Username" className="name" required/>
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="mail"/> */}
             <input type="password" placeholder="Password" className="name" required/>
           </div><br></br>
           <br></br>
          <div className="login-button">
          {/* <button>Login</button> */}
          {/* <input type="button">LOGIN</input> */}
          <Link to="/login"><button type="submit">LogIn</button></Link>
          </div>
          <br></br>
<br></br> 
<br></br>          
            <p className="link">
               
            </p>

            <Link to='/signup' className="login">Signup</Link>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;












// import './login.css';
// import google from "../google.png";
// import {Link} from "react-router-dom";
// function Login() {
//   return (
    
//     <div className="logincover">
//           <div className="cover">
//          <h1>LOGIN:</h1>
//          <p>USERNAME:
//          <input type="text" placeholder="username" required/>
//          </p>
//          <p>
//          PASSWORD:
//          <input type="password" placeholder="password" required/>
//          </p>
//          <div className="button"><Link to="/home" className='aaa'>LOGIN</Link></div>       
//          <p className="text">Or login using 
//          <button>
//           <Link to="/gmail" className='see'>Gmail</Link>
//          </button>
//          </p>
//          <div className="account">
//             <p>Don't have an account?</p>
//             <Link to="/signup" className='aaa'>Signup</Link>           
//         </div>      
//         </div>
//     </div>
//   );
// }

// export default Login;