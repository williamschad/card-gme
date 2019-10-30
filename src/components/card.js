import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';

import Image from '../components/uno.png';


class Card1 extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  end = () => {
    var ab = prompt('1.Restart \n2.Quit');
    if(ab ==1){
      window.location.reload()
    }
    else if(ab ==2){
      window.location.href = 'http://localhost:3000/';
    }
    
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div key="front">
          <img src={Image} alt="An image"/> 
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
 
        <div key="back" className="Aa">
          {this.props.text}
        </div>
      </ReactCardFlip>
    )
  }
}

export default Card;
