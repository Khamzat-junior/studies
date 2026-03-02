// Создать константу с любым числовым значением
const number = 10;
const string = "Констант не меньше 10";
console.log(string);

//Вам даны две переменные x и y, менять их не нужно
let x = 10;
let y = 7;

if (x > y) {
    console.log ("x больше чем y");
}

//Пользователь вводит какое-то число (num).
let a = number(prompt("2"));
let b = number(prompt("4"));
let c = number(prompt("6"));

let max;

if (a > b && a > c) {
    max = a;
}else if (b > a && b > c) {
    max = b;
}else if (c > a && c > b) {
    max = c;
}