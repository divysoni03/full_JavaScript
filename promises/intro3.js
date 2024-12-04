const btn = document.querySelector("button");

btn.onclick = function (){
    var obj1 = {};
    obj1.msg  = prompt("Enter Your Msg : ");
    obj1.status  = +prompt("Enter Status : ");
    console.log(obj1);
    var obj2 = {
        msg : "Somthing Wrong !!!!"
    }

    var myPromise = new Promise(function(success,reject){
        if(obj1.status == 200){
            success(obj1.msg);
        }else{
            reject(obj2.msg);
        }
    });

    myPromise.then((data)=>{
        console.log(data);
    },(err)=>{
        console.log(err);
    });
}