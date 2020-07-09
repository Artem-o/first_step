'use strict';


const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    
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


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvImg = document.querySelectorAll('.promo__adv img'),
      promoGenres = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

promoAdvImg.forEach(item => {
    item.remove();
});

promoGenres.textContent = 'ДРАМА';
promoBg.style.cssText = "background: url(img/bg.jpg);";


movieDB.movies.sort();

for (let i = 0; i < movieDB.movies.length; i++) {
    promoInteractiveItem[i].textContent = `${i + 1} ${movieDB.movies[i]}`;
}






