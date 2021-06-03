// declaring function with let

function twoVariables(){

    let a = 23;
    let b = 27;

}

function addVariable(){

    let c = a + b ; 

    console.log(c);
}


console.log (addVariable());

// answer checked error given , program not run.

// global variable by using var
var a1 = 23 , b1 = 27;

function globalVar(){
    var c1 = a1 + b1 ; 
    console.log(c1);
}

console.log( globalVar());

// answer checked no error given , by using var program easily run.


// global variable by using var
let a2 = 23 , b2 = 27;

function globalLet(){
    let c2 = a2 + b2 ; 
    console.log(c2);
}

console.log( globalLet());

// answer checked  undefined error given , by using let program in global.

//block 1
{
    var cash = 2000;
}

// block 2
{
    cash = 2500;
}

console.log(cash);

// answer checked no error given , program easily run.