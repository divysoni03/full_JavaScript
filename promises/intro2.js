const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var obj1 = {
        msg : "Promise Successfully Execute!!!",
        status : 200
    };
    var error = {
        msg : "Somthing Wrong !!!"
    }

    var myPromise = new Promise(function(Success,reject){
        if(obj1.status == 200){
            Success(obj1.msg);
        }else{
            reject(error.msg);
        }
    });
    myPromise.then((data)=>{
        console.log(data);
    },(err)=>{
        console.log(err);
    });

});


// task 2 -> take belows info from user and print status and verify
// msg : 
// code : null 