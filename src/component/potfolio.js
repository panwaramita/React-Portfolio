import React from 'react';
import '../css/style.css';
import Library from "../images/Login.png";
import Advanture_Companion from "../images/Advanture_Companion.png";
import Code_quiz from "../images/code_quiz.png";
import Password_generator from "../images/password_generator.png";
import Day_planner from "../images/Day_planner.png";
import Burger from "../images/burger.png";
import Weather_Dashboard from "../images/Weather_Dashboard.png";
import book from "../images/book.png";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Portfolio=()=>{
return(
    <section className="container">
            <h2 className="about-me-color">Portfolio</h2>
            <hr/>
            <section className="row">
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5",marginBottom:"5px" }} className="imgBorderValue">
  <Card.Img variant="top" src={Library} style={{ height: '10rem'}} />
  <Card.Body>
    <Card.Title>Library Management Application</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/spental/LibraryManagementApplication">Repository link</Card.Link>
    <Card.Link target="blank" href="https://librarymanagement2.herokuapp.com/">Deployed link</Card.Link>
  </Card.Body>
</Card>
                </article>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5",marginBottom:"5px"}} className="imgBorderValue">
  <Card.Img variant="top" src={Advanture_Companion} />
  <Card.Body>
    <Card.Title>Adventure Companion</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/Bartok1945/adventure_companion">Repository link</Card.Link>
    <Card.Link target="blank" href="https://bartok1945.github.io/adventure_companion/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5" }} className="imgBorderValue">
  <Card.Img variant="top" src={Code_quiz} />
  <Card.Body>
    <Card.Title>Code Quiz</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/Code-Quiz">Repository link</Card.Link>
    <Card.Link target="blank" href="https://panwaramita.github.io/Code-Quiz/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                </section>
                <section className="row sectionMargin">
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem' , backgroundColor: "#a6d8d5",marginBottom:"5px"}} className="imgBorderValue">
  <Card.Img variant="top" src={Password_generator} />
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/Password-Generator">Repository link</Card.Link>
    <Card.Link target="blank" href="https://panwaramita.github.io/Password-Generator/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem',  backgroundColor: "#a6d8d5" ,marginBottom:"5px"}} className="imgBorderValue">
  <Card.Img variant="top" src={Day_planner} />
  <Card.Body>
    <Card.Title>Day Planner</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/Day-Planner">Repository link</Card.Link>
    <Card.Link target="blank" href="https://panwaramita.github.io/Day-Planner/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5",marginBottom:"5px"}} className="imgBorderValue">
  <Card.Img variant="top" src={Burger} />
  <Card.Body>
    <Card.Title>Burger</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/Burger">Repository link</Card.Link>
    <Card.Link target="blank" href="https://sheltered-castle-40664.herokuapp.com/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
            </section>
            <section className="row sectionMargin" style={{marginBottom:"30px"}}>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5",marginBottom:"5px" }} className="imgBorderValue">
  <Card.Img variant="top" src={Weather_Dashboard} />
  <Card.Body>
    <Card.Title>Weather Dashboard</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/Weather-Dashboard">Repository link</Card.Link>
    <Card.Link target="blank" href="https://panwaramita.github.io/Weather-Dashboard/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
                <article className="col-lg-4 sectionMargin">
                    <Card style={{ width: '18rem', backgroundColor: "#a6d8d5",marginBottom:"5px" }} className="imgBorderValue">
  <Card.Img variant="top" src={book} />
  <Card.Body>
    <Card.Title>Book Search</Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Link target="blank" href="https://github.com/panwaramita/BookSearch">Repository link</Card.Link>
    <Card.Link target="blank" href="https://mighty-crag-74366.herokuapp.com/">Deployed link</Card.Link>
  </Card.Body>
</Card>     
                </article>
            </section>
        </section>
)
}

export default Portfolio;