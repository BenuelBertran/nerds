/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

// Список переменных

var first_control = document.querySelector(".js-controls__first");
var second_control = document.querySelector(".js-controls__second");
var third_control = document.querySelector(".js-controls__third");
var first_slide = document.querySelector(".js-slider__first");
var second_slide = document.querySelector(".js-slider__second");
var third_slide = document.querySelector(".js-slider__third");

// Смена слайдов при переключении контролов

first_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    first_slide.classList.remove("js-slider-hidden"); 
    second_slide.classList.add("js-slider-hidden");
    third_slide.classList.add("js-slider-hidden");

    first_control.classList.add("controls__item--current");
    second_control.classList.remove("controls__item--current");
    third_control.classList.remove("controls__item--current");
});

second_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    second_slide.classList.remove("js-slider-hidden"); 
    first_slide.classList.add("js-slider-hidden");
    third_slide.classList.add("js-slider-hidden");

    second_control.classList.add("controls__item--current");
    first_control.classList.remove("controls__item--current");
    third_control.classList.remove("controls__item--current");
});

third_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    third_slide.classList.remove("js-slider-hidden"); 
    first_slide.classList.add("js-slider-hidden");
    second_slide.classList.add("js-slider-hidden");

    third_control.classList.add("controls__item--current");
    first_control.classList.remove("controls__item--current");
    second_control.classList.remove("controls__item--current");
});
