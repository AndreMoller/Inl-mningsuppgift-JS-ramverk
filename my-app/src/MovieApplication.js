import React from 'react'
import AddMovieForm from './AddMovieForm';
import Movie from './Movie';
import './App.css';

const MovieApplication = () => {
    //all movies
    const [movies, setMovies] = React.useState([]);

    //callback function used to save a new movie
    const saveMovie = (title, grade) => {
        let tempMovie = { "title": title, "grade": grade, "id": Date.now() };
        let tempMovies = JSON.parse(JSON.stringify(movies));
        tempMovies.push(tempMovie);
        setMovies(tempMovies);
    }

    //Callback function used to remove a movie 
    const removeMovie = (id) => {
        movies.forEach((movie, index) => {
            if (movie.id === id) {
                let newMovies = JSON.parse(JSON.stringify(movies));
                newMovies.splice(index, 1)
                setMovies(newMovies);
            }
        });
    }

    //
    function alphaSort(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase < a.title.toLowerCase()) {
            return 1;
        }
        return 0;
    }

    function gradeSort(a, b) {
        if (a.grade < b.grade) {
            return 1;
        } else if (b.grade < a.grade) {
            return -1;
        }
        return 0;
    }

    //used to sort the array of movies
    const alfaOrdning = () => {
        let sortedMovies = JSON.parse(JSON.stringify(movies));
        sortedMovies.sort(alphaSort);
        setMovies(sortedMovies);
    }

    //used to sort the array of movies
    const betygOrdning = () => {
        let sortedMovies = JSON.parse(JSON.stringify(movies));
        sortedMovies.sort(gradeSort);
        setMovies(sortedMovies);
    }

    return (
        <div id="movieApp">
            <h3>Min film lista</h3>
            <AddMovieForm id="movieForm" saveMovie={saveMovie} />
            <h4>Inlagda filmer</h4>
            <ul id="movieList" className = "list-unstyled">
                {movies.map((movie) => (<Movie key={movie.id}
                    data={movie} deleteFunction={removeMovie} id={movie.id} />))}
            </ul>
            <div id="btns">
                <button id="alfaBtn" className="btn btn-primary" onClick={alfaOrdning}>Alfabetisk ordning</button>
                <button id="betygBtn" className="btn btn-primary" onClick={betygOrdning}>Betygsordning</button>
            </div>

        </div>
    )
}

export default MovieApplication
