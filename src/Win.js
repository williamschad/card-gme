import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card1 from './components/card';
import card2 from './components/card2';
import card3 from './components/card3';

var myCardText = ['YOU WIN!','YOU LOSE!','BETTER LUCK NEXT TIME!','TRY AGAIN!','SO CLOSE!']
var randomvalue = myCardText[Math.floor(myCardText.length * Math.random())];

const Win = () => {
  return(
    <div>
    <br/>
    <h1></h1>
    <h1></h1>
    <br/>
<Container fluid='false'>
    <Row>
      <col><Card1 text={randomValue}/></Col>
      <col><Card2 text={randomValue}/></Col>
      <col><Card3 text={randomValue}/></Col>
    </Row>
</Container>
    </div>
    );
};
export default Win;
