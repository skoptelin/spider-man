let firstNumber;
let secondNumber;
let operation;
let result;

//Калькулятор
function calculate() {
    getNumber1();
    getOperationItem();
    getNumber2();

    //Преобразование переменных из строкового в числовые значения
    let firstConvertNumber = Number(firstNumber);
    let secondConvertNumber = Number(secondNumber);

    if(operation === "+") {
        result = firstConvertNumber + secondConvertNumber;

        return result;
    }
    if(operation === "-") {
        result = firstConvertNumber - secondConvertNumber;

        return result;
    }
    if(operation === "*") {
        result = firstConvertNumber * secondConvertNumber;

        return result;
    }
    if(operation === "/") {
        result = firstConvertNumber / secondConvertNumber;

        return result;
    }
}

//Забираем знак операции
function getOperationItem() {
    let elementInput = document.getElementById("operation");
    operation = elementInput.value;

    return operation;
}

//Вывод алерта с результатом калькулятора
function showResult() {
    calculate(firstNumber, secondNumber, operation);
    let elementWindow = document.querySelector(".resultBox");
    elementWindow.classList.remove("hiddenResultBox");
    document.querySelector(".resultText").innerHTML = result;
    document.getElementById("resultText").innerHTML = result;
}

//Скрытие алерта
function hide() {
    let elementWindow = document.querySelector(".resultBox");
    elementWindow.classList.add("hiddenResultBox");
}

//Забираем первое число
function getNumber1() {
    let elementInput = document.querySelector(".enterBox1");
    firstNumber = elementInput.value;

    console.log(firstNumber);
    return firstNumber;
}

//Забираем второе число
function getNumber2() {
    let elementInput = document.querySelector(".enterBox2");
    secondNumber = elementInput.value;

    console.log(secondNumber);
    return secondNumber;
}









