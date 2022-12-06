
// Создание html разметки калькулятора через js
function createCalc() {
    let sectionActivity = document.querySelector(".myActivityBox");

    let sectionCalc = document.createElement("section")
    sectionCalc.classList.add("section", "calcBox");
    sectionActivity.after(sectionCalc);

        let container = document.createElement("div");
        container.classList.add("container");
        sectionCalc.append(container);

            let chapter = document.createElement("p");
            chapter.classList.add("chapterText");
            chapter.id = "calculator";
            container.append(chapter);

            let chapterText = document.createTextNode("Калькулятор");
            chapter.append(chapterText);

            let calcInfo = document.createElement("div");
            calcInfo.classList.add("calcInfo");
            container.append(calcInfo);

                let resultBox = document.createElement("div");
                resultBox.classList.add("resultBox", "hiddenResultBox");
                calcInfo.append(resultBox);

                    let resultBoxH2 = document.createElement("h2");
                    resultBox.append(resultBoxH2);

                        let resultBoxH2Text = document.createTextNode("Результат");
                        resultBoxH2.append(resultBoxH2Text);

                    let hr1 = document.createElement("hr");
                    resultBox.append(hr1);

                    let result = document.createElement("div");
                    result.classList.add("resultText");
                    resultBox.append(result);

                    let resultText = document.createTextNode("Основная часть");
                    result.append(resultText);
                    
                    let hr2 = document.createElement("hr");
                    resultBox.append(hr2);

                    let buttonResultBox = document.createElement("div");
                    buttonResultBox.classList.add("buttonResultBox");
                    resultBox.append(buttonResultBox);

                        let buttonClose = document.createElement("button");
                        buttonResultBox.append(buttonClose);
                        buttonClose.addEventListener("click", hide);

                        let buttonCloseText = document.createTextNode("Закрыть");
                        buttonClose.append(buttonCloseText);

                let calcAction = document.createElement("div");
                calcAction.classList.add("calcAction");
                calcInfo.append(calcAction);

                    let selectFirstNumber = document.createElement("div");
                    selectFirstNumber.classList.add("textCalc");
                    calcAction.append(selectFirstNumber);

                    let selectFirstNumberText = document.createTextNode("Введите первое число:");
                    selectFirstNumber.append(selectFirstNumberText);

                    let selectFirstNumberInput = document.createElement("input");
                    selectFirstNumberInput.classList.add("enterBox1Invalid", "enterBox1");
                    selectFirstNumberInput.type = "number";
                    selectFirstNumberInput.addEventListener("keyup", delIncorInput);
                    selectFirstNumberInput.addEventListener("keypress", maxInputElements);
                    selectFirstNumberInput.required = ""; 
                    selectFirstNumberInput.id = "enterBox1";
                    selectFirstNumberInput.name = "firstNumber";
                    calcAction.append(selectFirstNumberInput);

                    let selectOperation = document.createElement("div");
                    selectOperation.classList.add("textCalc");
                    calcAction.append(selectOperation);

                    let selectOperationText = document.createTextNode("Выберите операцию:")
                    selectOperation.append(selectOperationText);
                    
                        let select = document.createElement("select");
                        select.addEventListener("change", delIncorInput);
                        select.addEventListener("change", getOperationItem);
                        select.classList.add("enterBoxWithButtonInvalid", "enterBoxWithButton");
                        select.id = "operation";
                        select.name = "operation";
                        selectOperation.insertAdjacentElement("afterend", select);

                        let option1 = document.createElement("option");
                        option1.classList.add("mathItem");
                        select.append(option1);

                        let option2 = document.createElement("option");
                        option2.classList.add("mathItem");
                        option2.value = "+";
                        select.append(option2);

                            let option2Text = document.createTextNode("+ Сложить");
                            option2.append(option2Text);
                        
                        let option3 = document.createElement("option");
                        option3.classList.add("mathItem");
                        option3.value = "-";
                        select.append(option3);

                            let option3Text = document.createTextNode("- Вычесть");
                            option3.append(option3Text);

                        let option4 = document.createElement("option");
                        option4.classList.add("mathItem");
                        option4.value = "*";
                        select.append(option4);

                            let option4Text = document.createTextNode("* Умножить");
                            option4.append(option4Text);

                        let option5 = document.createElement("option");
                        option5.classList.add("mathItem");
                        option5.value = "/";
                        select.append(option5);

                            let option5Text = document.createTextNode("/ Разделить");
                            option5.append(option5Text);
                    
                    let selectSecondNumber = document.createElement("div");
                    selectSecondNumber.classList.add("textCalc");
                    calcAction.append(selectSecondNumber);

                    let selectSecondNumberText = document.createTextNode("Введите второе число:");
                    selectSecondNumber.append(selectSecondNumberText);

                    let selectSecondNumberInput = document.createElement("input");
                    selectSecondNumberInput.classList.add("enterBox2Invalid", "enterBox2");
                    selectSecondNumberInput.type = "number";
                    selectSecondNumberInput.addEventListener("keyup", delIncorInput);
                    selectSecondNumberInput.addEventListener("keypress", maxInputElements);
                    selectSecondNumberInput.required = ""; 
                    selectSecondNumberInput.id = "enterBox2";
                    selectSecondNumberInput.name = "secondNumber";
                    calcAction.append(selectSecondNumberInput);


                    let button = document.createElement("button");
                    button.classList.add("buttonBox");
                    calcAction.append(button);
                    button.addEventListener("click", showResult);

                        let buttonText = document.createTextNode("Вычислить");
                        button.append(buttonText);

                let calcResult = document.createElement("div");
                calcResult.classList.add("calcResult");
                calcInfo.append(calcResult);

                    let calcResult1 = document.createElement("div");
                    calcResult1.classList.add("textCalc");
                    calcResult.append(calcResult1);

                        let calcResultText1 = document.createTextNode("Ваш результат:");
                        calcResult1.append(calcResultText1);

                    let calcResult2 = document.createElement("div");
                    calcResult2.classList.add("textCalc");
                    calcResult2.id = "resultText";
                    calcResult.append(calcResult2);

                        let calcResultText2 = document.createTextNode("Расчет не производился");
                        calcResult2.append(calcResultText2);

                    let calcResult3 = document.createElement("div");
                    calcResult3.classList.add("textCalc");
                    calcResult.append(calcResult3);

                        let calcResultText3 = document.createTextNode("История операций:");
                        calcResult3.append(calcResultText3);

                    let calcResult4 = document.createElement("div");
                    calcResult4.classList.add("textCalc");
                    calcResult4.id = "operationHistory";
                    calcResult.append(calcResult4);

                        let calcResultText4 = document.createTextNode("Здесь пока пусто");
                        calcResult4.append(calcResultText4);
}
document.addEventListener("DOMContentLoaded", createCalc);

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
        calculateAjax();
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

// Ограничение ввода символов в инпутах калькулятора
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

    operation = encodeURIComponent(operation);

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

