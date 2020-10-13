'use strict'

/*
// lesson 01
let money = 90000;
let income = 'Фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 9000000;
let period = 6;
let budgetDay = money / 30;

// lesson02
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('budgetDay: ' + budgetDay + ' рублей');
*/

// lesson03
/*
let money = +prompt('Ваш месячный доход?');
console.log('Задание №2: Ваш месячный доход ' + money);
console.log(typeof money);

let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Задание №3: Ваши возможные расходы ' + addExpenses);
console.log(typeof addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('Задание №4: Депозит в банке ' + String(deposit));
console.log(typeof deposit);

let expenses1 = prompt('Введите обязательную статью расходов №1?');
console.log('Задание №5: Статья расходов №1 ' + expenses1);
console.log(typeof expenses1);

let amount1 = +prompt('Во сколько обойдется ' + '"' + expenses1 + '"' + '?');
console.log(expenses1 + ' обойдется в ' + amount1);
console.log(typeof amount1);

let expenses2 = prompt('Введите обязательную статью расходов №2?');
console.log('Задание №5: Статья расходов №1 ' + expenses2);
console.log(typeof expenses2);

let amount2 = +prompt('Во сколько обойдется ' + '"' + expenses2 + '"' + '?');
console.log(expenses2 + ' обойдется в ' + amount2);
console.log(typeof amount2);

let budgetMonth = money - (amount1 + amount2);
console.log('Задание №6: Ваш бюджет на месяц ' + budgetMonth);
console.log(typeof budgetMonth);

let mission = +prompt('Ваша цель');
let period = Math.ceil(mission/budgetMonth);
console.log('Ваша цель: ' + mission);
console.log(typeof mission);
console.log('Задание №7: Цель будет достигнута через ' + period + ' месяца(ев)');
console.log(typeof period);

let budgetDay = budgetMonth / 30;
console.log('Задание №8: Бюджет на день ' + Math.floor(budgetDay));
console.log(typeof budgetDay);

// budgetDay = prompt('Ваш уровень дохода?');

if (budgetDay >= 1200) {
  console.log('Ваш уровень дохода ' + budgetDay);
  alert('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('Ваш уровень дохода ' + budgetDay);
  alert('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('Ваш уровень дохода ' + budgetDay);
  alert('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Ваш уровень дохода ' + budgetDay);
  alert('Что-то пошло не так'); 
}
*/

// lesson04
let money = +prompt('Ваш месячный доход?');

let expenses1 = prompt('Введите обязательную статью расходов №1?');
console.log('Задание №5: Статья расходов №1 ' + expenses1);

let amount1 = +prompt('Во сколько обойдется ' + '"' + expenses1 + '"' + '?');
console.log(expenses1 + ' обойдется в ' + amount1);

let expenses2 = prompt('Введите обязательную статью расходов №2?');
console.log('Задание №5: Статья расходов №1 ' + expenses2);

let amount2 = +prompt('Во сколько обойдется ' + '"' + expenses2 + '"' + '?');
console.log(expenses2 + ' обойдется в ' + amount2);

const getExpensesMonth = function() {
  return amount1 + amount2;
};
console.log('Задание №1: Сумма всех обязательных расходов за месяц: ', getExpensesMonth());

const getAccumulatedMonth = function() {
  return money - (amount1 + amount2);
};
getAccumulatedMonth();
console.log('Задание №2: Накопления за месяц (Доходы минус расходы): ', getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth()
console.log(accumulatedMonth);
console.log(getAccumulatedMonth());
console.log('Задание №3: Переменная accumulatedMonth равна результату вызова функции getAccumulatedMonth :', accumulatedMonth);

let mission = +prompt('Ваша цель');
const getTargetMonth = function() {
  return Math.ceil(mission/accumulatedMonth)
}
console.log('Задание №4: Цель будет достигнута через: ', getTargetMonth(), ' месяцев');

let budgetDay = accumulatedMonth / 30;
console.log('Задание №5: Ваш бюджет на день ', budgetDay);

let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.slice(', '));