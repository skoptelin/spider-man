<?php
session_start();

if (isset($_SESSION["result"])) {
    echo "Ваш результат: " . $_SESSION["firstNumber"] . " " . $_SESSION["operation"] . " " . $_SESSION["secondNumber"] . " = " . $_SESSION["result"];
}