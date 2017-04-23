/**
 * Created by dl on 2017/4/23.
 */
require.config({
    baseUrl: './script/',
    paths:{
        'jquery':'vendor/jquery-3.1.1',
        'util':'helper/util'
    }
});

require(['jquery'],function ($) {
    $('h1').css('background-color','#f00');
});

require(['util'],function () {
   alert('hello util ...');
});