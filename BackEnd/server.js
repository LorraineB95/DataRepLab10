const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//This enables the server to respond to preflight requests
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
   
//app.use is executed every time the server is used
app.use(bodyParser.urlencoded({ extended: false }))

//bodyParser parses the incoming requests in the middleware
app.use(bodyParser.json())

//connects server to the database
const strConnection ='mongodb+srv://Admin:Admin@cluster0.pc43g.mongodb.net/MyFilms?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

//creates a schema
const Schema = mongoose.Schema;

//defines the schema
const movieSchema = new Schema({
    title: String,
    year: String,
    poster: String

})
//creates a model
const movieModel = mongoose.model('movie', movieSchema);


//Displays the movie details
app.get('/api/movies', (req, res)=>{

    //finds all documents and executes the json function
    movieModel.find((err,data)=>{
        res.json(data);
    })

    // const mymovies = [
    //         {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         },   
    // ];

})

//When a movie is created a message and the movie details will be displayed
app.post('/api/movies', (req, res)=>{
    console.log(req.body);

    movieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })
})

//Deletes movie by id
app.delete('/api/movies/:id', function (req, res) {
    console.log(req.params.id);
    //Asynchronous call to the database
    movieModel.deleteOne({ _id: req.params.id },
    function (err, data) {
    if (err)
    res.send(err);
    res.send(data);
    })
    })
    
//gets the movie by id
app.get('/api/movies/:id', (req, res)=>{

    console.log(req.params.id);
    
//searches the database and returns the data by id
    movieModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

app.put('/api/movies/:id', (req,res)=>{
    console.log("Update movie: "+ req.params.id);
    console.log(req.body);

    //asynchronous call to database to find movie by id and update it
    movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})