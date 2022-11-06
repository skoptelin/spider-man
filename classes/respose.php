<?php
    //Ответ сервера в формате JSON
    class respose {
        function respose($result, $operations){
            $response = [
                "result" => $result,
                "operationHistory" => $operations
            ];
            echo json_encode($response);
        }
    }