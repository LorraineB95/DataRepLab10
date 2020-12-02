import React from 'react';
//imports a card from Bootstrap
import Card from'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from'react-bootstrap/Button';
import axios from 'axios';
export class MovieItem extends React.Component{

  //render will display the desired information
  //Card is a container based UI and displays the information using css and HTML5 from Bootstrap
  //Props passes information between the parent and child component
  constructor(){
    super();
      //binds the deletmovie function below in the form to the instance of it
    this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //movieItem.js
DeleteMovie(){
    //logs a message to the console with the movie id
  console.log("Delete:" +this.props.myMovies._id);
  //Using axios, the movie id is removed from the list with a direct link
  axios.delete('http://localhost:4000/api/movies/'+this.props.myMovies._id)
  .then()
  .catch();
}
    render(){
        return(
            <div>
                {/* <h3>{this.props.myMovies.Title}</h3>
                <p>{this.props.myMovies.Year}</p>
                <img src={this.props.myMovies.Poster} width="200" height="200"/> */}


                <Card>
  <Card.Header>{this.props.myMovies.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <img src={this.props.myMovies.poster} width="200" height="200"/>
      <footer className="blockquote-footer">
        {this.props.myMovies.year}
      </footer>
    </blockquote>
  </Card.Body>
  <Link to={"/edit/"+this.props.myMovies._id} className="btn btn-primary">Edit </Link>
  <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
</Card>
            </div>
        );
    }
}