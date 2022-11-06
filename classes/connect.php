<?php

require_once("DataBase.php");

class connect {
    function __construct(){
        DataBase::connect();
    }
}
