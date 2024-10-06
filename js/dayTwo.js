// const result = 5 && true && 0 && "";
//Логічний оператор && повертає перше "хибне" значення або останнє "істинне" значення, якщо всі операнди "істинні".
// const result2 = 0 || false|| "";
// Логічний оператор || повертає перше "істинне" значення або останнє "хибне", якщо всі операнди "хибні".

// const userCity = prompt('Ваше місто проживання?') || "Київ";
// console.log(userCity);
// const userName = prompt("Напишіть Ваш нік на сайті");
// const userRole = (userName === "Сергій" || userName === "Ігор") ? 'Admin' : 'User';
// if(userName === "Сергій" || userName === "Ігор"){
//   userRole = 'Admin'
// }else{
//     userRole = 'User'
// }
// if (userName) {
//     userRole = "User"
// }else{
//     userRole = "Visitor"
// }
// let age = prompt("Вкажіть Ваш вік", "20")
// if (age === null) {
//      alert("Вхід без посвічення віку не можливий")
// }else if(age === ""){
//     age = prompt("Спробуйте ще раз")
// }
// if(age){
//     if(Number.isNaN(Number(age))){
//         age = prompt("Вік має бути в цифрах")
//     }
//     const message = age >= 18 ? "Вхід дозволено" : "Вхід заборонено";
//     alert(message)
// }


// console.log(age);
// const answer = alert("У вас є автомобіль?")
// console.log(typeof answer);
// prompt() - повертає string або "" - (string) або null - (object) 
// confirm() - повертає true або false (boolean)
// alert() - повертає undefined


//                            Домашнє завдання

// Опис:
// Уяви, що ти розробляєш програму для онлайн-магазину, яка має визначити доступність та фінальну вартість 
// продукту залежно від різних факторів. Необхідно реалізувати функцію, яка приймає на вхід об’єкт із 
// параметрами продукту та вирішує, чи можна його відобразити користувачу на сайті та яку ціну показати.

// Вимоги:
// Реалізуй функцію getProductStatus(product), яка приймає об'єкт product з такими властивостями:

// price: число, яке представляє ціну продукту.
// discount: число, яке представляє знижку (в процентах) або null, якщо знижки немає.
// inStock: булеве значення, яке показує, чи є продукт у наявності.
// preOrder: булеве значення, яке показує, чи доступний продукт для попереднього замовлення, якщо його немає в наявності.
// Логіка:

// Продукт доступний для відображення на сайті лише якщо:

// Він є в наявності (inStock).
// АБО його можна замовити через попереднє замовлення (preOrder) і його ціна більша за 0.
// Якщо продукт доступний для відображення, потрібно розрахувати фінальну ціну:

// Якщо є знижка, ціна зменшується на відповідний відсоток.
// Якщо знижки немає, ціна залишається незмінною.
// Якщо продукт не доступний для відображення, функція повинна повернути: { isAvailable: false, finalPrice: null }.

// Якщо продукт доступний, повертаємо об'єкт: { isAvailable: true, finalPrice: <розрахована ціна> }.
// Приклад 1
// const product1 = {
//     price: 100,
//     discount: 20,
//     inStock: true,
//     preOrder: false,
//   };
//   getProductStatus(product1); 
//   // Очікуваний результат: { isAvailable: true, finalPrice: 80 }
  
//   // Приклад 2
//   const product2 = {
//     price: 50,
//     discount: null,
//     inStock: false,
//     preOrder: true,
//   };
//   getProductStatus(product2); 
//   // Очікуваний результат: { isAvailable: true, finalPrice: 50 }
  
//   // Приклад 3
//   const product3 = {
//     price: 0,
//     discount: null,
//     inStock: false,
//     preOrder: true,
//   };
//   getProductStatus(product3); 
//   // Очікуваний результат: { isAvailable: false, finalPrice: null }
  
// function getProductStatus(product){
//    if ( product.price > 0 && (product.inStock || product.preOrder)) {
//         const discountedPrice = (typeof product.discount === "number" &&  product.discount > 0) ? product.price - (product.price * (product.discount / 100)) : product.price; 
//         return { isAvailable: true, finalPrice: discountedPrice }
//    }else{
//     return { isAvailable: false, finalPrice: null }
//    }
// }

// console.log(getProductStatus(product1));
// console.log(getProductStatus(product2));
// console.log(getProductStatus(product3));
// console.log(typeof 5 === "number");
// console.log(typeof 5 === "string");
// console.log(typeof "ford" === "string");



// function validateRegistrationForm(formData){
//     let result = {
//         isValid: true,
//             errors: []
//     };
//     const usernamePattern = /^[a-zA-Z0-9]+$/;
//     if (formData.username.length < 5 || !usernamePattern.test(formData.username)) {
//             result.isValid = false;
//             result.errors.push("Username must be at least 5 characters long and contain only letters and numbers.")     
//     }
//     const hasUpperCase = /[A-Z]/.test(formData.password);
//     const hasLowerCase = /[a-z]/.test(formData.password);
//     const hasNumber = /[0-9]/.test(formData.password);
//     console.log(hasUpperCase, hasLowerCase, hasNumber);
//     if(formData.password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber){
//         result.isValid = false;
//         result.errors.push("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.")
//     }
    
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//         result.isValid = false;
//         result.errors.push("Email is not valid.")
//     }
//     if(formData.age < 18 || formData.age > 120){
//        result.isValid = false;
//        result.errors.push("Age must be a number between 18 and 120.")
//     }
//     if (!formData.termsAccepted) {
//         result.isValid = false;
//         result.errors.push("You must accept the terms and conditions.")
//     }
//     return result
// }

// const formData = {
//     username: "user123",
//     password: "Password1",
//     email: "user@example.com",
//     age: 25,
//     termsAccepted: true
//   };
  
//   const result = validateRegistrationForm(formData);
//   /*
//   Очікуваний результат:
//   {
//     isValid: true,
//     errors: []
//   }
//   */
  
//   // Приклад з помилками
//   const invalidFormData = {
//     username: "usr",
//     password: "pass",
//     email: "userexample.com",
//     age: 15,
//     termsAccepted: false
//   };
  
//   const invalidResult = validateRegistrationForm(invalidFormData);
//   /*
//   Очікуваний результат:
//   {
//     isValid: false,
//     errors: [
//       "Username must be at least 5 characters long and contain only letters and numbers.",
//       "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.",
//       "Email is not valid.",
//       "Age must be a number between 18 and 120.",
//       "You must accept the terms and conditions."
//     ]
//   }
//   */
//  console.log(result);
//  console.log(invalidResult);





// function calculateTripCost(tripData){
//     // const userCity = prompt('Ваше місто проживання?') || "Київ";
//     const tollCost = tripData.tollCost || 0; //Логічне АБО (||): Оператор || перевіряє перший операнд (тобто tripData.tollCost). Якщо перший операнд є "істинним" значенням (truthy), він повертає це значення. Якщо перший операнд є "хибним" значенням (falsy), він повертає другий операнд, у цьому випадку — 0.
//     const parkingCosts = tripData.parkingCosts || 0;
//     // const calc = Object.values(tripData).reduce((acc, el, _, arr) => Number(((arr[0] /100) * arr[1] * arr[2]).toFixed(1)), 0)
//     const calc = Number(((tripData.distance / 100) * tripData.fuelConsumption * tripData.fuelPrice).toFixed(2));
//     const totalPrice = Number(calc + tollCost + parkingCosts);
//     let result = {
//     fuelCost: calc,
//     totalCost: totalPrice
//    };
// //    console.log(calc);
// //    console.log(totalPrice);
// //    console.log(result);
// return result;
// }

// const tripData = {
//     distance: 300, // 300 км
//     fuelConsumption: 8, // 8 літрів на 100 км
//     fuelPrice: 1.2, // 1.2 одиниці валюти за літр
//     tollCosts: 5, // 5 одиниць валюти
//     parkingCosts: 10 // 10 одиниць валюти
//   };
  
//   const result = calculateTripCost(tripData);
//   /*
//   Очікуваний результат:
//   {
//     fuelCost: 28.8, // Вартість пального
//     totalCost: 43.8 // Загальна вартість поїздки
//   }
//   */
  
//   // Інший приклад
//   const anotherTripData = {
//     distance: 150, // 150 км
//     fuelConsumption: 6.5, // 6.5 літрів на 100 км
//     fuelPrice: 1.1, // 1.1 одиниці валюти за літр
//     tollCosts: 3, // 3 одиниці валюти
//     parkingCosts: 0 // 0 одиниць валюти
//   };
  
//   const anotherResult = calculateTripCost(anotherTripData);
//   /*
//   Очікуваний результат:
//   {
//     fuelCost: 10.725, // Вартість пального
//     totalCost: 13.725 // Загальна вартість поїздки
//   }
//   */
//  console.log("result: ",result);
//  console.log("anotherResult: ",anotherResult);


// function filterAndSortStudents(students, minGrade){
//   const studentsGrade = students.filter((a) => a.grade >= minGrade).sort((a,b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName))
//   return studentsGrade;

// }


//  const students = [
//   { firstName: "John", lastName: "Doe", grade: 85 },
//   { firstName: "Jane", lastName: "Smith", grade: 92 },
//   { firstName: "Emily", lastName: "Johnson", grade: 78 },
//   { firstName: "Michael", lastName: "Brown", grade: 88 },
//   { firstName: "Chris", lastName: "Davis", grade: 95 },
//   { firstName: "Chris", lastName: "Albi", grade: 95 }
// ];

// const minGrade = 80;

// const result = filterAndSortStudents(students, minGrade);
// console.log(result);
// /*
// Очікуваний результат:
// [
//   { firstName: "Michael", lastName: "Brown", grade: 88 },
//   { firstName: "John", lastName: "Doe", grade: 85 },
//   { firstName: "Chris", lastName: "Davis", grade: 95 },
//   { firstName: "Jane", lastName: "Smith", grade: 92 }
// ]
// */

// // Інший приклад
// const anotherStudentsList = [
//   { firstName: "Ava", lastName: "Taylor", grade: 77 },
//   { firstName: "Olivia", lastName: "Wilson", grade: 82 },
//   { firstName: "Isabella", lastName: "Miller", grade: 79 },
//   { firstName: "Sophia", lastName: "Anderson", grade: 85 }
// ];

// const anotherMinGrade = 80;

// const anotherResult = filterAndSortStudents(anotherStudentsList, anotherMinGrade);
// console.log(anotherResult);
// /*
// Очікуваний результат:
// [
//   { firstName: "Sophia", lastName: "Anderson", grade: 85 },
//   { firstName: "Olivia", lastName: "Wilson", grade: 82 }
// ]
// */





// function calculateSum(firstNumber, secondNumber, operationType){
//   operations = {
//     '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
//     '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
//     '*': (firstNumber, secondNumber) => firstNumber + secondNumber,
//     '/': (firstNumber, secondNumber) => secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero",
//     '%': (firstNumber, secondNumber) => secondNumber !== 0 ? firstNumber % secondNumber : "Error: Division by zero",
//     '**': (firstNumber, secondNumber) => firstNumber ** secondNumber,
//   }
//   const operation = operations[operationType]; // [operationType] це доступ до ключів в обєкті operations а саме  '+' '-' '*' '/' '%' '**'
//   //'+'  оператор додавання в лапках це String і це логічно  
//   //'-'  оператор віднімання в лапках це String і це логічно  
//   //'*'  оператор множення в лапках це String і це логічно  
//   //'/'  оператор ділення в лапках це String і це логічно  
//   //'%'  оператор залишку від ділення в лапках це String і це логічно  
//   //'**' оператор піднесення до степення в лапках це String і це логічно console.log(2 ** 3);  8  console.log(5 ** 2);25  console.log(10 ** 0);1  console.log(4 ** 0.5);2 (квадратний корінь з 4) 
  
//   // console.log(operation);
//   return operation ? operation(firstNumber, secondNumber) : 'Error: Invalid operation type';

// }


// const calculateSum = function(firstNumber, secondNumber, operationType){
//    let resultSum = 0;
//    switch (operationType) {
//     case '+':
//       resultSum = firstNumber + secondNumber;
//       break;
//     case "-":
//       resultSum = firstNumber - secondNumber;
//       break;
//     case "*":
//       if (!firstNumber || !secondNumber) {
//           if (!firstNumber) {
//              firstNumber += 1;
//           }
//           if (!secondNumber) {
//              secondNumber += 1;
//           }
//           resultSum = firstNumber * secondNumber;
//       }else{
//         resultSum = firstNumber * secondNumber;
//       }
//       break;
//     case '/':
//       if (!firstNumber || !secondNumber) {
//         if (!firstNumber) {
//            firstNumber += 1;
//         }
//         if (!secondNumber) {
//            secondNumber += 1;
//         }
//         resultSum = firstNumber * secondNumber;
//     }else{
//       resultSum = firstNumber * secondNumber;
//     }
//     break;
//   case "**":
//      resultSum = firstNumber ** secondNumber;
//      break;
//   case "%":
//     resultSum = firstNumber % secondNumber;
//   break  
//     default:
 
//    }
//    return resultSum
// }
// function calculateSum(firstNumber, secondNumber, operationType){
    
//     return operationType === '+' ? firstNumber + secondNumber :
//     operationType === '-' ? firstNumber - secondNumber :
//     operationType === '%' ? firstNumber % secondNumber :
//     operationType === '*' ? firstNumber * secondNumber :

//     operationType === '**' ? firstNumber ** secondNumber :
//     "Error: Unsupported operation";

// }
 

// console.log(calculateSum(10, 5, '+'));
// console.log(calculateSum(10, 5, '-'));
// console.log(calculateSum(0, 0, '*'));
// console.log(calculateSum(0, 0, '*'));
// console.log(calculateSum(10, 0, '*'));
// console.log(calculateSum(0, 10, '*'));
// console.log(calculateSum(0, 0, '/'));
// console.log(calculateSum(0, 0, '/'));
// console.log(calculateSum(10, 0, '/'));
// console.log(calculateSum(0, 10, '/'));
// calculateSum(10, 5, '+'); // Очікуваний результат: 15
// calculateSum(10, 5, '-'); // Очікуваний результат: 5
// calculateSum(10, 5, '*'); // Очікуваний результат: 50
// calculateSum(10, 5, '**'); // Очікуваний результат: 50
// calculateSum(10, 5, '%'); // Очікуваний результат: 50
// calculateSum(10, 5, '/'); // Очікуваний результат: 2




//                                                                                       тестове завдання по темі функції


// Створіть функцію, яка приймає три аргументи:

// Масив чисел.
// Символ операції ('+', '-', '*', '/').
// Число для операції.
// Функція повинна виконати наступні дії:

// Якщо передана операція — додавання ('+'), додайте це число до кожного елемента масиву.
// Якщо передана операція — віднімання ('-'), відніміть це число від кожного елемента масиву.
// Якщо передана операція — множення ('*'), помножте кожен елемент масиву на це число.
// Якщо передана операція — ділення ('/'), поділіть кожен елемент масиву на це число. Якщо число для ділення дорівнює 0, поверніть повідомлення "Error: Division by zero".
// Поверніть новий масив з результатами операції.


// function calculateArr (arr, symbol, num){
//      let result = [];
//      switch(symbol){
//         case "+":
//             for (let i = 0; i < arr.length; i++) {
//                 result.push(arr[i] + num);
//             }
//             break;
//         case "-":
//             for (let i = 0; i < arr.length; i++) {
//                 result.push(arr[i] - num);
//             }
//             break; 
//         case "/":
//             for (let i = 0; i < arr.length; i++) {
//                 if (num !== 0) {
//                     result.push(arr[i] / num);
//             }else{
//                 console.log("Ділення на нуль неможливе");
//             }
//         }
//         break;   
//     case "*":
//         for (let i = 0; i < arr.length; i++) {
//             result.push(arr[i] * num)
            
//         } 
//      }    
//      return result;
// }
// console.log(calculateArr([1,5,8,21], "*", 2));

//                замість if(){} на  map() 

// function calculateArr (arr, symbol, num){
//     let result = []
//     switch(symbol){
//        case "+":
//            arr.map(el => result.push(el + num)) // console.log(`Елемент: ${el}, Індекс: ${idx}, Весь масив: ${arr}`);

//            break;
//        case "-":
//            arr.map(el => result.push(el - num))
//            break; 
//        case "/":
//         if (num !== 0) {
//             arr.map(el => result.push(el / num))
//         }else{
//             console.log("Ділення на нуль неможливе");
//         }
//        break;   
//        case "*":
//            arr.map(el => result.push(el * num))
//             break;
//         default:
//            console.log("Невідомий символ операції");
//            return;
//         }    
//  return result;
// }
// console.log(calculateArr([1,5,8,21], "-", 2));




// Ускладнення задання 

// Щоб ускладнити завдання, можна додати кілька додаткових функцій:
// Підтримка комплексних операцій над елементами (наприклад, піднесення до степеня, обчислення модуля).
// Можливість передати кілька операторів і виконувати операції ланцюжком.
// Перевірка введення, щоб забезпечити, що масив містить тільки числа.
// Логування помилок та обробка винятків.
// Ось ускладнена версія функції:

// function calculateArr(arr, operations) {
//     let result = [...arr]
//     if (!result.every(Number.isFinite)) {
//         console.log("Масив повинен містити тільки числа");
//         return;
//     }
//     for (let operation of operations) {
//         let {symbol, num} = operation;
//         switch (symbol) {
//             case "+":
//                 arr.map(el => el + num)
//                 break;
//             case "*":
//                 arr.map(el => el - num);
//                 break;
//             case "^":
//                 arr.map(el => el ^ num)
//                 break;
//             case "%":
//                 arr.map(el => el % num)
//                 break;
//             default: console.log(`Невідомий символ операції: ${symbol}`);
        

//         }
//     }
//     return result;
   
// }

// let array = [1, 2, 3, 4, 5];

// // Приклад складної операції
// let operations = [
//     { symbol: "+", num: 2 },  // Додавання 2 до кожного елемента
//     { symbol: "*", num: 3 },  // Множення кожного елемента на 3
//     { symbol: "^", num: 2 },  // Піднесення кожного елемента до квадрату
//     { symbol: "%", num: 5 },  // Залишок від ділення на 5
//     //{ symbol: "/", num: 5 }   
// ];

// console.log('function',calculateArr(array, operations)); // [4, 0, 4, 1, 4]




// const dayOfWeek = prompt("Введіть день тижня: ").toLowerCase();

// switch (dayOfWeek) {
//     case "monday":
//         console.log("Початок робочого тижня!");
//         break;
//     case "wednesday":
//         console.log("Середина тижня!");
//         break;
//     case "friday":
//         console.log("Останній робочий день!");
//         break;
//     // case "saturday" :
//     //     console.log("Вихідний день!");
//     //     break;
//     // case "sunday":
//     //         console.log("Вихідний день!");
//     //         break;
//     case "saturday" : case "sunday": console.log("Вихідний день!");
//         break;
//     default:
//         console.log("Невідомий день");
//         break;
// }




//                                                   while



// Завдання 1 (Виведення чисел від 1 до 10): Код виведе числа від 1 до 10 у консоль.
// let i = 1;
// while (i <= 10){
//     console.log(i);
//     i++;
// }


// Завдання 2 (Сума чисел від 1 до N): Код обчислює суму чисел від 1 до числа N (користувач вводить значення N).
// let N = prompt("Введіть число")
// let sum = 0;
// let i = 1;
// // console.log(Number(prom));
// while (i <= Number(N)) {
//    sum += i;
//     i++;
// }
// console.log(sum);


// Завдання 3 (Перевірка введення числа): Програма продовжує запитувати у користувача число, поки не отримає значення більше 0.
// let num;
// while (num === undefined || num <= 0) {
//     num = parseInt(prompt("Введіть число більше 0: "), 10)
// }

// console.log("Введене число:", num);



// Завдання 4 (Обернене число): Код реверсує цифри введеного числа 
// (наприклад, перетворює 12345 на 54321).
// let user = prompt("Введіть число: ")
// let revers = 0;
// while (user > 0) {
// 	revers = (revers * 10) + (user % 10);
// 	// console.log(revers);
// 	user = Math.floor(user / 10);
// 	// console.log(user);
// }
// console.log('Обернене число: ', revers);



//                                                  do while



// Завдання 1: Виведення чисел від 1 до 5
// Опис: Напишіть програму, яка виведе числа від 1 до 5 за допомогою циклу do...while.
// let i = 1;
// do {
// 	console.log(i);
// 	i++
// } while (i <= 5);


// Завдання 2: Запитувати число, поки воно не буде більше за 10
// Опис: Напишіть програму, яка запитує в користувача число за допомогою prompt() і повторює запит, 
// доки користувач не введе число більше 10.
// let number;
// do {
// 	number = parseInt(prompt("Введіть число більше за 10"), 10) 
// } while (number <= 10);
// console.log("Введене число більше 10:", number);