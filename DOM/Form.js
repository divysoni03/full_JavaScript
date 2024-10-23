let table = document.querySelector("table");
// let btn = document.querySelector(".submitBtn");
let index = 1;

function submitIt(event) {
    event.preventDefault();

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    td1.append(index++);
    td2.append(name);
    td3.append(email);
    td4.append(message);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#message').value = "";
}

btn.addEventListener("click", submitIt);