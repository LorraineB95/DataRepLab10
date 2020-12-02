import React from'react';
import { MovieItem } from './movieitem';

export class Movies extends React.Component{

    //Map is used to render the list of data from state
    //Props passes the movie data between parent and child component
    render(){
        return this.props.myMovies.map((myMovies)=>{
        //console.log({movie});
        return <MovieItem key={myMovies._id} myMovies={myMovies}
        ReloadDataMethod={this.props.ReloadDataMethod}></MovieItem>
});

        /*return(
            <div>
                <h2>Hello from Movies </h2>
                {console.log.apply(this.props.myMovies)}
                <MovieItem></MovieItem>
            </div>
        ); */
    }
}