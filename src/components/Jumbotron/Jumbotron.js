import React, { Component } from 'react';
import "./Jumbotron.css";

export default class Jumbotron extends Component {
  render() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Mario Memory Game</h1>
                    <p className="lead">Click an Image to start the game. Don't Click an image twice!</p>
                </div>
            </div>
      </div>
    )
  }
}
