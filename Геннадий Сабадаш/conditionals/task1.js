//1. Пользователь вводит два числа, вывести в консоль наибольшее из них.

let userNamber1 = +prompt('введите число 1');
let userNamber2 = +prompt('введите число 2');

if (userNamber1 > userNamber2 ){
    console.log(userNamber1);
} else if (userNamber2 > userNamber1){
    console.log(userNamber2);    
} else if (userNamber1 === userNamber2){
    console.log ("числа равны"); 
}