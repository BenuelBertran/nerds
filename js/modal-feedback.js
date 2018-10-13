// Список переменных

var feedback_link = document.querySelector(".js-contacts__info-button");
var modal_feedback = document.querySelector(".js-modal-feedback");
var feedback_form = modal_feedback.querySelector(".js-modal-feedback__form");
var name_field = modal_feedback.querySelector(".js-modal-feedback__name-field");
var email_field = modal_feedback.querySelector(".js-modal-feedback__email-field");
var letter_field = modal_feedback.querySelector(".js-modal-feedback__text-field");
var name_storage = localStorage.getItem("name_field");
var email_storage = localStorage.getItem("email_field");
var feedback_close = modal_feedback.querySelector(".modal-close");

// Открытие модального окна Обратной Связи

feedback_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modal_feedback.classList.contains("js-modal-invalid")) {
        modal_feedback.classList.remove("js-modal-invalid");
    }
    modal_feedback.classList.add("js-modal-show");
    if (name_storage && email_storage) {
        letter_field.focus();
    } else {
        name_field.focus();
    }
});

// Валидация и сохранение значений обязательных полей

feedback_form.addEventListener("submit", function (evt) {
    if (!name_field.value || !email_field.value || !letter_field.value) {
        evt.preventDefault();
        modal_feedback.classList.add("js-modal-invalid");
    } else {
        localStorage.setItem("name_field", name_storage.value);
        localStorage.setItem("email_field", email_storage.value);
    }
});

//Закрытие модального окна мышкой и кнопкой Esc

feedback_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_feedback.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal_feedback.classList.contains("js-modal-show")) {
            modal_feedback.classList.remove("js-modal-show");
        }
    }
});
