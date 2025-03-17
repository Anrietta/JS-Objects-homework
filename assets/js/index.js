//  1. password = qwerty1234;
// Запитуйте у користувача пароль через prompt, поки він не співпаде з тим, що лежить в змінній

// const PASSWORD = 'qwerty1234';
// let userPass = '';

// do {
//     userPass = String(prompt('Enter your password :'));
// } while (userPass !== PASSWORD);



// 2. for

// Задача: написати функцію, яка обчислює факторіал переданного їй числа, результат роботи функції вивести на консоль

// Факторіал - це
// 5! (п'ять факторіал) = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10

// Спробуйте вирішити цю задачу за допомогою циклу for =)


// let askUser = Number(prompt('Enter a positive number to calculate the factorial :'));
// let factorial = 1;

// if (isNaN(askUser) || askUser <= 0) {
//     console.log(`You entered incorrect or negative number!`);
// } else {
//     for (let i = 1; i <= askUser; i++) {
//         factorial *= i;

//     }
//     console.log(`${askUser} factorial equals ${factorial}`);
// }



// 3. Об'єкти

// Створіть об'єкт людини.
// Опишіть властивості (придумайте 4-5 властивостей).
// Опишіть методи (що людина вміє робити; достатньо 1-2 методів).

// Отримайте доступ до властивостей / методів, виведіть результати на консоль =)



// const human = {
//     sex: 'woman',
//     height: 1.7,
//     weight: 55,
//     hairColor: 'brown',
//     eyesColor: 'dark brown',
//     looseGainWeight: function (diff) {
//             this.weight += diff;
//     },
//     changeHairColor: function (newColor) {
//         this.hairColor = newColor;
//     }
// }

// console.log(human.sex, human.weight, human.hairColor);
// human.looseGainWeight(-3);
// console.log(human.weight);
// human.changeHairColor('blond');
// console.log(human.hairColor);



// 4. Функція-конструктор Country, яка приймає в якості аргументів:

// Властивості:
// - назва країни
// - популяція
// - площа

// Метод:
// - плотність населення: популяція цієї країни / площу цієї ж країни


// const Country = function (countryName, population, area) {
//     this.country = countryName,
//     this.population = population,
//     this.area = area
// }

// const countryProto = {};
// let density = 0;
// countryProto.populationDensity = function () {
//     density = Math.round(this.population / this.area);
//     return `Population density of ${this.country} is ${density} persons per 1 square kilometer`;
// };

// Country.prototype = countryProto;

// const country1 = new Country('Ukraine', 37073000, 603628);
// const country2 = new Country('Spain', 48035000, 506030);
// const country3 = new Country('Greece', 10041000, 131957);

// console.log(country1.populationDensity());
// console.log(country2.populationDensity());
// console.log(country3.populationDensity());




// 5. Задача:
// Написати функцію greetingUser таким чином, щоб вона привітала користувача та вказала,
// скільки йому років має виповнитись в наступному році

// const currentYear = 2025;
// const greetingUser = function (name, yearOfBirth) {
//     return `Hello ${name}, you will turn to ${currentYear - yearOfBirth} next year!`;
// }

// console.log(greetingUser('Anna', 2018));