<?php
/**
 * @package currency-converter
 * @version 1.0.0
 */
/*
Plugin Name: Currency Converter
Plugin URI: 127.0.0.1/loremWordpress
Description: A litle currency converter !
Author: Hugo Derré
Version: 1.0.0
Author URI: https://hugoderre.fr/
*/


require 'functions.php';

add_shortcode('converter', 'cc_root');

function cc_root() {
    $result = 3;
    echo "
    <div id='cc_container-main'>
        <div id='cc_container-top'>
                <label for='cc_rate-choice'>Choisir un taux de conversion : </label>
                <select name='rate-choice' id='cc_rate-choice'>
                    
                </select>
        </div>
        <input type='number' pattern='\d*' placeholder='Euros'/>
        <div id='cc_result'></div>
    </div>
    ";
}


?>

