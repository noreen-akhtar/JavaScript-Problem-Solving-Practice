// Create a numeric, string, and boolean constants and print them.


// Create a numeric
const int = 100;
const float = 100.5;
const hex = 0xfff;
const exponential = 2.56e3;
const octal = 030;
const string = "noreenakhtar922";

const YES = true;
const NO = false;

document.write("this is integer:", int);
console.log("this is integer:", int);
document.write("<br />");

console.log("this is float:", float);
document.write("this is Float:", float);
document.write("<br />");

console.log("this is hex:", hex);
document.write("this is Hex:", hex);
document.write("<br />");

console.log("this is power:", exponential);
document.write("this is Exponential:", exponential);
document.write("<br />");

document.write("this is octal:", octal);
console.log("this is octal:", octal);
document.write("<br />");

document.write("this is string constant:", string);
console.log("this is string:", string);
document.write("<br />");

if(YES)
{
    alert("This code block will be executed");
    console.log("this is boolean:", YES);
}

if(NO)
{
    alert("This code block will not be executed");
    console.log("this is boolean:", NO);
}