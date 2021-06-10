/*7) Problem Name: MapMethod
A-- Suppose you’re given this array: let agesArray = [12,45,56,4]. 
Use map method to print all of the values and their indices.
After that use map method to make a new array from the same array by multiplying each age value by 10.
B -- Suppose you’re given an array of objects:
let usersData = [
{
name: ‘Saeed’,

lastName: ‘Ahmad’,

school: ‘UoT’,

profession: ‘engineer’,

},

{

name: ‘Ali’,

lastName: ’Khan’,

school: ‘TUM’,

profession: ‘researcher’,

}

];
Use map method to print each value in a table. */

let agesArray = [12,45,56,4];

agesArray.map((currElement, index) => {
  console.log( index);
  console.log( currElement);
});

let b =agesArray.map(test);

console.log(b);

function test(x){
    return x*10;
    
}
