<?php
require_once("DataBase.php");
require_once("connect.php");

class load extends connect {

    function loadCalcOperation () {
        $query = DataBase::query("SELECT * FROM calc_base ORDER BY id DESC LIMIT 7"); 

        $operations = [];

        //Цикл для заполнения переменной operations из БД
        while ($row = DataBase::fetch($query)){ 
            $operations[] = $row;
        }
        return $operations;
    }    
}