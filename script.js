/*This puts the value on screen that is submitted as x*/
function showOnScreen(x){
    document.getElementById('screen').innerHTML += x;
}
/*This carrys out the calculation inputted in to the screen*/
function calculation() { 
    let x = document.getElementById('screen').innerHTML;
    let y = Function("return " + x)();/*Function from https://www.educative.io/answers/eval-vs-function-in-javascript*/
    document.getElementById('screen').innerHTML = y;
} 
/*This clears the screen*/
function clearCalc(){
    document.getElementById('screen').innerHTML = "";
}