// 1) Problem Name: ForLoops

// A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. 
// Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’
// B --- Write a forEach loop and attempt the same problem as above.
// C ---Write a for..of loop and attempt the same problem as above.

let games=['vollyball', 'cricket','football', 'badminton', 'hockey'];
for (let i=0; i<=games.length ;i++){
    if (games[i]  ==  'cricket'){
     console.log('cricket exists');
    }else 
    console.log('cricket does not exists');
 } 

games.forEach(function(element){
   console.log(element);
}); 

for (const [i,x ] of ['vollyball', 'cricket','football', 'vasketball', 'hockey'].entries()) {
    console.log(i,x);
  }