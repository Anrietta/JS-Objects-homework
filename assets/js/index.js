// 1. Створити об’єкт user з наступними властивостями:
// ім'я, 
// прізвище, 
// електронна адреса, 
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 

// const user = {
//     firstName: 'Vasya',
//     lastName: 'Ivanov',
//     email: 'Ivanov@mail.com',
//     password: '123456',
//     phoneNumber: '+380501234567',
//     address: {
//         region: 'Vinnitsyka',
//         city: 'Vinnitsya',
//         street: 'Korzo',
//         house: 5,
//         apartment: 17
//     }
// };

// console.dir(user);
// console.log(user.password);
// console.log(user.address.apartment);




// 2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”


// const userGreeting = function (firstName, lastName) {
//     console.log(`Доброго дня, ${firstName} ${lastName}!`);
// }

// userGreeting(user.firstName, user.lastName)




// 3. Написати функцію, яка приймає об’єкт і виводить в консоль всі його властивості (за допомогою циклу for..in)

// const userInfo = function (obj) {
//     for (let key in obj) {
//         if (typeof obj[key] !== 'object') {
//             console.log(`${key}: ${obj[key]}`);
//         } else {
//             for (let innerKey in obj[key]) {
//                 console.log(`${innerKey}: ${obj[key][innerKey]}`);

//             }
//         }
//     }
// }

// userInfo(user);





// 4. Створити об’єкт car (машина) з властивостями:
// колір
// модель
// марка
// об’єм двигуна
// місткість (можлива кількість пасажирів)
// поточна швидкість (speed)
// максимальна можлива швидкість (maxSpeed)
//        та методами:
// accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину (ціле число) та додає до поточної швидкості (speed), але результат не має перевищувати максимально можливої швидкості для цієї машини
// deaccelerate (зменшення швидкості): метод приймає ціле число (кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану, але результат не може бути від’ємним
// stop (зупинка) - метод нічого не приймає, при виклику встановлює поточну швидкість (speed) рівною 0


// const car = {
//     color: 'green',
//     model: 'Mokka',
//     brand: 'Opel',
//     engineDisplacement: 1.4,
//     capacity: 5,
//     currentSpeed: 50,
//     maxSpeed: 250,
//     accelerate: function(num) {
//         if (num + car.currentSpeed >= car.maxSpeed) {
//             car.currentSpeed = car.maxSpeed;
//         } else {
//             car.currentSpeed += num;
//         }
//         console.log(car.currentSpeed);
//     },
//     deaccelerate: function(num) {
//         if (car.currentSpeed - num <= 0) {
//             car.currentSpeed = 0;
//         } else {
//             car.currentSpeed -= num;
//         }
//         console.log(car.currentSpeed);
//     },
//     stop: function() {
//         car.currentSpeed = 0;
//     }

// };

// car.accelerate(260);
// car.deaccelerate(40);
// car.stop();




// 5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями

// function Car (color, model, brand, engineDisplacement, capacity, currentSpeed, maxSpeed) {
//     this.color = color,
//     this.model = model,
//     this.brand = brand,
//     this.engineDisplacement = engineDisplacement,
//     this.capacity = capacity,
//     this.currentSpeed = currentSpeed,
//     this.maxSpeed = maxSpeed
// };

// const carProto = {};
// carProto.accelerate = function(num) {
//     if (num + this.currentSpeed >= this.maxSpeed) {
//         this.currentSpeed = this.maxSpeed;
//     } else {
//         this.currentSpeed += num;
//     }
// };
// carProto.deaccelerate = function(num) {
//     if (this.currentSpeed - num <= 0) {
//         this.currentSpeed = 0;
//     } else {
//         this.currentSpeed -= num;
//     }
// };
// carProto.stop = function() {
//     this.currentSpeed = 0;
// };

// Car.prototype = carProto;

// const car1 = new Car('black', 'X5', 'BMW', 2, 5, 80, 320);
// const car2 = new Car('white', 'CX-30 e', 'Mazda', 1.2, 4, 60, 150);
// const car3 = new Car('red', 'CHR', 'Toyota', 1.2, 5, 95, 290);


// console.dir(car1);
// car1.accelerate(220);
// car1.stop();
// car1.deaccelerate(20);


// car2.engineDisplacement = 1.3;
// console.log(car2.currentSpeed);
// car2.stop();
// console.dir(car2);

// car3.deaccelerate(96);
// car3.deaccelerate(0);
// car3.maxSpeed = 280;
// console.dir(car3);

// console.log(car1 instanceof Car);
// console.log(car2 instanceof Car);
// console.log(car3 instanceof Car);
// console.log(typeof car2 === 'object');
