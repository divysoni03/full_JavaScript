let input = document.querySelector("input");
let buttons = document.querySelector(".container");
let allOP = ['/','*','+','-','%'];


buttons.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        if(event.target.innerHTML == "AC") {
            input.value = "";
        }
        else if(event.target.innerHTML == "DEL") {
            // let arr = input.value.split('');
            // arr.pop();
            // input.value = arr.join('');

            input.value = input.value.substring(0, input.value.length - 1);
        }
        else if(event.target.innerHTML == "=") {
            let num1 = '';
            let num2 = '';
            let op = '';

            for(let i=0; i < input.value.split('').length ; i++) {

                if( allOP.includes(input.value.split('')[i] )) {
                    op = input.value.split('')[i];
                    num2 = input.value.split('').slice(i+1).join('');
                    break;
                }
                num1+=input.value.split('')[i]; 
            }

            switch(op){
                case '+' : 
                    input.value = (+num1)+(+num2);
                    break;
                case '-' :
                    input.value = (+num1)-(+num2);
                    break;
                case '*' :
                    input.value = (+num1)*(+num2);
                    break;
                case '/' :
                    input.value = (+num1)/(+num2);
                    break;
                case '%' :
                    input.value = (+num1)%(+num2);
                    break;
            }
        }
        else {
            input.value += event.target.innerHTML;
        }
    }
});