/* Kelvin Weather Converter
This application converts the inputed degrees from Kelvin to Celsius and then from Celsius to Fahrenheit. */

// Generates a JavaScript pop-up window that prompts the user for an input and assigns the input to the variable kelvin
const kelvin = prompt('What is the Kelvin temperature today?');

// Creates the undefined variable of celsius
let celsius;

//This converts Kelvin to Celsius by subtrating 273 from kelvin and assigns it to the varable celsius
celsius = kelvin - 273;

// Equation to convert the degrees to fahrenheit, round the output with the .floor() method from the Math library, and assigns it to the respective variable
let fahrenheit = (Math.floor(celsius * (9/5) + 32));

// Uses string interpolation to print the converted degrees in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
