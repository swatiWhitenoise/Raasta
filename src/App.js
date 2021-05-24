import React, { Component } from "react";
import "./css/App.css";
import "./css/material-design-iconic-font.min.css";
// import "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
