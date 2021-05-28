var a = true;
var b = false;
var x = 33;
var y = 10;
var linebreak = "<br />";

document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);

document.write("Value of x, (x = y): ");
result = (x = y);
document.write(result);
document.write(linebreak);

document.write("Value of x, (x += y): ");
result = (x += y);
document.write(result);
document.write(linebreak);

document.write("Value of x, (x -= y): ");
result = (x -= y);
document.write(result);
document.write(linebreak);

document.write("Value of x, (x *= y): ");
result = (x *= y);
document.write(result);
document.write(linebreak);

document.write("Value of x, (x /= y): ");
result = (x /= y);
document.write(result);
document.write(linebreak);

document.write("Value of x, (x %= y): ");
result = (x %= y);
document.write(result);
document.write(linebreak);