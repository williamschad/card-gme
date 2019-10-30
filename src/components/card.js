import React, {Component} from "react";
import ReactCardFlip from 'react-card-flip';

import Image from '../components/uno.png';


class Card extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
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