<?php 
session_start();

if(isset($_REQUEST["firstNumber"]) && !empty($_REQUEST["operation"]) && isset($_REQUEST["secondNumber"])) {
    $firstNumber = $_REQUEST["firstNumber"];
    $operation = $_REQUEST["operation"];
    $secondNumber = $_REQUEST["secondNumber"];

    if ($operation === "+") {
        $result = $firstNumber + $secondNumber;
    }

    if ($operation === "-") {
        $result = $firstNumber - $secondNumber;
    }
    
    if ($operation === "*") {
        $result = $firstNumber * $secondNumber;
    }

    if ($operation === "/") {
        if ($secondNumber === "0") {
            $result = "Ошибка! На 0 делить нельзя.";
        } else {
            $result = $firstNumber / $secondNumber;
        }
    }
}

if (isset($result)) {
    $_SESSION["result"] = $result;
    $_SESSION["firstNumber"] = $firstNumber;
    $_SESSION["operation"] = $operation;
    $_SESSION["secondNumber"] = $secondNumber;
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Калькулятор</div>
    <form method="POST" id="calculated">
        <div>Введите первое число:</div>
        <input type="number" name="firstNumber" step="0.001" required> 
        <div>Выберите операцию:</div>
            <select name="operation" required>
                <option>

                </option>
                <option value="+">
                    + Сложить
                </option>
                <option value="-">
                    - Вычесть
                </option>
                <option value="*">
                    * Умножить
                </option>
                <option value="/">
                    / Разделить
                </option> 
            </select>
        <div>Введите второе число:</div>
        <input type="number" name="secondNumber" step="0.001" required>
        <div><input type="submit" value="Вычислить" name="resultButton"></div>
        <a href="session_calc_result.php">Показать результат</a>
    </form>
</body>
</html>
    