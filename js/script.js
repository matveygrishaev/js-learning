'use strict'

//lesson05 

let money = 50000,
    mission = 500000,
    period = 3;

let showTypeOf = function(item) {
    console.log(typeof item);
};

// let expenses1 = prompt('Введите обязательную статью расходов?'),
//     expenses1Amount = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов?'),
//     expenses2Amount = +prompt('Во сколько это обойдется?');

    // Расходы за месяц getExpensesMonth
let getExpensesMonth = function() {
    
  // Переменная sum, которая суммирует расходы
    let sum = 0;

    expenses1Amount + expenses2Amount
    // С помощью цикла будем задавать вопрос про расходы и складывать сумму расходов
    for (let i = 0; i < 2, i++) {
        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

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