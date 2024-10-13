/*
                                    document (OBJECT) (html)
                                        |
      |--------------------------------------------------------------|
    Head                                                            Body
    (property 1)                                                    (property 2)
    (document)                                                      (document)
        |                                                            |       
        |                                                            |       
     |-----------|                                       |-----------------|       
    title       meta                                    h1              script
*/

// How to Access Document Object : 
// console.log(document);



// How to Access Head/Body : 
//Head
// console.log(document.head);
//Body
// console.log(document.body);


// How to Access Title  :   (unknown) (Empty String)
// console.log(document.head['title']);



// console.log(document.body.h1); // not Valid 


//1) using getElementById 
// console.log(document.getElementById('heading1'));


//2) using getElementByClassName
// console.log(document.getElementsByClassName('heading2'));
// console.log(document.getElementsByClassName('heading2')[0]);
// console.log(document.getElementsByClassName('heading2')[2]);


//3) using getElementByElementName : 
// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByTagName('h2')[1]);


//4) using querySelector : 
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('.heading2'));
// console.log(document.querySelector('#heading1'));
// console.log(document.querySelector('p.heading2'));



//5) using querySelectorAll :
// console.log(document.querySelectorAll('h1'));
// console.log(document.querySelectorAll('.heading2'));
// console.log(document.querySelectorAll('h2.heading2'));
// console.log(document.querySelectorAll('.heading2')[1]);
// console.log(document.querySelectorAll('#heading1'));




