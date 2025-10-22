const button = document.querySelectorAll("button");
const inputField = document.querySelector(".result");
const sound = document.querySelector(".sound")

function playSound() {
    sound.currentTime = 0;
    sound.play();
}
function clearResult() {
    inputField.value = "";
    playSound();
}
function calculateResult() {
    inputField.value = eval(inputField.value);
    playSound();
}
function getValue(buttonValue) {
    inputField.value += buttonValue;
    playSound();
}



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click" , () => {
        const buttonValue = button[i].textContent;
        if (buttonValue == "Clear" ) {
            clearResult();
        } else if (buttonValue == "=" ) {
            calculateResult();
        } else {
            getValue(buttonValue);
        }
    });
}







