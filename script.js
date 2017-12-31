const moviesAll = moviesData.length;
const moviesCounterAll = document.getElementById('moviesCounterAll');
moviesCounterAll.textContent = moviesAll;

let moviesSeen = 0;
const moviesCounterSeen = document.getElementById('moviesCounterSeen');

const moviesList = document.getElementById('moviesList');

//counting seen movies
const seenMovies = () => {
    for (let i = 0; i < moviesAll; i++) {
        if (moviesData[i].seen === 'T') {
            moviesSeen++;
        }
    }
}

//updating seen movies counter in html
const addMoviesSeen = () => {
    moviesCounterSeen.textContent = moviesSeen;
}

//adding movies to html list
const addMovieToList = () => {
    for (let i = 0; i < moviesAll; i++) {
        let seen = '';
        if (moviesData[i].seen === 'T') {
            seen = `<button type="button" class="btn-green" id="${i}">seen</button>`;
        } else {
            seen = `<button type="button" class="btn-red" id="${i}">unseen</button>`;
        }
        let newElement = document.createElement('li');
        newElement.innerHTML = `${moviesData[i].title} <br> ${moviesData[i].year} <br> ${moviesData[i].genre} <br> ${moviesData[i].summary} <br> ${seen}`;
        moviesList.appendChild(newElement);
    }
}

//changing seen property after click
const listeningClicks = () => {
    for (let i = 0; i < moviesAll; i++) {
        const btn = document.getElementById(`${i}`);

        btn.addEventListener('click', function () {
            if (moviesData[i].seen === 'T') {
                moviesData[i].seen = 'F';
                btn.innerHTML = 'unseen';
                this.classList.remove('btn-green');
                this.classList.add('btn-red');
                moviesSeen--;
                addMoviesSeen();
            } else {
                moviesData[i].seen = 'T';
                btn.innerHTML = 'seen';
                this.classList.remove('btn-red');
                this.classList.add('btn-green');
                moviesSeen++;
                addMoviesSeen();
            }
        })
    }
}

seenMovies();
addMoviesSeen();
addMovieToList();
listeningClicks();
