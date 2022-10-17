<?php

    if(!empty($_REQUEST["firstNumber"]) && !empty($_REQUEST["operation"]) && !empty($_REQUEST["secondNumber"])) {
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
            $result = $firstNumber / $secondNumber;
        }
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
    <form method="POST">
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
        <input type="submit" value="Вычислить" name="resultButton">
    </form>
    <?php if (!empty($result)) { ?>    
        <div>Ваш результат: <?php echo $result; ?></div>
    <?php } ?>
</body>
</html>