// KEYBOARD EVENTS

var body = document.body;
// innerHTML,InnerText,textContent :
var div = document.querySelector('div').innerText; //Zafar   div[0]
var counter = 0;

// onkeydown : 

// body.onkeydown = function (event){    // e
//     // console.log(event.key);
//     console.log(event["key"]);

// }


// onkeyup : 
// body.onkeyup = function (event){    // e
//     // console.log(event.key);
//     console.log(event["key"]);

// }


// onkeypress : 
// body.onkeypress = function (event){    // e
//     // console.log(event.key);
//     console.log(event["key"]);

// }



// body.onkeyup = function (){
//     console.log("Up");
// }
// body.onkeydown = function (){
//     console.log("Down");
// }
// body.onkeypress = function (){
//     console.log("Press");
// }




//Main Screen
// body.onkeydown = function(event){
//     console.log(event.key);   
//     div.innerHTML += event.key; 
// }


//Console Screen :
body.onkeydown = function(event){
    if(counter==div.length)
        return ;
    if(event.key==div[counter]){
        console.log(event.key,div[counter]);
        counter++; 
    }
}


//////////////////////////////////////
// btn : ON :  click   Bulb  On  btn : OFF > Bulb off 