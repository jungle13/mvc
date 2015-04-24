<?php

try {
    include_once 'config.php';
//si la url no contiene Controlador/metodo/argumentos, por defecto me ubica en el Index/index

    $url = (isset($_GET["url"])) ? $_GET["url"] : "Index/index";
    $url = explode("/", $url);
    
    

    if (isset($url[0])) {
        $controller = $url[0];
    }
    
    //si no pregunto si es cadena vacia, la variable
    //$method sera igual a vacio por lo tanto estara
    //seteada.
    if (isset($url[1])) {
        if ($url[1] != '') {
            $method = $url[1];
        }
    }

    if (isset($url[2])) {
        if (isset($url[2]) != '') {
            $params = $url[2];
        }
    }
    
    spl_autoload_register(function($class){
        if(file_exists(LIBS.$class.".php")){
            require LIBS.$class.".php";
        }
    });
    
    $path = './controllers/'.$controller.'.php';
    
    if(file_exists($path)){
        require $path;
        $controller = new $controller(); 
        
        if(isset($method)){
            if(method_exists($controller, $method)){
                if(isset($params)){
                    $controller->{$method}($params);
                    var_dump($controller);
                }else{
                    $controller->{$method}();
                }
            }
        }else{
            $controller->index();
        }
    }else{
        echo 'Error';
    } 
    
} catch (Exception $exc) {
    echo $exc->getMessage();
}


