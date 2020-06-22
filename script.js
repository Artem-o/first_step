
const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', "");

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questionOne = prompt('Один из последних просмотренных фильмов?', ""),
      questionTwo = prompt('Дайте ему оценку?', ""),
      questionThree = prompt('Один из последних просмотренных фильмов?', ""),
      questionFour = prompt('Дайте ему оценку?', "");


obj.movies[questionOne] = questionTwo;
obj.movies[questionThree] = questionFour;

console.log(obj);



