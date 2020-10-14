'use strict'

//lesson05 

/* Функция проверяет на:
!isNaN, восклицательный знак говорит, что если это число, возвращается true, если строка или что-то другое вернется false
isFinite(): если число конечное, то true и если бесконечное, то false */
let isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n))
}

let money,
    income = 'Фриланс',
    addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через   запятую'),
    deposit = confirm('Есть ли у вас депозит в банке'),
    mission = 50000,
    period = 3;

let start = function() {
    money = prompt('Ваш месячный доход?');

    // Первый способ задать условия для while:
    /*
    while (isNaN(money) || money.trim() === '' || money === null) {
        money = prompt('Ваш месячный доход?');
    }
    */
    
    /* !Второй способ задать условия для while:
    while (isNaN(parseFloat(money))) {
        money = prompt('Ваш месячный доход?');
    }
    */

    // Третий способ задать условие для while:
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};

start();

let showTypeOf = function(item) {
    console.log(typeof item);
};

// let expenses1 = prompt('Введите обязательную статью расходов?'),
//     expenses1Amount = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов?'),
//     expenses2Amount = +prompt('Во сколько это обойдется?');

let expenses = [];

// Расходы за месяц getExpensesMonth
let getExpensesMonth = function() {
    // Переменная sum, которая суммирует расходы
    let sum = 0;

    // С помощью цикла будем задавать вопрос про расходы и складывать сумму расходов
    for (let i = 0; i < 4; i++) {
        
        // Способ №1:

        /* 
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
         } 
        */

        // Способ №2:
        expenses[i] = prompt('Введите обязательную статью расходов?');

        sum = sum + +prompt('Во сколько это обойдется?');
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

    // Сбережения за месяц
let getAccumulatedMonth = function() {
    return money - expensesAmount;
};
    // Значение переменной приравнивается результату функции 
let accumulatedMonth = getAccumulatedMonth();

    // Рассчет периода достижения цели
let getTargetMonth = function() {
  return mission / accumulatedMonth
};