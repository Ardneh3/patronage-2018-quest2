import {
    setCounterOfTo
} from './movies-counter.js';

import {
    MoviesStorage
} from './movies-storage.js';


const movieClass = new MoviesStorage();

const moviesArray = JSON.parse(localStorage.getItem('movies'));
const moviesAll = moviesArray.length;

let moviesSeen = 0;
const moviesList = document.getElementById('moviesList');

//counting seen movies
const seenMovies = () => {
    for (let i = 0; i < moviesAll; i++) {
        if (moviesArray[i].seen === 'T') {
            moviesSeen++;
        }
    }
}

//adding movies to html list
const addMovieToList = () => {
    for (let i = 0; i < moviesAll; i++) {
        let seen = '';
        if (moviesArray[i].seen === 'T') {
            seen = `<button type="button" class="btn-green" id="${i}">seen</button>`;
        } else {
            seen = `<button type="button" class="btn-red" id="${i}">unseen</button>`;
        }
        let newElement = document.createElement('li');
        newElement.innerHTML = `${moviesArray[i].title} <br> ${moviesArray[i].year} <br> ${moviesArray[i].genre} <br> ${moviesArray[i].summary} <br> ${seen}`;
        moviesList.appendChild(newElement);
    }
}

//changing seen property after click
const listeningClicks = () => {
    for (let i = 0; i < moviesAll; i++) {
        const btn = document.getElementById(`${i}`);

        btn.addEventListener('click', function () {
            if (moviesArray[i].seen === 'T') {
                moviesArray[i].seen = 'F';
                btn.innerHTML = 'unseen';
                this.classList.remove('btn-green');
                this.classList.add('btn-red');
                moviesSeen--;
                setCounterOfTo('moviesCounterSeen', moviesSeen);
                return localStorage.setItem('movies', JSON.stringify(moviesArray));
            } else {
                moviesArray[i].seen = 'T';
                btn.innerHTML = 'seen';
                this.classList.remove('btn-red');
                this.classList.add('btn-green');
                moviesSeen++;
                setCounterOfTo('moviesCounterSeen', moviesSeen);
                return localStorage.setItem('movies', JSON.stringify(moviesArray));
            }
        })
    }

}

seenMovies();
addMovieToList();
listeningClicks();
setCounterOfTo('moviesCounterAll', moviesAll);
setCounterOfTo('moviesCounterSeen', moviesSeen);
