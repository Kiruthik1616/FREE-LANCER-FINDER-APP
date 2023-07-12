import "./about.css";
import {Link} from "react-router-dom";

// import { Link } from "react-router-dom";
const About = () => {

    return (
        
      <div className="navbar">
      <div className="about">
        <div className="image1">
            <img src="https://cdn3.f-cdn.com/build/css/images/about-us/overview-company-overview.jpg"/>
        </div>
       
        <div className="para1">
            
Company Overview

Freelancer.com is the world's largest freelancing and crowdsourcing marketplace by number of users and projects. We connect over 67,642,339 employers and freelancers globally from over 247 countries, regions and territories. Through our marketplace, employers can hire freelancers to do work in areas such as software development, writing, data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.

Freelancer Limited is trading on the Australian Securities Exchange under the ticker ASX:FLN

        </div>
      </div>
      </div>
    )
}
export default About;