import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Projects from "./Projects";
import Blog from "./Blog";

const Home = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div
      style={{
        fontWeight: 500,
        borderRadius: 5,
        backgroundColor: "white",
        padding: "10px 30px",
        boxShadow: "1px 1px 5px",
        backgroundImage: "url(/darkhoneycomb.jpg)",
      }}
    >
      <p>
        Hello, my name is Troy. I make websites, services, and systems. In my
        spare time I play with technologies, make prototypes, and travel.
      </p>
      <ul>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <a href="https://github.com/ascendzor" target="_blank">
            github
          </a>
        </li>
      </ul>
    </div>
    <iframe
      style={{
        position: "absolute",
        backgroundColor: "white",
        border: "none",
        borderRadius: 4,
        border: "2px solid black",
        top: 20,
        right: 20,
      }}
      width={560}
      height={480}
      src="https://prod.deo261nr4qe5k.amplifyapp.com/?id=fce60d68-5e0a-4457-88f2-2200ce89d759"
    />
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" />
          </Link>
        </header>
        <div
          className="App"
          style={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
