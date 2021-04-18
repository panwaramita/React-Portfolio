import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Route }  from 'react-router-dom';
import Header from "./component/header"
import About from "./component/about";
import Portfolio from "./component/potfolio";
import Contact from "./component/contact";
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Route exact path="/#/" component={About} />
        <Route exact path="/#/about" component={About} />
        <Route exact path="/#/portfolio" component={Portfolio} />
        <Route exact path="/#/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
