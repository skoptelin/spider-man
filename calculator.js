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
        result = (firstConvertNumber + secondConvertNumber).toFixed(2);

        return result;
    }
    if(operation === "-") {
        result = (firstConvertNumber - secondConvertNumber).toFixed(2);

        return result;
    }
    if(operation === "*") {
        result = (firstConvertNumber * secondConvertNumber).toFixed(2);

        return result;
    }
    if(operation === "/") {
        result = (firstConvertNumber / secondConvertNumber).toFixed(2);
        return result;
    }
}

//Вывод алерта с результатом калькулятора
function showResult() {
    if ((document.getElementById("enterBox1").value !== "") && (document.getElementById("operation").value !== "") && (document.getElementById("enterBox2").value !== "")) { //Проверка, чтобы поля ввода не были пустыми
        calculate(firstNumber, secondNumber, operation);
        let elementWindow = document.querySelector(".resultBox");
        elementWindow.classList.remove("hiddenResultBox");
        document.querySelector(".resultText").innerHTML = result;
        document.getElementById("resultText").innerHTML = result;
    }
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
    return firstNumber;
}

//Забираем знак операции
function getOperationItem() {
    let elementInput = document.getElementById("operation");
    operation = elementInput.value;
    return operation;
}

//Забираем второе число
function getNumber2() {
    let elementInput = document.querySelector(".enterBox2");
    secondNumber = elementInput.value;
    return secondNumber;
}









