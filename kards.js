// let a
// if (a < 10) {
//     console.log('a меньше 10')
// } else if (a > 10 && a < 20) {
//     console.log('a от 10 до 20')
// } else {
//     console.log('a больше 20')
// }
//метод массивов ForEach
const myArray = ['first', 'second', 'third'];
myArray.forEach((el, index) => {
    console.log(el, index)
})
// 'first':0,
// 'second':1,
//  'third':2
// index-индекс каждого элемента


//Цикл for
//for (начальная инструкция; Условие;
// Итерационное действие ){
// Блок кода , выполныемый на каждой итерации}

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i], i)
    }
// Цикл for key in Object
// Действие с каждым свойством объекта
// Свойство = key
// Значение = Object[key]
 const myObject = {
    x: 10,
    y: true,
    z: 'a,b,c'
}
for (key in myObject) {
    console.log(key, myObject[key])
}

//Методы keys and values(для объектов)
const a = Object.keys(myObject)
const b = Object.values(myObject)

const pets=['cat','dog','bat']
console.log(pets.includes('at'))
// expect output: false


