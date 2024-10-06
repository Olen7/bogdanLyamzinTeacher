//null перетворення на число = 0;
// let age = Number(prompt("Вкажіть вік як число: ")) 
// // for (let i = 0; i < 5; i += 1) {
// //     console.log(i);
    
// // }
// while(age === 0 || Number.isNaN(age)){
//   age = Number(prompt("Вік має бути числом, потвторіть будь ласка: ")) 
// }
// console.log(age);
//Цикл всередині циклу як правило не правильно!
// let score = prompt("Вкажіть оцінку за придмет: ");
// let result = 0;
// let count = 0;
// while (score !== null) {
//     if(score === ""){
//       score = prompt("Ви нічого не ввели в строку, спробуйте будь ласка ще раз");
//       continue;
//     }
//     result += Number(score);
//     count += 1;
//     score = prompt("Введіть наступну оцінку: ");
//     if (score === null) {
//         break;
//     }
// }

// const evadeScore = result / count;
// if(evadeScore >= 6){
//     alert("Ваш прохідний бал задовільний!")
// }else{
//     alert("Ваш прохідний бал не задовільний!")
// }



// switch(){
//     case "" : 5;
// }
//admin manager user
// const role = prompt("Вкажіть Вашу роль: ");
// switch (role) {
//     case "admin":
//         alert("Ви можете змінити налаштування сайту")
//      break;
//         case "manager":
//         alert("Ви можете подивитися налаштування сайту")
//         break;
//         case "user":
//         alert("У Вас немає доступу до налаштування сайту")
//      break;

//     default:
//         alert('Такої ролі не існує')
// }

const month = prompt("Вкажіть місяць для розрахунку зарплатні: ")
// let workDays = 0;
let salary = 0;
switch (month) {
    case "Січень": 
    case "Березень":
    case "Травень":
    case "Липень":
    case "Серпень":
    case "Жовтень":
    case "Грудень":
    //Групування кейсів
        salary = 23 * 1000
        break;
    case "Лютий":
            salary = 20 * 1000
            break;
    case "Квітень":
    case "Червень":
    case "Вересень":
    case "Листопад":
            salary = 22 * 1000
            break;

    default:
        alert("Немає такого місяця!")
}
if(salary > 0){
    // alert("Ваша зарплатння", salary)
    alert(`Ваша зарплатння ${salary}`)
}
