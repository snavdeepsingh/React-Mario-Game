import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import GameContainer from "./components/GameContainer/GameContainer.js";
// import ImageCard from "./components/ImageCard/ImageCard.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid mainContainer">
        <Navbar />
        <Jumbotron />
        <GameContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
