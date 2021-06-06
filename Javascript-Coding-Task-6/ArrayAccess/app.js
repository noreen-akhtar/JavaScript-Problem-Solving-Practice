// 3) Problem Name: ArrayAccess

// Print the first and last member of the same array
let x=[3, 2, 3, 4, 5]; 
 function accessFirstLast(){
    let first = x[0]; 
    let last = x[x.length-1]; 
    console.log("First element is "+ first); 
    console.log("<br> Last element is "+ last); 
 }
 accessFirstLast();