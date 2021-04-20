import React from 'react';
import '../css/style.css';
import Library from "../images/Login.png";
import Advanture_Companion from "../images/Advanture_Companion.png";
import Code_quiz from "../images/code_quiz.png";
import Password_generator from "../images/password_generator.png";
import Day_planner from "../images/Day_planner.png";
import Burger from "../images/burger.png";
import Weather_Dashboard from "../images/Weather_Dashboard.png";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Portfolio=()=>{
return(
    <section className="container">
            <h2 className="about-me-color">Portfolio</h2>
            <hr/>
            <section className="row">
                <article className="col-lg-4">
                    {/* <h3>Library Management Application</h3>
                    <a href="https://panwaramita.github.io/Day-Planner/" target="blank">
                        <img src={Library} className="img-fluid" alt="Day Planner"/>
                    </a>
                    <a href="https://github.com/spental/LibraryManagementApplication" className="updated" target="blank">
                        Library Management repository link
                    </a><br/>
                    <a href="https://librarymanagement2.herokuapp.com/" className="updated" target="blank">
                        Library Management deployed link
                    </a> */}
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5" }} className="imgBorderValue">
  <Card.Img variant="top" src={Library} style={{ height: '10rem'}} />
  <Card.Body>
    <Card.Title>Library Management Application</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/spental/LibraryManagementApplication">Repository link</Card.Link>
    <Card.Link href="https://librarymanagement2.herokuapp.com/">Deployed link</Card.Link>
  </Card.Body>
</Card>
                </article>
                <article className="col-lg-4">
                    {/* <h3>Adventure Companion</h3>
                    <a href="https://bartok1945.github.io/adventure_companion/" target="blank">
                        <img src={Advanture_Companion} className="img-fluid"
                            alt="Adventure Companion"/>
                    </a>
                    <a href="https://github.com/Bartok1945/adventure_companion" className="updated" target="blank">
                        Adventure Companion repository link
                    </a><br/>
                    <a href="https://bartok1945.github.io/adventure_companion/" className="updated" target="blank">
                        Adventure Companion deployed link
                    </a> */}
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5"}} className="imgBorderValue">
  <Card.Img variant="top" src={Advanture_Companion} />
  <Card.Body>
    <Card.Title>Adventure Companion</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/Bartok1945/adventure_companion">Repository link</Card.Link>
    <Card.Link href="https://bartok1945.github.io/adventure_companion/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4">
                    {/* <h3>Code Quiz</h3>
                    <a href="https://panwaramita.github.io/Code-Quiz/" target="blank">
                        <img src={Code_quiz} className="img-fluid" alt="Code Quiz"/>
                    </a>
                    <a href="https://github.com/panwaramita/Code-Quiz" className="updated" target="blank">
                        Code Quiz repository link
                    </a><br/>
                    <a href="https://panwaramita.github.io/Code-Quiz/" className="updated" target="blank">
                        Code Quiz deployed link
                    </a> */}

                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5" }} className="imgBorderValue">
  <Card.Img variant="top" src={Code_quiz} />
  <Card.Body>
    <Card.Title>Code Quiz</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/panwaramita/Code-Quiz">Repository link</Card.Link>
    <Card.Link href="https://panwaramita.github.io/Code-Quiz/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                </section>
                <section className="row sectionMargin">
                <article className="col-lg-4">
                    {/* <h3>Password Generator</h3>
                    <a href="https://panwaramita.github.io/Password-Generator/" target="blank">
                        <img src={Password_generator} className="img-fluid"
                            alt="Password Generator"/>
                    </a>
                    <a href="https://github.com/panwaramita/Password-Generator" className="updated" target="blank">
                        Password Generator repository link
                    </a><br/>
                    <a href="https://panwaramita.github.io/Password-Generator/" className="updated" target="blank">
                        Password Generator deployed link
                    </a> */}
                    <Card style={{ width: '18rem' , backgroundColor: "#a6d8d5"}} className="imgBorderValue">
  <Card.Img variant="top" src={Password_generator} />
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/panwaramita/Password-Generator">Repository link</Card.Link>
    <Card.Link href="https://panwaramita.github.io/Password-Generator/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4">
                    {/* <h3>Day Planner</h3>
                    <a href="https://panwaramita.github.io/Day-Planner/" target="blank">
                        <img src={Day_planner}  className="img-fluid" alt="Day Planner"/>
                    </a>
                    <a href="https://github.com/panwaramita/Day-Planner" className="updated" target="blank">
                        Day Planner repository link
                    </a><br/>
                    <a href="https://panwaramita.github.io/Day-Planner/" className="updated" target="blank">
                        Day Planner deployed link
                    </a> */}
                    <Card style={{ width: '18rem',  backgroundColor: "#a6d8d5" }} className="imgBorderValue">
  <Card.Img variant="top" src={Day_planner} />
  <Card.Body>
    <Card.Title>Day Planner</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/panwaramita/Day-Planner">Repository link</Card.Link>
    <Card.Link href="https://panwaramita.github.io/Day-Planner/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4">
                    {/* <h3>Burger</h3>
                    <a href="https://sheltered-castle-40664.herokuapp.com/" target="blank">
                        <img src={Burger} className="img-fluid" alt="Burger"/>
                    </a>
                    <a href="https://github.com/panwaramita/Burger" className="updated" target="blank">
                        Burger repository link
                    </a><br/>
                    <a href="https://sheltered-castle-40664.herokuapp.com/" className="updated" target="blank">
                        Burger deployed link
                    </a> */}
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5"}} className="imgBorderValue">
  <Card.Img variant="top" src={Burger} />
  <Card.Body>
    <Card.Title>Burger</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/panwaramita/Burger">Repository link</Card.Link>
    <Card.Link href="https://sheltered-castle-40664.herokuapp.com/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
            </section>
            <section className="row sectionMargin">
                <article className="col-lg-12">
                    {/* <h3>Weather Dashboard</h3>
                    <a href="https://panwaramita.github.io/Weather-Dashboard/" target="blank">
                        <img src={Weather_Dashboard} className="img-fluid"
                            alt="Weather Dashboard"/>
                    </a>
                    <a href="https://github.com/panwaramita/Weather-Dashboard" className="updated" target="blank">
                        Weather deshborad repository link
                    </a><br/>
                    <a href="https://panwaramita.github.io/Weather-Dashboard/" className="updated" target="blank">
                        Weather deshborad deployed link
                    </a> */}
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5" }} className="imgBorderValue">
  <Card.Img variant="top" src={Weather_Dashboard} />
  <Card.Body>
    <Card.Title>Weather Dashboard</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link href="https://github.com/panwaramita/Weather-Dashboard">Repository link</Card.Link>
    <Card.Link href="https://panwaramita.github.io/Weather-Dashboard/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
            </section>
        </section>
)
}

export default Portfolio;