// Як створити функцію, що таке параметри, а що таке аргументи, що повертає функція, 
// function declaration і function expression


// Параметри - це локальні змінні, доступні тільки у тілі функції. Вони розділяються комами. 
// Параметрів може бути декілька, або взагалі не бути, у такому випадку записуються просто 
// порожні круглі дужки.


// Які параметри функція може приймати в js
// 1 Звичайні параметри (a,b)
// 2 Параметри за замовчуванням (name = 'Guest')
// 3 Rest-параметри (...numbers)
// 4 Об'єкти як параметри ({name, age})
// 5 Функції як параметри (callback-функції) (a,b, callback)
// 6 Стрілочні функції як параметри (5,3, (a,b) => a * b )
// 7 Аргумент arguments ()
// function showArguments() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(`Argument ${i + 1}: ${arguments[i]}`);
//   }
// }


// Які аргументи функція може приймати в js
// 1. Примітивні типи
// 2. Об'єкти (Object)
// 3. Масиви (Array)
// 4. Функції (Callback-функції)
// 5. Функції-конструктори
// 6. Класси (Class)
// 7. Проміси (Promise)
// 8. Типи "спеціальних" значень (NaN, Infinity)
// 9. Rest-параметри (для множини аргументів)
// 10. Комбінації аргументів


// function arr (){
//     return
// }
// const arr = function(){
//     return
// }
// const arr = () => {
//     return
// }
// const arr = (a, b) =>  a + b;




// parseInt("2G") 
// Number.isNaN()
// ?. Він дозволяє уникнути помилок, коли намагаються отримати доступ до властивостей об'єкта, які можуть бути null або undefined
// У всього є свої всластивості і методи крім null або undefined (помилка типу TypeError)



// питаю у людини імя
// перевірка на імя 
// перепитую поки це не буде імя 
// питаю прізвіще 
// перепитую поки це не буде прізвіще
// створюю зміну де зберігаю імя і прізвіще 
// результат вивожу в консоль 
// let firstName = prompt("Вкажіть ваше імя: ")?.trim();
// while (!firstName || firstName.length < 2 || !Number.isNaN(parseInt(firstName))) {
//     firstName = prompt("Вкажіть будь ласка ще раз своє імя: ")?.trim()
// }
// let lastName = prompt('Вкажіть будь ласка своє прізвіще: ')?.trim();
// while (!lastName || lastName.length < 2 || !Number.isNaN(parseInt(lastName))) {
//     lastName = prompt("Вкажіть будь ласка ще раз своє прізвіще:")?.trim()
// } 
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let firstName = getPromptWithTrim("Вкажіть ваше імя: ");
// while (isName(firstName)) {
//     firstName = prompt("Вкажіть будь ласка ще раз своє імя: ")?.trim()
// }
// let lastName = getPromptWithTrim('Вкажіть будь ласка своє прізвіще: ');
// while (isName(lastName)) {
//     lastName = prompt("Вкажіть будь ласка ще раз своє прізвіще:")?.trim()
// } 
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);
const myName = "Mykola"

const message = "Привіт";
const isName = name => (!name || name.length < 2 || !Number.isNaN(parseInt(name)));
const getPromptWithTrim = (question) => {
    const answer = prompt(question);
    return answer === null ? null : answer.trim();
}
// function getPromptWithTrim(question){
//     const answer = prompt(question);
//     return answer === null ? null : answer.trim();
// }
console.log(isName());
// var name = myName
// параметри створюються завжди як що для них не передали значення то вони не ініціалізуться 
// як що зміну оголосити але не ініціалізувати то там буде undefined
// параметри та створені в середені зміні є локальними це означає що після завершення функції вони знищуються

// написати функцію яка отримує зпитання викликає промт з цим запитанням як що людина натиснула 
// cancel то повертає null а як що людина написала якусь відповідь обрізати пробіли через 
// trim() і поврнути обрану строку
//return  повертає null або обрізану строку;
// запитати людину за допомогую промт і зберегти відповідь у змінну
// перевірити як що людина натиснула cancel то повернути null 
// як що людина написала якусь відповідь обрізати пробіли через trim()
// повернути відповідь return
// function getPromptWithTrim(question) {
//     const answer = prompt(question);
//     if (answer === null) {
//         return null;
//     }
//     return answer.trim();
// }

// 1 імя функції 2 парметри 3 що функція повертає 
// get - як що вона щось повертає але це не вираховується математично 
// calc - павертає результат розрахунку 
// display - щось відображає на екрані 
// is - перевіряє чи щось відповідає певним вимогам повнртає як правило тру або фолс
// 
// console.log(firstName);

// const value = true;
// console.log(value.length);

// я хочу як що value зберігається не null не undefain то викликати метод trim() 
// const value = null;
// const normalizedValue = (value !== null && value !== undefined) ? value.trim() : value;
// value?.trim();
// console.log(normalizedValue);

