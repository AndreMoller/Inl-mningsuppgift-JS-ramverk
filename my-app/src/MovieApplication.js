import React from 'react'
import AddMovieForm from './AddMovieForm';
import Movie from './Movie';

const MovieApplication = () => {
    const [movies, setMovies] = React.useState([]);

    const saveMovie = (title, grade) => {
        let tempMovie = {"title":title,"grade":grade, "id":Date.now()};
        let tempMovies = movies;
        tempMovies.push(tempMovie);
        setMovies(tempMovies);
        console.log(movies);
    }

    return (
        <div>
                <AddMovieForm saveMovie = {saveMovie}/>
                <ul>
                    {movies.map((movie) => (<Movie key = {movie.id} data = {movie}/>))}
                </ul>
        </div>
    )
}

export default MovieApplication
