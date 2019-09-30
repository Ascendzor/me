import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Projects from './Projects';
import Blog from './Blog';

const Home = () => <div style={{fontWeight: 500}}>
  <p>
    Hello, my name is Troy.
    In my professional time I build software systems.
    In my personal time I travel, and explore mathematics.
  </p>
  <ul>
    <li>
      <Link to='/projects'>projects</Link>
    </li>
    <li>
      <Link to='/blog'>blog</Link>
    </li>
    <li>
      <a href='https://github.com/ascendzor' target='_blank'>github</a>
    </li>
    <li>
      <a href='https://github.com/Ascendzor/CV/raw/master/TroyMareCV.pdf'>CV</a>
    </li>
  </ul>
</div>

function App() {
  return <div><Router>
    <header className="App-header">
      <Link to='/'><img src={logo} className="App-logo" /></Link>
    </header>
    <div className="App" style={{width: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  </Router></div>
}

export default App;
