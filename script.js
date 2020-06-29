'use strict';


const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели?', "");
        }
    },

    rememberMyFilms: function() {
        for (let i = 1; i < 3; i++) {
            const lastMovie = prompt('Один из последних просмотренных фильмов?', ""),
                  rating = +prompt('Дайте ему оценку?', ""); 
    
            if (lastMovie == '' || rating == '' || lastMovie == null || rating == null || lastMovie.length > 50 || rating.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[lastMovie] = rating;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {

            let genres = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
            if (genres == '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};




