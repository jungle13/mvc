<?php


/**
 * Description of Index
 *
 * @author Cloud13
 */
class Index extends Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index() {
        $this->view->render($this, 'index');
    }
    function killItWithfire(){
            Session::destroy();
        }
}
