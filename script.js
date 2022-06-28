function allClear() {
    document.getElementById("result").value = "";
}

function Delete(value){
    document.getElementById("result").value =  document.getElementById("result").value.slice(0,-1) ;
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
     a = document.getElementById("result").value;
     b = eval(a);
    document.getElementById("result").value = b;
    }