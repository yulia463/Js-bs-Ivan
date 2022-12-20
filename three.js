// node three.js
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
while (numberOfFilms === '' || numberOfFilms.length > 50 || !numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
}
console.log(numberOfFilms)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Один из последних просмотренных фильмов?', '')
while (a === '' || a.length > 50 || !a) {
    a = prompt('Сколько фильмов вы уже посмотрели?')
}
let b = prompt('На сколько оцените его?', '');
let c = prompt('Один из последних просмотренных фильмов?', '');
let d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB)

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count< 30) {
    alert("Вы классический зритель")
}else{
    alert("Вы киноман")
}


const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)
const writeYourGenres = () => {
for(let i=1;i<=3;i++){
    personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`)
}
}
writeYourGenres();
