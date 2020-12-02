import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer.js';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


//Imports the header, footer and content classes from their files
//Imports a navigation bar from Bootstrap

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

//Switch is a conditional statement that will execute the block of code if the conditions are met
//Router handles all the routes in the app using dyanimc routing


class App extends Component {
  render() {
    return (
      // Navbar creates a navigation bar that will be displayed on every page on the app
      //Home, read and create are links that will bring the user to a different page when clicked
      //Exact ensures that the route will only render when the path is exactly as specified
      <Router> 
        <div className="App"> 
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Header} exact />
            <Route path='/create' component={Create} />
            <Route path='/read' component={Read} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>     
      </Router>
      
    );
  }
}

export default App;
