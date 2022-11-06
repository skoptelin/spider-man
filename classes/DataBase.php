<?php 
class DataBase {
        private static $connection;

        static function connect() {
            if(empty(self::$connection)){
                self::$connection = mysqli_connect("localhost", "root", "", "calculator");
            }
            if (!self::$connection) {
                error_log ("Связь не установлена: " . mysqli_connect_error());
            }
        }

        static function query($sqlString) {
            return mysqli_query(self::$connection, $sqlString);
        }

        static function fetch($query) {
            return mysqli_fetch_assoc($query);
        }
    }
