import './signup.css';
import {Link} from "react-router-dom";

function Signup() {
  return (
    
    <div className="App">
      <div className="sign">
        <p>First Name:
      <input type="text" placeholder="enter your name" required/>
      </p>
      <p>Last Name:
      <input type="text" placeholder="enter your name"  required/>
      </p>
      <p>User Name:
      <input type="text" placeholder="enter your username"  required/>
      </p>
      <p>Mail Id:
      <input type="text" placeholder="enter your MailId"  required/>
      </p>
      <p>New Password:
      <input type="password" placeholder="enter your new password"  required/>
      </p>
      <p> Re-enter Password:
      <input type="password" placeholder="re-enter your new password"  required/>
      </p>
      <div className="sign1">
      <button >

          <Link to="/login" className='see'>Sign Up</Link>
          {/* </img> */}
          {/* </img> */}
         </button>
         </div>
         </div>
    </div>
  );
}

export default Signup;