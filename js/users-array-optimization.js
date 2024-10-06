// Завдання: Рефакторинг коду
// Спрощення та оптимізація: Перепишіть цей код, використовуючи методи роботи з масивами 
// (наприклад, filter, map, reduce), щоб він був більш читабельним та компактним.
// Усунення дублювання: Зменшіть повторення коду та оптимізуйте операції над масивом.
// Читабельність: Використовуйте зрозумілі назви змінних та функцій, щоб код був 
// легко зрозумілим для інших розробників.


const users = [
    { name: 'John', age: 17 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Mike', age: 15 },
];
// 1 описова назва функції
// 2 парметр це usersArray
// 3 що повертає( в моєму випадку як що все ок то повертає return {userName, count, length} а як що не все ок то повертає return { error: 'Це не масив або масив порожній.' };)
function filterAndCountUsersByAgeWithUppercaseNames(usersArray){
	// треба виконати умову перевірки
	// !usersArray - на null або undefined 
	// !Array.isArray(usersArray) - чи є це масивом
	// usersArray.length === 0 - перевірка чи в масиві хоч один обєкт
	if(!usersArray || !Array.isArray(usersArray) || usersArray.length === 0){
		return { error: 'Це не масив або масив порожній.' };
	}
	const length =  `Get the length of the array: ${usersArray.length}`
	const userName = usersArray.filter(obj => obj.age >= 18).map(obj => obj.name.toUpperCase())
	const count =  `count: ${userName.length}`
   return {userName, count, length}
}
console.log(filterAndCountUsersByAgeWithUppercaseNames(users));
// // 1. Фільтрація користувачів за віком
// let adultUsers = [];
// for (let user of users) {
//     if (user.age > 18) {
//         adultUsers.push(user);
//     }
// }

// 2. Імена в верхньому регістрі
// let upperCaseNames = [];
// for (let user of adultUsers) {
//     upperCaseNames.push(user.name.toUpperCase());
// }

// 3. Підрахунок загальної кількості користувачів
// let count = 0;
// for (let user of users) {
//     count++;
// }

// console.log(adultUsers);
// console.log(upperCaseNames);
// console.log(`Total users: ${count}`);
