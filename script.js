const emailInput = document.querySelector("input[type=email]");

const targetElement = document.querySelector(".wrapper1");

const sub_btn = document.querySelector(".wrapper1 form input[type=submit]")

const dismiss_btn = document.querySelector(".wrapper2 button")

let isValid = false

sub_btn.addEventListener("click", e => {
    e.preventDefault()
    if (isValid) {
        // Email input is valid, add the class
        targetElement.classList.add('slide-to-left');
    } else {
        // Email input is invalid, remove the class
        targetElement.classList.remove('slide-to-left');
    }
})

dismiss_btn.addEventListener("click", e => {
    targetElement.classList.remove('slide-to-left');
})

emailInput.addEventListener("input", e => {
    isValid = emailCheck(e.target.value)
})

function emailCheck(text) {
    return text.includes("@") ? true : false
}