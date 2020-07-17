const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const btn = document.querySelector('button');
const output = document.querySelector('.output');


const getBmi = function() {
    const bmi = weight.value / (height.value / 100 * height.value / 100);
    showCompartment(bmi.toFixed(2));

}
const showCompartment = function(getBmi) {
    const text = `Twoje BMI wynosi: ${getBmi},`;
    if (getBmi < 16) {
        output.textContent = `${text} oznacza to wygłodzenie`;
    } else if (getBmi < 17) {
        output.textContent = `${text} oznacza to wychudzenie`;
    } else if (getBmi < 18.5) {
        output.textContent = `${text} oznacza to niedwagę`;
    } else if (getBmi < 25) {
        output.textContent = `${text} wartość prawidłowa`;
    } else if (getBmi < 30) {
        output.textContent = `${text} oznacza to nadwagę`;
    } else if (getBmi < 35) {
        output.textContent = `${text} oznacza to I stopień otyłości`;
    } else if (getBmi < 40) {
        output.textContent = `${text} oznacza to II stopień otyłości`;
    } else {
        output.textContent = `${text} oznacza to III stopień otyłości`;
    }

}
btn.addEventListener('click', getBmi)