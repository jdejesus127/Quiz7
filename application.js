function processForm (){
    var number = document.getElementById("number");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    
    var output = document.getElementById("output")
    output.innerHTML = "";
    
        for(var i = number.value; i<number2.value; i++){
        if( i % number3.value == 0 ) {
        output.innerHTML += "<div>" + i + "</div>";
        }
    }

}
