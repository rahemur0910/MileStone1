function celsius_to_fahrenheit(celsius)
{
    let fahrenheit = (celsius * 9/5)+32;
    return fahrenheit;
}

let celsiusTemp = 32;
let fahrenheit_temp = celsius_to_fahrenheit(celsiusTemp)
console.log(fahrenheit_temp)