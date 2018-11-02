import React, { Component } from 'react';
import ImageCard from "../ImageCard/ImageCard.js";
import images from "../../images.json";
import "./GameContainer.css";

export default class GameContainer extends Component {
    state = {
      images,
      message: "Click on an image to begin!",
      score: 0,
      topScore: 0
    };

    handleClick = (id, clicked) => {
      console.log("clicked");
      console.log(id, "hello");

      const imageOrder = this.state.images;

      if (clicked){
        imageOrder.forEach((image, index) => {
          imageOrder[index].clicked = false;
        });
        return this.setState({
          image: imageOrder.sort(function(a, b){return 0.5 - Math.random()}),
          message: "You guessed incorrectly!",
          score: 0
        })

      }
       else{
         imageOrder.forEach((image, index) => {
          if(id === image.id){imageOrder[index].clicked = true;}
         })

         const { topScore, score } = this.state;
         const newScore = score + 1;
         const newTopScore = newScore > topScore ? newScore : topScore;
         return this.setState({
          image: imageOrder.sort(function(a, b){return 0.5 - Math.random()}),
          message: "You guessed Correctly!",
          score: newScore,
          topScore: newTopScore
         })
       }
    }


  render() {
    return (
      <div className="container-fluid gameContainer">
         <div className="gameMessage text-center" > 
            <p>{this.state.message} </p>
        </div>
        <div className="gameScores text-center" > 
            <p> Score: {this.state.score} |  Top Score: {this.state.topScore} </p>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map(image =>(
              <ImageCard 
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={this.handleClick}
                />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
