<?php
    // Подключение к БД
    $connection = mysqli_connect("localhost", "root", "", "calculator"); 
    if (!$connection) {
        die ("Связь не установлена: " . mysqli_connect_error());
    }

    // Подключение к БД + SQL запрос на выбор последних 7 строк в БД
    $query = mysqli_query($connection, "SELECT * FROM calc_base ORDER BY id DESC LIMIT 7"); 

    $operations = [];

    //Цикл для заполнения переменной operations из БД
    while ($row = mysqli_fetch_assoc($query)){ 
        $operations[] = $row;
    }

    // Калькулятор
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
        if($secondNumber != "0") {
            mysqli_query($connection, "INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $operation . "', $secondNumber, $result)");
        }
    }

    //Ответ сервера в формате JSON
    $response = [
        "result" => $result,
        "operationHistory" => $operations
    ];
    echo json_encode($response);
?>