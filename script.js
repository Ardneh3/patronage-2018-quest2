const moviesAll = moviesData.length;
const moviesCounterAll = document.getElementById('moviesCounterAll');
moviesCounterAll.textContent = moviesAll;

let moviesSeen = 0;
const moviesCounterSeen = document.getElementById('moviesCounterSeen');

//counting seen movies
const seenMovies = () => {
    for (let i = 0; i < moviesAll; i++) {
        if (moviesData[i].seen === 'T') {
            moviesSeen++;
        }
    }
}

seenMovies();

//updating seen movies counter in html
const addMoviesSeen = () => {
moviesCounterSeen.textContent = moviesSeen;
}

const moviesList = document.getElementById('moviesList');

const addMovieToList = () => {
    for (let i = 0; i < moviesAll; i++) {
        let seen = '';
        if (moviesData[i].seen === 'T') {
            seen = `<i class="fa fa-check" aria-hidden="true"></i>`;
        } else {
            seen = `<i class="fa fa-times" aria-hidden="true"></i>`;
        }
        let newElement = document.createElement('li');
        newElement.innerHTML = `${moviesData[i].title} <br> ${moviesData[i].year} <br> ${moviesData[i].genre} <br> ${moviesData[i].summary} <br> ${seen}`;
        moviesList.appendChild(newElement);
    }
}
addMovieToList();

//listening change on movies list (checking seen movies) and changing value in moviesData to "T"
const eventListener = () => {
    for (let i = 0; i < moviesAll; i++) {
const icons = document.getElementsByTagName('i')[i];

icons.addEventListener('click', function() {
    const classes = icons.classList;
        if (classes.contains('fa-times')) {
        this.classList.remove('fa-times');
        this.classList.add('fa-check');
            moviesSeen++;
            addMoviesSeen();
            for (let i = 0; i < moviesAll; i++) {
                if (classes.contains('fa-check')) {
                    moviesData[i].seen = "T";
                }
            }
        }
})
    }
}

eventListener();
addMoviesSeen();
