import {
    setCounterOfTo
} from './movies-counter.js';

import {
    MoviesStorage
} from './movies-storage.js';

const movieClass = new MoviesStorage();
const formBtn = document.getElementById('form_btn');
const form = document.getElementById('adding_form');
let validate = true;

const moviesArray = JSON.parse(localStorage.getItem('movies'));
let moviesAll = moviesArray.length;

let moviesSeen = 0;

const seenMovies = () => {
    for (let i = 0; i < moviesAll; i++) {
        if (moviesArray[i].seen === 'T') {
            moviesSeen++;
        }
    }
}

//checking if form input is empty
const isEmpty = () => {
    const movieTitle = document.getElementById('title').value;
    const movieYear = document.getElementById('year').value;
    const movieGenre = document.getElementById('genre').value;
    if (movieTitle === '') {
        alert('Title is required');
        return validate = false;
    } else if (movieYear === '') {
        alert('Year is required');
        return validate = false;
    } else if (movieGenre === '') {
        alert('Genre is required');
        return validate = false;
    } else {
        return validate = true;
    }
}

//checking if year is proper number
const isValidNumber = () => {
    const number = document.getElementById('year').value;
    let currentYear = new Date();
    if (isNaN(number)) {
        alert('Input is not a number');
        return validate = false;
    } else if (number < 1895 || number > currentYear.getFullYear()) {
        alert('Invalid year');
        return validate = false;
    } else {
        return validate = true;
    }
}
//checking if movie title is in localStorage
const isExisting = () => {
    const movieTitle = document.getElementById('title').value;
    const movieList = JSON.parse(localStorage.getItem('movies'));
    for (let i = 0; i < movieList.length; i++) {
        if (movieTitle === movieList[i].title) {
            alert('Movie is already in database');
            return validate = false;
        } else {
            return validate = true;
        }
    }
}

//adding movie to localStorage
const addMovie = () => {
    const movieTitle = document.getElementById('title').value;
    const movieYear = document.getElementById('year').value;
    const movieGenre = document.getElementById('genre').value;
    const movieSummary = document.getElementById('summary').value;
    const movieList = JSON.parse(localStorage.getItem('movies'));
    let oldId = movieList[movieList.length - 1].id;
    let newId = oldId += 1;
    return movieClass.set({
        id: newId,
        title: movieTitle,
        year: movieYear,
        genre: movieGenre,
        summary: movieSummary
    });
}

const resetting = () => {
    form.reset();
}

//calling functions
const formValidator = () => {

    isEmpty();
    if (validate === true) {
        isValidNumber();
        if (validate === true) {
            isExisting();
            if (validate === true) {
                addMovie();
                resetting();
                window.location.reload(true);
            }
        }
    }
}

formBtn.addEventListener('click', formValidator);
seenMovies();
setCounterOfTo('anotherMoviesCounterAll', moviesAll);
setCounterOfTo('anotherMoviesCounterSeen', moviesSeen);