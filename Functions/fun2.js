// Arrow Function

// const greet = () => {
//     console.log("Hello, World!");
//     return;
// }
// greet();

// var add = (a, b) => a + b;
// var add = (a, b) => a + b
// var add = (a, b) => return (a+b);
// console.log(add(2, 3));

// var product = (n1, n2) => console.log(`${n1} * ${n2} = ${n1*n2}`)
// product(100, 3)

// var prettyprint = msg => console.log(`💫${msg}✨`)
// prettyprint("Hello, World!")

//Anonymous Function

// setTimeout(function() {
//     console.log("This is 1 sec");
// }, 1000)

// console.log('Fetching Tomorrow\'s Weather');

// var data = +prompt("data?");

// setTimeout(() => {
//     if(data === 1) {
//         alert("Data fetched successfully!");
//     } else {
//         alert("failed to fetch data!");
//     }
// }, 1000);

//IIFE Function (Immediately Invoked Function Expression)

// (function() {
//     console.log('This is an IIFE');
// })();

// var square = (function(num) {
//     return num*num;
// })(+prompt("Enter any number: "));

// console.log(square);

// a = 2;

// (function(num) {
//         console.log(num**3);
//     })(a);
    
//generator Function

// function* fn() {
//     yield 'First';
//     yield 'Second';
//     yield 'Third';
// }

// var gen = fn();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for (const i of gen) { //we can't use for in because there are no properties.
//     console.log(i);
// }

// function* fn1() {
//     const f = yield 'First';
//     console.log(f);
//     const s = yield 'Second';
//     console.log(s);
//     const t = yield 'Third';
//     console.log(t);
// }

// var gen = fn1();

// console.log(gen.next());
// console.log(gen.next("Hello, World!")); //pass back the parameter to the previous yield.


// function* fn2() {
//     yield 1;
//     yield 2;
//     yield 'three';
//     yield 4;
//     yield 5;
//     return 'Done';
// }

// var gen = fn2();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// function All() {
//     var n1 = +prompt("Enter n1: ");
//     var n2 = +prompt("Enter n2: ");

//     return n1+n2;
// }

// function* fn2() {
//     yield 1;
//     yield 2;
//     yield All();
//     yield 4;
//     yield 5;
//     return 'Done';
// }

// var gen = fn2();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());

// Generator Delegation

// function* subGenerator() {
//     yield 'Sub 1';
//     yield 'Sub 2';
// }

// function* mainGenerator() {
//     yield 'Main 1';
//     yield* subGenerator();
//     yield 'Main 2';
// }

// const gen = mainGenerator();
// for (const value of gen) {
//     console.log(value);
// }


function* infiniteSequence() {
    let i = 0;
    while(true) {
        yield i++;
    }
}

const seq = infiniteSequence();

console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);

// for (const i of seq) {
//     console.log(i);
// }
