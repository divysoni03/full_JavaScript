let image = document.querySelector("img");

let imgLocation = [
    "one.jpg",
    "two.jpg",
    "three.jpg",
    "four.jpg",
    "five.jpg"
];

function previous() {
    let index = imgLocation.indexOf(image.attributes[0].value);
    if(index === 0) {
        image.attributes[0].value = imgLocation[imgLocation.length - 1];
    }
    else {
        image.attributes[0].value = imgLocation[index - 1];
    }
}

function next() {
    let index = imgLocation.indexOf(image.attributes[0].value);
    if(index === imgLocation.length - 1) {
        image.attributes[0].value = imgLocation[0];
    }
    else {
        image.attributes[0].value = imgLocation[index + 1];
    }
}