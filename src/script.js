document.addEventListener("DOMContentLoaded", function () {
    console.log('Document is loaded')
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentvalue = "";

    function Eresult(){
        const convertedValue= currentvalue
        .replace("%","*0.01")
        .replace("÷","/")
        .replace("sin",'Math.sin')
        .replace("cos","Math.cos")
        .replace("ln","Math.log")
        .replace("π","Math.PI")
        .replace("log","Math.log10")
        .replace("e","Math.E")
        .replace("tan","Math.tan")
        .replace("√","Math.sqrt");
        const result = eval(convertedValue);
        currentvalue= result.toString();
        display.value = currentvalue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', function () {
            const value = button.innerText;
            try{
                if (value == "AC") {
                    currentvalue="";
                    display.value=currentvalue;
                }
                else if(value == "="){
                    Eresult();
                }
                else {
                    
                    currentvalue += value;
                    display.value = currentvalue;
                }
            }
           catch(error){
            console.error(error);
            currentvalue="ERROR";
            display.value=currentvalue;
           }
            
        })
    }
});