let firstNumber;
let secondNumber;
let operation;
let result;

//Вывод алерта с результатом калькулятора
function showResult() {
    let elementInput1  = document.querySelector("#enterBox1");
    let elementInput2  = document.querySelector("#enterBox2");
    let operationInput = document.querySelector("#operation");
    let elementWindow  = document.querySelector(".resultBox");
    let resultText1    = document.querySelector(".resultText");
    let resultText2    = document.getElementById("resultText");
    if ((elementInput1.value !== "") && (operationInput.value !== "") && (elementInput2.value !== "")) { //Проверка, чтобы поля ввода не были пустыми
        calculateAjax(firstNumber, secondNumber, operation);
        elementWindow.classList.remove("hiddenResultBox");
    } else { //Если поля ввода пустые, просим заполнить поля и подсвечиваем их красным
        elementInput1.classList.remove("enterBox1");
        elementInput2.classList.remove("enterBox2");
        operationInput.classList.remove("enterBoxWithButton");
        elementWindow.classList.remove("hiddenResultBox");
        resultText1.innerHTML = "Введите, пожалуйста, первое число, операцию и второе число";
        resultText2.innerHTML = "Введите, пожалуйста, первое число, операцию и второе число";
    }
}

//Скрытие алерта с результатом калькулятора
function hide() {
    let elementWindow = document.querySelector(".resultBox");
    elementWindow.classList.add("hiddenResultBox");
}

//Забираем первое число из enterBox1
function getNumber1() {
    let elementInput1 = document.querySelector("#enterBox1");
    firstNumber = elementInput1.value;
    return firstNumber;
}

//Забираем знак операции из operation
function getOperationItem() {
    let operationInput = document.querySelector("#operation");
    operation = operationInput.value;
    return operation;
}

//Забираем второе число из enterBox2
function getNumber2() {
    let elementInput2 = document.querySelector("#enterBox2");
    secondNumber = elementInput2.value;
    return secondNumber;
}

//Показываем/скрываем меню бургера, только для мобильной версии
function showHideNav() {
    let showBurgerMenu = document.querySelector (".showNavList");
    showBurgerMenu.classList.toggle("navList");
}

// Ограниение ввода символов в инпутах калькулятора
function maxInputElements() {
    let elementInput1 = document.querySelector("#enterBox1");
    let elementInput2 = document.querySelector("#enterBox2");

    elementInput1.oninput = function() {
        this.value = this.value.substr(0, 16);
    }
    elementInput2.oninput = function() {
        this.value = this.value.substr(0, 16);
    }
}

// Убираем красную подсветку полей калькулятора при вводе значений
function delIncorInput() {
    let elementInput1 = document.querySelector("#enterBox1");
    let elementInput2 = document.querySelector("#enterBox2");
    let operationInput = document.querySelector("#operation");

    let valueInput1 = elementInput1.value;
    let valueInput2 = elementInput2.value;
    let operInput = operationInput.value;
    
    if (valueInput1 != "") {
        elementInput1.classList.remove("enterBox1Invalid");
        elementInput1.classList.add("enterBox1");
    } else {
        elementInput1.classList.remove("enterBox1");
        elementInput1.classList.add("enterBox1Invalid");
    }

    if (valueInput2 != "") {
        elementInput2.classList.remove("enterBox2Invalid");
        elementInput2.classList.add("enterBox2");
    } else {
        elementInput2.classList.remove("enterBox2");
        elementInput2.classList.add("enterBox2Invalid");
    }

    if (operInput != "") {
        operationInput.classList.remove("enterBoxWithButtonInvalid");
        operationInput.classList.add("enterBoxWithButton");
    } else {
        operationInput.classList.remove("enterBoxWithButton");
        operationInput.classList.add("enterBoxWithButtonInvalid");
    }
}

//Калькулятор через Ajax запрос
function calculateAjax() {

    getNumber1();
    getOperationItem();
    getNumber2();

    let firstConvertedNumber = Number(firstNumber);
    let secondConvertedNumber = Number(secondNumber);
    let resultText1 = document.querySelector(".resultText");
    let resultText2 = document.getElementById("resultText");

    if(operation === "+"){
        operation = "%2B";
    }

    fetch("calculator.php?firstNumber=" + firstConvertedNumber + "&operation=" + operation + "&secondNumber=" + secondConvertedNumber)
    .then(respose => respose.json())
    .then(jsonObject => {
        resultText1.innerHTML = jsonObject.result;
        resultText2.innerHTML = jsonObject.result;

        let i;
        let operationHistory = "";

        for(i = 0; i < jsonObject.operationHistory.length; i++) {
            let arr = jsonObject.operationHistory[i];
            operationHistory = operationHistory + "--> " + arr.first_number + " " + arr.operator + " " + arr.second_number + " = " + arr.result + "; <br/>";
        }
        document.getElementById("operationHistory").innerHTML = operationHistory;
    })
}









