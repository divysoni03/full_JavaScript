const btn = document.querySelector(".btn");

btn.onclick = function (event){
    event.preventDefault(); // not refreshing page after adding value in input
    
    const xhttp = new XMLHttpRequest();

    var temp = false;
    xhttp.onload = function(data){
        var obj = JSON.parse(data.target.response); // makes obj from json file
        for (const key in obj) {
            if(document.querySelector('input').value == obj[key].name){

                console.log(obj[key]);

                for(var val in obj[key]) {
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    var th = document.createElement('th');

                    th.append(val);
                    td.append(obj[key][val]);

                    tr.appendChild(th);
                    tr.appendChild(td);

                    document.querySelector("table").appendChild(tr);  
                }
                           
                temp = true;
            }
        }
        if(temp){
            document.querySelector("span").innerHTML = "User exists.";
            document.querySelector("span").style.display = "block";
            setTimeout(()=>{
                document.querySelector("span").style.display = "none";
            }, 2000);
        }else{
            document.querySelector("span").innerHTML = "User Doesn't exists.";
            document.querySelector("span").style.display = "block";
            setTimeout(()=>{
                document.querySelector("span").style.display = "none";
            }, 2000);
        }
    }
    xhttp.open("GET","data.json");
    xhttp.send();
}