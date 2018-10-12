// Список переменных

var feedback_link = document.querySelector(".contacts-button");
var modal_feedback = document.querySelector(".modal-feedback");
var feedback_form = modal_feedback.querySelector(".modal-feedback form");
var name_field = modal_feedback.querySelector("[name=name]");
var email_field = modal_feedback.querySelector("[name=email]");
var letter_field = modal_feedback.querySelector("[name=letter-text]");
var name_storage = localStorage.getItem("name_field");
var email_storage = localStorage.getItem("email_field");
var feedback_close = modal_feedback.querySelector(".modal-close");

// Открытие модального окна Обратной Связи

feedback_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_feedback.classList.add("modal-show");
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
        modal_feedback.classList.add("modal-invalid");
    } else {
        localStorage.setItem("name_field", name_storage.value);
        localStorage.setItem("email_field", email_storage.value);
    }
});

//Закрытие модального окна мышкой и кнопкой Esc

feedback_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modal_feedback.classList.contains("modal-invalid")) {
        modal_feedback.classList.remove("modal-invalid");
        modal_feedback.classList.remove("modal-show");
    } else {
        modal_feedback.classList.remove("modal-show");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal_feedback.classList.contains("modal-invalid")) {
            modal_feedback.classList.remove("modal-invalid");
            modal_feedback.classList.remove("modal-show");
        }
        if (modal_feedback.classList.contains("modal-show")) {
            modal_feedback.classList.remove("modal-show");
        }
    }
});
