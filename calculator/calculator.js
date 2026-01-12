



let addbtn = document.getElementById('add');
let subbtn = document.getElementById('subtract');
let multiplybtn = document.getElementById('multiply');
let dividebtn = document.getElementById('divide');



function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;

}

addbtn.addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(num1, num2)
    document.getElementById('calculation-result').textContent = result;

})

subbtn.addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = sub(num1, num2);
    document.getElementById('calculation-result').textContent = result;

})

dividebtn.addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;

})





