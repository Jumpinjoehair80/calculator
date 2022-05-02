let num0 = document.getElementById('num0');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let decimal = document.getElementById('decimal'); // needs work
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

let addition = document.getElementById('addition');
let subtraction = document.getElementById('subtract');
let multiplication = document.getElementById('multiply');
let division = document.getElementById('divide');

let typeArea = document.getElementById('type-area');
let answer = document.getElementById('answer');
typeArea.innerHTML = 0;
answer.innerHTML = 0;

function input(e) {
  typeArea.innerHTML = typeArea.innerHTML + e;
  console.log(typeArea.innerHTML);
}

function add() {
  answer.innerHTML = parseInt(answer.innerHTML) + parseInt(typeArea.innerHTML);
  if (answer.innerHTML === '' || typeArea.innerHTML === '') {
    alert('Add input');
    answer.innerHTML = 0;
    return;
  }
  typeArea.innerHTML = '';
}

function subtract() {
  answer.innerHTML = parseInt(answer.innerHTML) - parseInt(typeArea.innerHTML);
  if (answer.innerHTML === '' || typeArea.innerHTML === '') {
    alert('Add input');
    answer.innerHTML = 0;
    return;
  }
  typeArea.innerHTML = '';
}

function multiply() {
  answer.innerHTML = parseInt(answer.innerHTML) * parseInt(typeArea.innerHTML);
  if (answer.innerHTML === '' || typeArea.innerHTML === '') {
    alert('Add input');
    answer.innerHTML = 0;
    return;
  }
  typeArea.innerHTML = '';
}

function divide() {
  answer.innerHTML = parseInt(answer.innerHTML) / parseInt(typeArea.innerHTML);
  if (answer.innerHTML === '' || typeArea.innerHTML === '') {
    alert('Add input');
    answer.innerHTML = 0;
    return;
  }
  typeArea.innerHTML = '';
}

function equal() {
  answer.innerHTML = typeArea.innerHTML;
  typeArea.innerHTML = '';
}

function clearFields() {
  typeArea.innerHTML = 0;
  answer.innerHTML = 0;
}

num0.addEventListener('click', () => {
  let num0 = 0;
  input(num0);
});

num1.addEventListener('click', () => {
  let num1 = 1;
  input(num1);
});

num2.addEventListener('click', () => {
  let num2 = 2;
  input(num2);
});

num3.addEventListener('click', () => {
  let num3 = 3;
  input(num3);
});

num4.addEventListener('click', () => {
  let num4 = 4;
  input(num4);
});

num5.addEventListener('click', () => {
  let num5 = 5;
  input(num5);
});

num6.addEventListener('click', () => {
  let num6 = 6;
  input(num6);
});

num7.addEventListener('click', () => {
  let num7 = 7;
  input(num7);
});

num8.addEventListener('click', () => {
  let num8 = 8;
  input(num8);
});

num9.addEventListener('click', () => {
  let num9 = 9;
  input(num9);
});

decimal.addEventListener('click', () => {
  let decimal = '.';
  input(decimal);
});

addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract);
multiplication.addEventListener('click', multiply);
division.addEventListener('click', divide);
equals.addEventListener('click', equal);
clear.addEventListener('click', clearFields);
