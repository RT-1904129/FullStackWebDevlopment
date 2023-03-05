import React, {useRef} from 'react';
import classes from './AddMovie.module.css';
const AddMovie = (props) => {
    const titleRe= useRef('');
    const openingTextRe= useRef('');
    const releaseDateRe= useRef('');
    const submitHandler = (event) => {
        event.preventDefault();
        const movie = {
            title: titleRe.current.value,
            openingText: openingTextRe.current.value,
            releaseDate: releaseDateRe.current.value
        }
        props.onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRe}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea rows='5' id='opening-text' ref={openingTextRe}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRe}/>
            </div>
            <button>Add Movie</button>
        </form>
    );
}

export default AddMovie;