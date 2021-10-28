import React from 'react';
import image from "../images/profile_pic.jpg";
import Resume from '../images/Amita_Resume_Web_development.pdf';
import '../css/style.css';
const About=()=>{
return(
    <main className="container about-me">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="about-me-color">About Me</h2>
                <hr/>
            </div>
        </div>

            <div className="col-lg-12">
                <img src={image} className="Profile_pic" alt="Profile photo"/>
                <p>
                    I am Amita. I completed by Bachelor's degree from NIE, Mysore in Information Science branch. I am having 2.5 year's experience in web development.<br/> My first project was iDEA, in the iDEA project I worked in the support call department for coding related issues. Function of support call department is to solve all the customer related issues. Some of the issues are related to the data correction and coding correction. I was the part of coding correction team whose responsibility is to check the code and correct all the issues that is related to the call. For the project the environment used are ASP.NET, C#.NET, WCF, XML, SQL SERVER 2005.

<br/>The other project in which I worked is Money First, in this project I was involved in the development of Stock Chart tool. The tool is used to display the current status of the Sensex Market. For this Project, I worked in SQL SERVER 2008, JAVASCRPIT, WCF.

                </p>
            </div>
        <div className="row">
            <div className="col-lg-12">
                <a href="https://github.com/panwaramita" className="updated" target="blank">Github</a>
                <a href="https://www.linkedin.com/in/panwaramita/" target="blank" className="updated">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1wXUZO5mKyUYyoH4pjympnWg4WUHqo-KB/view?usp=sharing"  target="blank" className="updated">Resume</a><br/>
                Phone: 1-301-921-5727<br/>
                Email: panwar.amita@gmail.com
            </div>
        </div>

    </main>
)
}

export default About;