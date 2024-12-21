const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    if(navigator.geolocation){
        // myFunction();
        navigator.geolocation.getCurrentPosition(myFunction);
    }else{
        console.log("wert");
    }
});


function myFunction(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}