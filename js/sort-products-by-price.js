// Завдання: Сортування продуктів за ціною
// Ситуація
// Уяви, що ти працюєш над додатком для онлайн-магазину. Тобі потрібно реалізувати функцію, 
// яка сортує масив об'єктів продуктів за ціною від найдешевшого до найдорожчого.
// Якщо хочеш ускладнити завдання, додай параметр order, який визначає, як сортувати: "asc" (за зростанням) або "desc" (за спаданням).

const products = [
    { name: 'Phone', price: 600 },
    { name: 'Laptop', price: 1200 },
    { name: 'Tablet', price: 400 },
    { name: 'Headphones', price: 100 },
    { name: 'Smartwatch', price: 200 }
];
// В кінці подумав зробити функцію для перевіпрок і оптимизувати код!
function isArray(array, order){
   return (!array || !Array.isArray(array) || array.length === 0 || typeof order !== "string")
}

// 1 описова назва функції sortArrayAscendingDescending
// 2 парметр це array - масив, order = "asc" - приймає два параметри "asc" і "desc" е вибір яки вказує за яким напрямком сортувати
// 3 що повертає : відсотртований масив обєктів за price
// 4 в параметр передав значення за замовчування як що при виклику не передали 2 агргумент order = "asc"
function sortArrayAscendingDescending(array, order = "asc"){
// !array  на null або undefined 
// !Array.isArray(array) чи є це масивом
// array.length === 0 перевірка чи в масиві хоч один обєкт
// typeof order !== "string" - перевірка на string

// (!array || !Array.isArray(array) || array.length === 0 || typeof order !== "string")
if (isArray(array, order)) {
	// return console.error("Невірний або порожній масив!");
	return {error: 'Виникла помилка в передачі даних'}
}
// validOrder - виконав тернарним оператором перевіку order як що true повертає "asc" або "desc" як що false то "asc"
	const validOrder = order === "asc" || order === "desc" ? order : "asc";
// direction - виконав тернарним оператором перевіку validOrder як що true повертає 1 як що false то -1
	const direction = validOrder === "asc" ? 1 : -1;
// return - використав на масиві метод sort і в неявному повернені (a.price - b.price) помножив на direction
	return array.sort((a,b) => (a.price - b.price) * direction)
    

} 
console.log(sortArrayAscendingDescending(products, "asc"));