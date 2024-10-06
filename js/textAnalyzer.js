const text = "Hello, JavaScript is a powerful programming language. JavaScript is versatile and easy to learn!";
// Завдання
// Реалізуй такі функції для роботи з цим текстом:

// Створю функції для перевірок
const validators = {
	isInvalidText: (text) => {
		return (!text || text.trim().length === 0)
	},
	isEmptyOrNonStringWithDigits: (word) =>{
		return (!word || word.trim().length === 0 || typeof word !== 'string' || /\d/.test(word))
	},
	isNotNumber: (length) => {
		return (typeof length !== "number" || length <= 0)
	}
}


// Підрахунок слів: Напиши функцію countWords(text), яка підраховує кількість слів у тексті. 
// Словом вважається послідовність символів, розділених пробілом або розділовими знаками.
function countWords(text){
	if (validators.isInvalidText(text)) {
		return "Тип даних не String або він порожній"
	}
//split(/\s+/) - Розбиває рядок на масив слів. Регулярний вираз \s+ розбиває рядок по одному 
//або більше пробілах.
	return text.split(/\s+/).length;
}
console.log(countWords(text));
// Приклад: countWords(text) має повернути кількість слів у тексті.


// Пошук частоти слова: Створи функцію wordFrequency(text, word), яка повертає кількість разів, коли вказане 
// слово (word) зустрічається в тексті, незалежно від регістру (великих чи малих літер).
function wordFrequency(text, word){
    if (validators.isInvalidText(text)) {
		return "Тип даних не String або він порожній"
	}
	if (validators.isEmptyOrNonStringWithDigits(word)) {
		return "Слово для пошуку не є рядком або воно порожнє або є рядком в якуму є число!"
	}
	// регулярний вираз /\d/, який перевіряє, чи міститься в рядку хоча б одна цифра (0-9)
	// test(word) Метод .test() повертає true, якщо в рядку знайдено цифру, і false в іншому випадку.
	// text.toLowerCase() - приводжу все до малого регістру
	// split(/\W+/) - Регулярний вираз \W+ розбиває рядок за всіма символами, які не є літерами, цифрами або підкресленням.
	// .filter(arr => arr === word.toLowerCase()) - фільтрую слова arr (arr - це масив text) і порівнюю його з word.toLowerCase() який також приведений до нижнього регістру  
	const normalized = text.toLowerCase().split(/\W+/).filter(arr => arr === word.toLowerCase());
	return  normalized.length
}
console.log(wordFrequency(text, "is"));

// Приклад: wordFrequency(text, "javascript") має повернути 2.


// Пошук найдовшого слова: Реалізуй функцію findLongestWord(text), яка повертає найдовше слово в тексті.
function findLongestWord(text){
	if (validators.isInvalidText(text)) {
		return "Тип даних не String або він порожній"
	}
	// [0]  означає, що після сортування масиву слів за довжиною ми беремо перший елемент цього масиву - programming
	return text.split(/\W+/).sort((a,b) => b.length - a.length)[0];
}
console.log(findLongestWord(text));
// Приклад: findLongestWord(text) має повернути programming.


// Створення короткого огляду: Напиши функцію getSummary(text, length), яка повертає скорочену версію тексту, 
// обмежену length символами, додаючи ... у кінці, якщо текст був скорочений.
function getSummary(text, length){
	if (validators.isInvalidText(text)) {
		return "Тип даних не String або він порожній!"
	}
	if (text.length <= length) {
		return text;
	}
	// if (typeof length !== "number" || length <= 0) {
	// 	return "Ви не вибрали довжину або це не числове значення!"
	// }
	if (validators.isNotNumber(length)) {
		return "Ви не вибрали правильну довжину або це не числове значення!"
	}
	// return text.slice(0, length) + '...';
	return length === 0 ? text : text.slice(0, length).trim() + (text.length > length ? "..." : "")
}
console.log(getSummary(text, 25));
// Приклад: getSummary(text, 30) має повернути щось на кшталт "Hello, JavaScript is a powerfu...".


// Додаткове завдання (необов’язково)
// Реалізуй функцію uniqueWords(text), яка повертає масив унікальних слів у тексті (без повторень), 
// незалежно від регістру.
function uniqueWords(text){
	if (validators.isInvalidText(text)) {
		return "Тип даних не String або він порожній!"
	}
	const arr = text.toLowerCase().split(' ') 
	// return new Set(arr) - повертає об'єкт
	// Array.from(new Set(arr)) - об'єкт в масив
	// join(" ") - перетворює в рядок тому що бачу логічним повертати рядок як що примаю рядок( не вказано в умові завдання що повертати тому дотримуюсь такого правила)
	return Array.from(new Set(arr)).join(" ")
	
}
console.log(uniqueWords(text));