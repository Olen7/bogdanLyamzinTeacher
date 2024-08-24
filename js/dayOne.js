"use strict" //строгий режим
let a = 5;
if (true) {
 let a = 6; 
 var b = 3;

}
// console.log(b);
// var b = 3;
//{} - це фігурні дужки це область видимості

// function c(){
//    var x = 10;
// //    console.log(x);
// }
// c()
// // console.log(x);
// g = 6;
// console.log(g);
// console.log(window.g);

// const name = "Микола";
// const activeUser = "Міша"// currentUser
// let userName = "Роман";
// const userLastName = "Громов";
// const fullName = userName + " " + userLastName;
// const fullName2 = `${userName}  ${userLastName}`;// шаблона строка `${userName}  ${userLastName}`  ` - зворотні дужки (скіс)
// console.log(fullName);
// console.log(fullName2);

//список зарезервованих ключових слів
//https://s3.eu-north-1.amazonaws.com/lms.goit.files/60d669bd-de14-43bf-8b18-7c89e056d7d3m01-b02-s04.jpg
// Ключові слова JavaScript:
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// let
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield

// Майбутні зарезервовані ключові слова (ES6 та пізніше):
// enum
// await (використовується всередині async функцій)

// Ключові слова, пов'язані з модулями:
// implements
// interface
// package
// private
// protected
// public
// static

// Старі зарезервовані ключові слова (зазвичай не використовуються):
// abstract
// boolean
// byte
// char
// double
// final
// float
// goto
// int
// long
// native
// short
// synchronized
// throws
// transient
// volatile

// Додатково:
// null, true, і false теж є зарезервованими і вважаються літералами.

////////////////////////////////////////////////////////////
// console.log("g" < 't');
// console.log("Ab" > "AB");
const aUniCode = "a";
const bUniCode = "b";
const aUniCodeUpperCase = "A";
console.log(aUniCode.charCodeAt(0));
console.log(bUniCode.charCodeAt(0));
console.log(aUniCodeUpperCase.charCodeAt(0));
// charCodeAt(0) - показує юні код

// console.log(null < 1);// null = 0
// console.log("" < 1);// "" = 0
// console.log(false < 1)
// console.log(undefined < 1)// undefined перетворюється на NaN
// console.log(" " < 1)// " " строки (пробіл)  = 0
// console.log(undefined == 0)
// console.log(false == 0)

// console.log("1" === 1);
// console.log(NaN === NaN);
// const j = 5;
// const l = 15;

// if (j > l){
//  console.log(j + l);
//  // 0 = false
//  // 25 = true
//  // NaN = false
//  // " " = true
//  // "" = false
//  // undefined = false
//  // null = false
// }else if(j < l){
//     console.log(j - l);
// }else{
//     console.log(object);
// }

//Домашнє завдання
// Логічні оператори 
//Існує три логічні оператори, які використовуються для перевірки виконання множинних виразів.

// && - «І»
// Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо 
// його можна привести до false, і правий - в інших випадках.

// // || - «АБО»
// Оператор || приводить всі операнди до буля і повертає значення одного з них. 
// Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// ! - «НЕ»
// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - 
// змінює його на протилежний

// 6 хибних (falsy) значень
// false - булеве значення false.
// 0 - числове значення нуль.
// "" або '' - порожній рядок.
// null - значення, яке означає відсутність значення або порожнє значення.
// undefined - значення, яке вказує, що змінну було оголошено, але їй не присвоєно значення.
// NaN - значення "Not-a-Number", яке зазвичай виникає при невдалих математичних операціях.

// function аргументи, параметри, як її створити, як називається функція, патерн 
// ранне повернення, відмінності стрілочної функцій

// аргументи і параметри
function add(a = 0, b) { // (a і b) — це параметри a = 0  - параметр за замовчуванням
    return a + b;
  }
  
  console.log(add(2, 3)); // 2 і 3 — це аргументи

// "Function Expression створюється, коли виконання доходить до нього, а потім вже може 
// використовуватися. 
const myFunctionExpression = function() { //Function Expression може бути як анонімною (без імені const sayHello = function(){}), так і іменованою const sayHello = function greet(){}
    
  };
  //Function Expression виконується тільки тоді, коли до неї звертаються через змінну:
  //Ця функція не виконується під час завантаження скрипта, на відміну від Function Declaration.
  //На відміну від Function Declaration, функціональні вирази не піднімаються (hoisting) на верхівку свого контексту:


  // Стрілочна функції також є виразами функції:
  const myArrowFunction = () => {
    
  };
    //Якщо функція має лише один параметр, круглі дужки () можна опустити 
    //Якщо немає параметрів, потрібно використовувати порожні круглі дужки
    //Якщо потрібно виконати більше одного виразу, або є блок коду, необхідно використовувати фігурні дужки {} та явно використовувати return для повернення значення

    // Function Declaration можна використовувати у всьому скрипті (або блоці коду, якщо функцію 
//     оголошено в блоці)."
function myFunctionDeclaration() {
    
  }
  //Ім'я функції обов'язкове в Function Declaration.
  //дна з ключових особливостей Function Declaration — функції підлягають "підняттю" (hoisting). Це означає, що ви можете викликати функцію до її фактичного оголошення в коді
  //Function Declaration можуть бути оголошені як у глобальному контексті (тобто доступні по всьому скрипту), так і в локальному (всередині іншої функції)
  //Хоча Function Declaration створює функцію, яка є доступною глобально або в межах свого контексту, вона все ще може бути перезаписана як будь-яка інша змінна:
//   function greet() {
//     console.log("Hello!");
//   }
  
//   greet = function() {
//     console.log("Hi!");
//   };
  
//   greet(); // "Hi!"
  