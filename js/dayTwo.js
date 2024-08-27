const result = 5 && true && 0 && "";
//Логічний оператор && повертає перше "хибне" значення або останнє "істинне" значення, якщо всі операнди "істинні".
const result2 = 0 || false|| "";
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
const product1 = {
    price: 100,
    discount: 20,
    inStock: true,
    preOrder: false,
  };
  getProductStatus(product1); 
  // Очікуваний результат: { isAvailable: true, finalPrice: 80 }
  
  // Приклад 2
  const product2 = {
    price: 50,
    discount: null,
    inStock: false,
    preOrder: true,
  };
  getProductStatus(product2); 
  // Очікуваний результат: { isAvailable: true, finalPrice: 50 }
  
  // Приклад 3
  const product3 = {
    price: 0,
    discount: null,
    inStock: false,
    preOrder: true,
  };
  getProductStatus(product3); 
  // Очікуваний результат: { isAvailable: false, finalPrice: null }
  
function getProductStatus(product){
   if ( product.price > 0 && (product.inStock || product.preOrder)) {
        const discountedPrice = (typeof product.discount === "number" &&  product.discount > 0) ? product.price - (product.price * (product.discount / 100)) : product.price; 
        return { isAvailable: true, finalPrice: discountedPrice }
   }else{
    return { isAvailable: false, finalPrice: null }
   }
}

console.log(getProductStatus(product1));
console.log(getProductStatus(product2));
console.log(getProductStatus(product3));
// console.log(typeof 5 === "number");
// console.log(typeof 5 === "string");
// console.log(typeof "ford" === "string");