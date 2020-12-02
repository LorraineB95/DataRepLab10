import React from 'react';
import axios from 'axios';

//Exports the contents of class 'edit' when called
export class Edit extends React.Component {

    //Render returns the <h3> contents 
    constructor() {
        super();

        //This binds contexts to the functions to be run later
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //State stores data relevant to the component
        this.state = {
            title: '',
            year: '',
            poster: '',
        }
    }
    //e.target.value is the value property of the DOM element, ie the info submitted in the form
    //This is when the functions are called
    //componentDidMount is the lifecycle hook
    componentDidMount(){
        console.log(this.props.match.params.id);

        //Returns a movie by id and updates the state of the movie
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                title:response.data.title,
                year:response.data.year,
                poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            poster: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        //alert returns a pop up so we know the data has been entered

    console.log(this.state.title);
    console.log(this.state.year);
    console.log(this.state.poster);

        alert("Movie:" + this.state.title + " " + this.state.year
            + " " + this.state.poster);
            const newMovie = {
                title: this.state.title,
                year: this.state.year,
                poster: this.state.poster,
                _id: this.state._id
            }
         
            //calls findByIdAndUpdate method
            axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
            .then(res =>{
                console.log(res.data)
            })
            .catch();
            
    }

    //<form> creates a form for the user to interact with and add movie information
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Movie Poster:</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}