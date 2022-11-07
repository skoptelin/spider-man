<?php
    require_once("classes/load.php");
    require_once("classes/calculated.php");
    require_once("classes/respose.php");

    $calculated = new calculated();
    $load = new load();
    $respose = new respose();

    $result = $calculated->calculate($_REQUEST["firstNumber"], $_REQUEST["operation"], $_REQUEST["secondNumber"]);

    $operations = $load->loadCalcOperation();

    $respose->resposeNew($result, $operations);