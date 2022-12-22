// node fourth.js
'use strict';
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

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
    privat: false,
    toggleVisibleMyDB:  (bollean) => {
        if (this.privat !== true) {
            this.privat = true;
        } else {
            this.privat !== false
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            // while (this.genres[i - 1] === '' || this.genres.length > 50 || !this.genres) {
                this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
            // }
        }
    },
     showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    }
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
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель")
} else {
    alert("Вы киноман")
}


personalMovieDB.writeYourGenres()
console.log(personalMovieDB.genres)


