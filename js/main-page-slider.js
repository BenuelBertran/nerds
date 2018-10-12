// Список переменных

var first_control = document.querySelector(".control-1");
var second_control = document.querySelector(".control-2");
var third_control = document.querySelector(".control-3");
var first_slide = document.querySelector(".slide-first");
var second_slide = document.querySelector(".slide-second");
var third_slide = document.querySelector(".slide-third");

// Смена слайдеров при переключении контролов

first_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (first_slide.classList.contains("hidden")) {
        first_slide.classList.remove("hidden");
    }
    if (!second_slide.classList.contains("hidden")) {
        second_slide.classList.add("hidden");
    }
    if (!third_slide.classList.contains("hidden")) {
        third_slide.classList.add("hidden");
    }
    
    // смена активного контрола
    
    if (!first_control.classList.contains("current")) {
        first_control.classList.add("current");
    }
    if (second_control.classList.contains("current")) {
        second_control.classList.remove("current");
    }
    if (third_control.classList.contains("current")) {
        third_control.classList.remove("current");
    }
});

second_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (second_slide.classList.contains("hidden")) {
        second_slide.classList.remove("hidden");
    }
    if (!first_slide.classList.contains("hidden")) {
        first_slide.classList.add("hidden");
    }
    if (!third_slide.classList.contains("hidden")) {
        third_slide.classList.add("hidden");
    }
    
    // смена активного контрола
    
    if (!second_control.classList.contains("current")) {
        second_control.classList.add("current");
    }
    if (first_control.classList.contains("current")) {
        first_control.classList.remove("current");
    }
    if (third_control.classList.contains("current")) {
        third_control.classList.remove("current");
    }
});

third_control.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (third_slide.classList.contains("hidden")) {
        third_slide.classList.remove("hidden");
    }
    if (!first_slide.classList.contains("hidden")) {
        first_slide.classList.add("hidden");
    }
    if (!second_slide.classList.contains("hidden")) {
        second_slide.classList.add("hidden");
    }
    
    // смена активного контрола
    
    if (!third_control.classList.contains("current")) {
        third_control.classList.add("current");
    }
    if (first_control.classList.contains("current")) {
        first_control.classList.remove("current");
    }
    if (second_control.classList.contains("current")) {
        second_control.classList.remove("current");
    }
});

