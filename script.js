'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', "");

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 1; i < 3; i++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', ""),
          rating = +prompt('Дайте ему оценку?', ""); 

    if ( (lastMovie == false || rating == false) || (lastMovie == null || rating == null) || (lastMovie.length > 50 || rating.length > 50) ) {
        i--;
    } else {
        obj.movies[lastMovie] = rating;
    }
    
}

if (obj.count <= 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (obj.count > 10 && obj.count <= 30) {
    console.log('Вы классический зритель');
} else if (obj.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(obj);



