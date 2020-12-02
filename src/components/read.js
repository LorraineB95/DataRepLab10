import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
export class Read extends React.Component {

    //state stores data relevent to the component
    state = {

        movies: []
    };
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
        }
        
    //componentDidMount executes after the first render on the client side
    //axios retrives movie information from the link
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
        this.setState({movies: response.data.movies})
        })
        .catch((error)=>{
        console.log(error);
        });
        }
        
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                    this.setState({ movies: response.data})
                }
            )
    //if there is an error an error message will be returned
            .catch(
                (error)=>{
                        console.log(error)
                }
            );
    }

    //Render will display the movie data stored in state
    render() {
        return (
            <div>
                <h3>Hello from Read Component</h3>
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}