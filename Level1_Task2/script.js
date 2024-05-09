function changeColor(){
    var button = document.querySelector('.btn');
    var currentColor = button.style.backgroundColor;
    var newColor = currentColor === 'blue' ? 'red': 'green'  ;
    button.style.backgroundColor = newColor;
}
var currentTime = new Date();
var currentHour = currentTime.getHours();
var greeting;
if (currentHour < 12){
    greeting = "good morning!";
}
else if (current < 18){
    greeting = "Good afternoon!";
}
else {
    greeting = "good evening!";
}
alert(greeting);

    function addNumbers() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var sum = num1 + num2;
        document.getElementById('result').innerText = "Result: " + sum;
    }
