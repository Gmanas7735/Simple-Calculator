// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;


}
function AllClear(input) {
    display.value = "";

}
function clear(input) {
    display.value = display.value.toString().slice(0, -1);

}
function calculate(input) {
    try {
        display.value = eval(display.value);

    }
    catch (error) {
        display.value = "Error";
    }

}