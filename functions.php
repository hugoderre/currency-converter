<?php

function wpdocs_currency_converter_scripts() {
    wp_enqueue_style( 'style',  plugin_dir_url( __FILE__ ) . '/style.css', false );
    wp_enqueue_script( 'script',  plugin_dir_url( __FILE__ ) . '/main.js', false );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_currency_converter_scripts' );