<?php
    require_once("DataBase.php");
    require_once("connect.php");
    
    class save extends connect{

        function saveCalcOperation ($firstNumber, $operation, $secondNumber, $result) {
            DataBase::query("INSERT INTO calc_base (first_number, operator, second_number, result) VALUES ($firstNumber, '" . $operation . "', $secondNumber, $result)");
        }
    }
