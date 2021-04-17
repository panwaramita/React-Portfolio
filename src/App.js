import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route }  from 'react-router-dom';
import Header from "./component/header"
import About from "./component/about";
import Portfolio from "./component/potfolio";
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
    </div>
    </Router>
  );
}

export default App;
