export class MoviesStorage {
    constructor() {
        const localMovies = JSON.parse(localStorage.getItem('movies'));
        const defaultMovies = [
            {
                "id": 1,
                "title": "The Shawshank Redemption",
                "year": 1994,
                "genre": "drama",
                "summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "seen": "T"
    },
            {
                "id": 2,
                "title": "The Godfather",
                "year": 1972,
                "genre": "crime",
                "summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                "seen": "T"
    },
            {
                "id": 3,
                "title": "The Dark Knight",
                "year": 2008,
                "genre": "action",
                "summary": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "seen": "T"
    },
            {
                "id": 5,
                "title": "12 Angry Men",
                "year": 1957,
                "genre": "drama",
                "summary": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
                "seen": "F"
    },
            {
                "id": 8,
                "title": "Schindler's List",
                "year": 1993,
                "genre": "biography",
                "summary": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
                "seen": "F"
    },
            {
                "id": 13,
                "title": "Pulp Fiction",
                "year": 1994,
                "genre": "crime",
                "summary": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "seen": "T"
    },
            {
                "id": 21,
                "title": "The Good, the Bad and the Ugly",
                "year": 1966,
                "genre": "western",
                "summary": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
                "seen": "F"
    }
];

        if (localMovies === null || Array.isArray(localMovies) === false) {
            localStorage.setItem('movies', JSON.stringify(defaultMovies));
        }
    }
    //getting titles of all movies or info about movie with proper id
    get() {
        if (arguments.length === 0) {
            return titles();
        } else if (arguments.length === 1) {
            return titleById(arguments[0]);
        }
    }

    //adding movie or updating
    set() {
        if (arguments.length === 1) {
            return create(arguments[0]);
        } else if (arguments.length === 2) {
            return modify(arguments[0], arguments[1]);
        }
    }

    //removing movie object 
    remove(id) {
        const movieList = JSON.parse(localStorage.getItem('movies'));
        for (let i = 0; i < movieList.length; i++) {
            if (movieList[i].id === id) {
                movieList.splice(i, 1);
                return localStorage.setItem('movies', JSON.stringify(movieList));

            }
        }
    }
}

//adding movie object
const create = (data) => {
    const movieList = JSON.parse(localStorage.getItem('movies'));
    movieList.push(data);
    return localStorage.setItem('movies', JSON.stringify(movieList));
}
//changing movie object
const modify = (id, data) => {
    const movieList = JSON.parse(localStorage.getItem('movies'));
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].id === id) {
            movieList[i] = data;
            return localStorage.setItem('movies', JSON.stringify(movieList));
        }
    }
}
//getting titles of all movies
const titles = () => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    const movieList = [];
    for (let i = 0; i < movies.length; i++) {
        movieList.push(movies[i].title);
    }
    return movieList;
}
//getting info about movie with proper id
const titleById = (id) => {
    const movieList = JSON.parse(localStorage.getItem('movies'));
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].id === id) {
            return movieList[i];
        }
    }
}
