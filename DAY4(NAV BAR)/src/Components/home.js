
import "./home.css";
import {Link} from "react-router-dom";

// import { Link } from "react-router-dom";
const Nav = () => {
    const linkStyle = {
        color: 'white',
        textDecoration:'none',
        padding:'5px 10px',
        borderRadius: '5px',
      };
      const hoverStyle = {
        backgroundColor: 'blue',
        color: 'black',
      };
      const link1 = {
        color: 'black',
        textDecoration:'none',
        borderRadius: '10px',
      };
    
    return (
        
      <div className="navbar">
        <nav>
      <div className="nav">
        <img src="https://www.flaticon.com/free-icon/freelance_1014287"/>
        <Link to = '/login' style={link1} >LOGIN/SIGNUP</Link>
      </div>
      </nav>
      <div className="nav2">
      <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>MEMBERSHIP</Link>
      </div>
      </div>
    )
};


export default Nav;




