import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from './components/card';
import card2 from './components/card2';
import card3 from './components/card3';

var Cardd = ["YOU WIN!"]
var Cardss = ["YOU LOSE!"];
var Cardsd = ["MAYBE NEXT TIME!"]
var Cardsss = Cardss[Math.floor(Cardss.length * Math.random())];

const Win = () => {
  return(
    <div>
      <Container>
  <Row>
    <Col><Card text={Cardsss,Cardd,Cardsd}/></Col>
    <Col><Card text={Cardsss,Cardd,Cardsd}/></Col>
    <Col><Card text={Cardsss,Cardsd,Cardss}/></Col>
  </Row>
</Container>
    </div>

    )

}

export default Win;