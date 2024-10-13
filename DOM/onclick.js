var body = document.body;
// console.log(Math.random());//0-1 
// console.log(Math.random()*10);//0-10(10 doesn't Include) 
// console.log(Math.random()*11);//0-11(11 doesn't Include) 
// console.log((Math.random()*10)+1);//1-10

// rgb 0-255
// console.log(Math.random()*256);

//How to Convert 
// 1) 
// console.log(parseInt(Math.random()*256));
// 2)
// console.log(Math.floor(Math.random()*256));

function changeColor(){
//    body.style.backgroundColor = "red";
        // body.style.backgroundColor = "rgb(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256))";
        body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

