// --> NAVIGATION API AND GEO COORDINATES :

// const btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     if(navigator.geolocation){
//         // myFunction();
//         navigator.geolocation.getCurrentPosition(myFunction);
//     }else{
//         console.log("wert");
//     }
// });


// function myFunction(position){
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// }


// --> HISTORY WEB API - TO MOVE BETWEEN PAGES

const btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    console.log("going back");
    // history.back(); // to go previous page

    // history.forward(); // to go ahead next page

    // history.go(number); // to go back and forward (-number for going back and positive number for going forward)
});