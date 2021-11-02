const form = document.querySelector("#form");
const btn = document.querySelector(".btn");
const err_msg = document.querySelector(".error-msg");
const input_wrapper = document.querySelector(".input-wrapper");
const input_email = document.querySelector(".input-email");

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input_email.value === "" || !input_email.value.match(pattern)){
        input_wrapper.classList.add('active');
        input_email.placeholder = "email@example.com";
        err_msg.classList.add("show-error");
    } else {
        input_email.value = "";
        btn.disabled = true;
        input_wrapper.classList.remove('active');
        err_msg.classList.remove("show-error");
        btn.style.opacity = 0.5;
        input_email.disabled = true;
        input_email.backgroundColor = "white";
        input_email.placeholder = "Thank you! Email sent!";
    }
})