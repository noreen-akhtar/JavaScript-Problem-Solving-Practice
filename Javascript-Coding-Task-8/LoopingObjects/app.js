// 3) Problem Name: LoopingObjects

// Loop values of object’s properties by using for...in loop and print them.

let cities={
    first: 'karachi',
    second: 'lahore',
    third: 'Islamabad',
    fourth : 'Quetta'
};

for (let  property in cities) {
    console.log(`${property}: ${cities[property]}`);
  }