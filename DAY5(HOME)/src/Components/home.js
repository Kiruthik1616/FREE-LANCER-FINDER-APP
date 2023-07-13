
import "./home.css";
import {Link} from "react-router-dom";
import boy from "./boy.gif";
import {AiOutlineInstagram} from 'react-icons/ai';
import {CiInstagram} from 'react-icons/ci';

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
      
    <div className="link">
        <Link to = '/login' style={link1} >LOGIN </Link>
        <Link to = '/login' style={link1} >SIGNUP</Link>
    </div>
      
      </nav>
      <div className="nav2">
      <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>HOME</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>ABOUT</Link>
      <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>HIRE FREELANCERS</Link>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>MEMBERSHIP</Link>
      <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>CONTACT</Link>
      </div>
      <div className="back1">
        <div className="text1">
        <h1 style ={{color:'black'}}>World's number 1 freelancing and</h1>
        <h1 style ={{color:'black'}}>crowdsourcing marketplace. </h1>
        </div>
        <div className="text2">
        <p style ={{color:'black'}}>We connect over 6,44,660 employers and freelancers globally from over 247 countries, regions, and territories.</p>
      </div>
      </div>
      <div motion>
        <img src={boy}></img>
        </div>
        <div className="foot1">
      <footer>
       
       <div className="foot2">
        Terms
       <p>
       <Link to = '/home' style={linkStyle} activeStyle={hoverStyle}>Privacy Policy</Link>
       </p>
       <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}>Terms & Conditions</Link>
      </p>
      <p>
      <Link to = '/hire' style={linkStyle} activeStyle={hoverStyle}>hello</Link>
      </p>
      <p>
      <Link to = '/about' style={linkStyle} activeStyle={hoverStyle}></Link>
      </p>
      <p>
      <Link to = '/contact' style={linkStyle} activeStyle={hoverStyle}>Fees & Charges</Link>
      </p>
      </div>
      <div className="bottom">
      <div className="icon">
      <a href="https://www.instagram.com/" target="_blank"><AiOutlineInstagram/></a>
      </div>
      Copyright © 2023 Freelancer Technology Pty Limited (ACN 142 189 759) 
      
      </div>
      
      </footer>
      </div>
      </div>
      
    )
};
export default Nav;




