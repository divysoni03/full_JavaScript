// -> Problem 4: Convert Celsius to Fahrenheit
// Statement: Write a named function 'celsiusToFahrenheit' that takes a temperature in Celsius and converts it to Fahrenheit. Also, write an expression function 'fahrenheitToCelsius' that takes a temperature in Fahrenheit and converts it to Celsius.

function celsiusToFahrenheit(c) {
    return (c*1.8)+32;
}

function fahrenheitToCelsius(f) {
    return (f-32)*0.55;
}

console.log(celsiusToFahrenheit(35));
console.log(fahrenheitToCelsius(32));