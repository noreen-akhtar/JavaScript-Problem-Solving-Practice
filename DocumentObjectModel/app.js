function sendMessage(){
    // console.log(document.querySelector('input'))
        // #1 Access input HTML element --querySelector
        let inputElement = document.querySelector('input');
        console.log(inputElement);


// #2 Get value of HTML input element
// how to get value of attribute of an HTML element

let inputValue = inputElement.value;
console.log(inputValue);

// #3 Access H1
let headingElement = document.querySelector('h1 > span')
console.log(headingElement);

// alert('The message has been sent on the given number' )

// change content of h1 element
headingElement.innerHTML = inputValue;
// let attrValue = document.querySelector('input').type;
// console.log(attrValue);

}