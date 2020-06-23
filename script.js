'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', "");
    }
}
start();

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 1; i < 3; i++) {
        const lastMovie = prompt('Один из последних просмотренных фильмов?', ""),
              rating = +prompt('Дайте ему оценку?', ""); 

        if (lastMovie == '' || rating == '' || lastMovie == null || rating == null || lastMovie.length > 50 || rating.length > 50) {
            i--;
        } else {
            obj.movies[lastMovie] = rating;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (obj.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (obj.count >= 10 && obj.count <= 30) {
        console.log('Вы классический зритель');
    } else if (obj.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB() {
    if (obj.privat == false) {
        console.log(obj);
    }
}
showMyDB();


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        obj.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres();

// console.log(obj);



