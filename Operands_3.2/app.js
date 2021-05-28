var x = 20 ;
//  2. What will be the output of following:
// var a = 5, b = 10, c = "5";
// var x = a; a == c; a === c;
// a == x; a != b; a > b; a < b;a >= b; a <= b; a >= c; a <= c; -->


var a =5, b=10, c = 5;
var x = a; a == c; a === c;

x=a;
document.write(" x+=y is ",x );
document.write("<br />");

a==c;
document.write("a-=b is ", a);
document.write("<br />");

a === c;
document.write("a == c is ", a);
document.write("<br />");

a == x; 
document.write("a == b is ", a);
document.write("<br />");
a != b; 
document.write("a!= b -= y is ", a);
document.write("<br />");
a > b; 
document.write("a > b is ", a);
document.write("<br />");
a < b;
document.write("a < b is ", a);
document.write("<br />");

a >= b; 
document.write("a >= b is ", a);
document.write("<br />");

a <= b; 
document.write("a <=b is ", a);
document.write("<br />");

a >= c; 
document.write("a >=c is ", a);
document.write("<br />");

a <= c;
document.write("a <= c is ", a);
document.write("<br />");