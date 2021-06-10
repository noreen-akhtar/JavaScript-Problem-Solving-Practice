// 5) Problem Name: StringMethod

// Use .length property to print length of a string cityName = ‘Tokyo’
// Find the index of ‘o’ character in the given string using indexOf method
// Use search method to locate ‘o’ in the given string and notice the difference between indexOf and search methods

let cityName='Tokyo';
let x = cityName.length
let y = cityName.indexOf('o',1);
console.log(y);

let  n = cityName.search("o");
  console.log(n);