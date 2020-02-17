// #1

// написати функцію, яка робить наступне
// Питаємо користувача любе число, яке би складалось з нулів і одиниць
// наприклад 110011
// і функція має міняти 1 на 0 і навпаки
// наприклад в інпуті 110011
// в консолі ми маємо побачити 001100


function num(number){
    const length = number.length;
    for(let i = 0 ; i < length ; i++){
        if (number[i] === '1')
        console.log([0])
        else if (number[i] === '0')
        console.log ([1])
        else {
            console.log('undefined')
        }       
    }
     return number;
}

const str1 = prompt('your number ?');
const str2 = num(str1);
console.log(str2);


// #2

// Написати функцію, яка робить наступне
// повертає менший з параметрів
// наприклад
// min(1,2) повинно повернути 1
// min(10, 20) повертає 10
// результат вивести в консоль

// function min(a, b) {
//   //тут код
//   // повинно повертати менше з двох чисел
// }

function min(a, b){
    if (a < b){
      console.log(a);
    }
    else if (a > b) {
      console.log(b);
    }
  }
  
  const str = prompt('перше число ?');
  const str2 = prompt('друге чило ?');
  // console.log (min(str, str2));
  min(str, str2);


// #3

// написати калькулятор
// наприклад
// 1+2
// і функція повинна повернути сумму першого і другого елемента
// 5*5
// повертає 25
// 8-3
// повертає 5
// 4/2
// повертає 2
// умова
// числа задаємо в діапазон від 0 до 9
// function calculate(text) {
//   //тут код
//   //параметр text містить введене значення
// }
// calculate('2+2');
// tasks/task8.js

function plus(text) {
    var num1, num2 
      num1 = str1;
      num1 = parseInt(num1);
  
      num2 = str2;
      num2 = parseInt(num2);
      
      result = num1 + num2;
      console.log(result);
    return (text);
  }
  function minus(text) {
    var num1, num2 
      num1 = str1;
      num1 = parseInt(num1);
  
      num2 = str2;
      num2 = parseInt(num2);
      
      result = num1 - num2;
      console.log(result);
    return (text);
  }
  function multiply(text) {
    var num1, num2 
      num1 = str1;
      num1 = parseInt(num1);
  
      num2 = str2;
      num2 = parseInt(num2);
  
      result = num1 * num2;
      console.log(result);
    return (text);
  }
  function divide(text) {
    var num1, num2 
      num1 = str1;
      num1 = parseInt(num1);
  
      num2 = str2;
      num2 = parseInt(num2);
  
      result = num1 / num2;
      console.log(result);
    return (text);
  }

  const str1 = prompt('перше число ?');
  const str2 = prompt('друге чило ?');
  const str3 = prompt('яку операцію хочете провсти ? +, -, *, /')
    if (str3 == '+'){
      plus();
    }
    else if (str3 == '-'){
      minus();
    }
    else if (str3 == '*'){
      multiply();
    }
    else if (str3 =='/'){
      divide();
  }
  // function calculate(text) {
  // let 
  // switch() {
  //   case '+':
      
  //     break;
  //   case '-':
      
  //     break;
  //   case '*':
       
  //     break;
  //   case '/':
       
  //     break;
  //   default:
  //     console.log("default");
  // }
  // } 
  //               ?????????????????????????


  
// #5

// hardcore
// написати факторіал

//функція повинна вернути факторіал

// наприклад
// 5! = 5*4*3*2*1 = 120
// і т.д.



function fact(num) {
    let n = num;
    let result = num;
  
    for (let i = 2 ; i < num ; i++){
      n -= 1 
      result *= n;
    }
    console.log(result)
  }
  fact(5)