<?php    

require_once("save.php");

class calculated {
        function calculate() {
            $firstNumber = $_REQUEST["firstNumber"];
            $operation = $_REQUEST["operation"];
            $secondNumber = $_REQUEST["secondNumber"];

            if(isset($firstNumber, $operation, $secondNumber)) { 

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
                        return $result;
                    } else {
                        $result = $firstNumber / $secondNumber;
                    }
                }
                $save = new save();
                $save->saveCalcOperation($firstNumber, $operation, $secondNumber, $result);
                return $result;
            }
        }
    }