import React, {Component} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import converter from './converter';
import Win from './Win';



class App extends Component {
   render() {
       return (
           <div>
           <link
 rel="stylesheet"
 href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
 crossorigin="anonymous"
/>
<BrowserRouter>
 <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    DROPDOWN BUTTON
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item> <Link to='/converter'>CURRENCY CONVERTER</Link></Dropdown.Item>
    <Dropdown.Item> <Link to='/win'>WIN!</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Route path={'/converter'} component={converter} />
<Route path={'/Win'} component={Win} />
</BrowserRouter>
           </div>
       );
   }
}
export default App;