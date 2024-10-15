function showOnScreen(x){
    document.getElementById('screen').innerHTML += x;
}
function calculation() { 
    var x = document.getElementById('screen').innerHTML;
    var y = eval(x);
    document.getElementById('screen').innerHTML = y;
} 