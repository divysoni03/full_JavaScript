// Promise

// syntax -> 

var myPromise = new Promise((success, reject)=> {
    if(true) { // if something is true then 
        success();
    }
    else {
        reject();
    }
});

myPromise.then(
    function(){
        console.log("Success");
    }, 
    function() {
        console.log("reject");
    }
);