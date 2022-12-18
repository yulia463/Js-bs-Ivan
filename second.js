// node second.js
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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




