//7) Problem Name: Splice

// Use the splice method to add two game names ‘Polo’ and ‘Kabaddi’ to the same array at the third index using the splice method 
var gameArr = ["tictac", "race", "skeeze", "skating", "tag-war"];
gameArr.splice(3, 0, "polo") // polo is added a place of skating , and skating becomes at index 4

gameArr.splice(3, 0, "kabdi") // polo is added a place of polo at index 3, and polo becomes at index 4