/*This puts the value on screen that is submitted as x*/
function showOnScreen(x){
    document.getElementById('screen').innerHTML += x;
}
/*This carrys out the calculation inputted in to the screen*/
function calculation() { 
    var x = document.getElementById('screen').innerHTML;
    var y = eval(x);/*eval from https://www.shecodes.io/athena/169245-javascript-function-to-evaluate-strings*/
    document.getElementById('screen').innerHTML = y;
} 