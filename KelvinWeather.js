const kelvin = 273;
//kelvin = celcius + 273
const celcius = kelvin - 273;
/* kelvin = celcius + 273;  */
let farenheit = celcius * (9 / 5) + 32;
/* farenheit = celcius * (9 / 5) + 32 =
(kelvin - 273) * (9 / 5) + 32;  */
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);
console.log(`The temperature is ${celcius} degrees Celcius.`);
console.log(`The temperature is ${kelvin} degrees Kelvin`);
/* Newton = Celsius * (33/100); */
let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(`The degrees of heat (gradus caloris) is ${newton} Newton.`)