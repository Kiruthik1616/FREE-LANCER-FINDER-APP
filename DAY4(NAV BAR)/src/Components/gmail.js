import './gmail.css';

import profile from "./images.jpg";

function Gmail() {
  return (
    <div className="App">
  
      <div className="mail">
        <div className="mail1">
       
        <p>
          <div className='img'>
        <img src={profile} alt="profile" className="profile" />
        </div>
      <input type="text" placeholder="enter your mail" required/>
      </p>
      <input type="password" placeholder="enter your password" required/>
      <div className="button"><p> LOGIN</p> </div>
      </div>
      </div>
    </div>
  );
}

export default Gmail;