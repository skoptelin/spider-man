<?php

    $connection = mysqli_connect("localhost", "root", "", "calculator");
    if (!$connection) {
        die ("Связь не установлена: " . mysqli_connect_error());
    }

    $query = mysqli_query($connection, "SELECT * FROM calc_base ORDER BY id DESC LIMIT 7");

    $operations = [];

    while ($row = mysqli_fetch_assoc($query)){
        
        $operations[] = $row;
    }

    if(isset($_REQUEST["firstNumber"]) && !empty($_REQUEST["operation"]) && isset($_REQUEST["secondNumber"])) {
        $firstNumber = $_REQUEST["firstNumber"];
        $operation = $_REQUEST["operation"];
        $secondNumber = $_REQUEST["secondNumber"];

        if ($operation === "+") {
            $result = $firstNumber + $secondNumber;

            mysqli_query($connection, "INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $_REQUEST["operation"] . "', $secondNumber, $result)");
        }

        if ($operation === "-") {
            $result = $firstNumber - $secondNumber;

            mysqli_query($connection, "INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $_REQUEST["operation"] . "', $secondNumber, $result)");
        }
        
        if ($operation === "*") {
            $result = $firstNumber * $secondNumber;

            mysqli_query($connection, "INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $_REQUEST["operation"] . "', $secondNumber, $result)");
        }

        if ($operation === "/") {
            if ($secondNumber === "0") {
                $result = "Ошибка! На 0 делить нельзя.";
            } else {
                $result = $firstNumber / $secondNumber;
                mysqli_query($connection, "INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $_REQUEST["operation"] . "', $secondNumber, $result)");
            }
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
    <?php if (isset ($result)) { ?>    
        <div>
            Ваш результат: <?php echo $result; ?>
        </div>
    <?php } ?>

    <?php if (!empty($operations)) { ?>
        <div>
            История операций: 
        </div>

        <?php foreach ($operations as $operation_list) { ?>
            <div>
                <span>-> [<?php echo $operation_list["id"]; ?>]</span> 
                <?php echo $operation_list["first_number"] . $operation_list["operator"] . $operation_list["second_number"]; ?> 
                <span>=</span>
                <?php echo $operation_list["result"]; ?>
            </div>
        <?php } ?>
    <?php } ?>
</body>
</html>