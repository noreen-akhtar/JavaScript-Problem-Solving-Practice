// 5. Problem Name: IfElseCondition

//  Write the if else statement by using the condition that if student has gained marks more than
//  or equal to 50 then student is pass else student is fail.

var msg = 'enter the marks of student:';
//printing message for user input
var x = prompt(msg);
if(x>=50){
    document.write('Pass');
}
else if(x<49){
    document.write('Fail');
}