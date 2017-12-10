﻿$(document).ready(function () {
});

function pageOneNextClick() {
    $('#page2').removeClass('hide');
    $('#page1').removeClass('hide').addClass('hide');
    $('#page3').removeClass('hide').addClass('hide');
    $('html, body').animate({
        scrollTop: $('#page2').offset().top - 200
    }, 2000);
}

function pageTwoPreviousClick() {
    $('#page1').removeClass('hide');
    $('#page2').removeClass('hide').addClass('hide');
    $('#page3').removeClass('hide').addClass('hide');
    $('html, body').animate({
        scrollTop: $('#page1').offset().top
    }, 2000);
}

function pageTwoNextClick() {
    $('#page3').removeClass('hide');
    $('#page1').removeClass('hide').addClass('hide');
    $('#page2').removeClass('hide').addClass('hide');
    $('html, body').animate({
        scrollTop: $('#page3').offset().top - 200
    }, 2000);
}

function pageThreePreviousClick() {
    $('#page2').removeClass('hide');
    $('#page1').removeClass('hide').addClass('hide');
    $('#page3').removeClass('hide').addClass('hide');
    $('html, body').animate({
        scrollTop: $('#page2').offset().top - 200
    }, 2000);
}