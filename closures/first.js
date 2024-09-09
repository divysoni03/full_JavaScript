/*
// Basic Closure
function walk() {
    var dist = '1750 feet';

    function fly() {
        console.log('At ' + dist);
    }

    return fly;
}

var flyFunc = walk();

flyFunc();
*/
/*
// Creating private variable
function Counter() {
    let count = 0;  //private variable

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },

        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },

        getCount: function() {
            return count;
        }
    };
}

const counter = Counter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());
*/

// Function Factories
function Multiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = Multiplier(2);
const triple = Multiplier(3);
const tenx = Multiplier(10);

console.log(double(5));
console.log(triple(5));
console.log(Multiplier(4)(2));
console.log(tenx(10));