import  React from 'react';
import  Movie from './Movie';
import  classes from './MovieList.module.css';
    
    const  MovieList = ({ movies }) => {
    return (
        <div className={classes.movieList}>
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
        ))}
        </div>
    );
    };
    
    export  default MovieList;