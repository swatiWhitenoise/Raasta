import React, { Component } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import "./css/App.css";
import "./css/material-design-iconic-font.min.css";
// import "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap";
import Home from "./Home";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
