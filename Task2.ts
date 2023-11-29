import { reverse } from "dns";

function add(num1:number, num2:number){
    return num1+num2;
}
console.log(add(109,245));

function checkEvenOrOdd(value:number): string{
    if (value % 2 == 0) 
     return "Number is Even"
    else
     return "Number is Odd"
}
console.log(checkEvenOrOdd(36));
console.log(checkEvenOrOdd(35));

function calculateArea(width:number, height:number){
    return width*height;
}
console.log(calculateArea(10,7))

function reverseString(str:string):string{
   let res=str.split("");
   let res1= res.reverse();
   let res2= res1.join('').trim();
    return res2;
}
console.log(reverseString("I am Maryam"));

function convertCelsiusToFahrenheit(temp:number){
    return temp * 9 / 5 + 32;
}
console.log(convertCelsiusToFahrenheit(100));