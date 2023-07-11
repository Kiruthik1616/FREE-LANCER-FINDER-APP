import './signup.css';
import {Link} from "react-router-dom";

function Signup() {
  return (
    
    <div className="App">
      <div className="sign">
        <p>First Name:
      <input type="text" placeholder="enter your name"/>
      </p>
      <p>Last Name:
      <input type="text" placeholder="enter your name"/>
      </p>
      <p>User Name:
      <input type="text" placeholder="enter your username"/>
      </p>
      <p>Mail Id:
      <input type="text" placeholder="enter your MailId"/>
      </p>
      <p>New Password:
      <input type="password" placeholder="enter your new password"/>
      </p>
      <p> Re-enter Password:
      <input type="password" placeholder="re-enter your new password"/>
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