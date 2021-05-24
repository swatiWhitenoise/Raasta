import React, { Component } from 'react';
// import logo from './logo.svg';
import noise from "./images/noise.png";


class Home extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <main>
        <section className="home" style={{ backgroundImage: `url(${noise})` }}>
          <div>                   
           <h1>Every experience sheds
a new light
Where every night leads
to a different d</h1>
          </div>
        </section>
      </main>
      </div>
   );
  }
}

export default Home;
