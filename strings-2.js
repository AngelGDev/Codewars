// Convert a string to an array
function stringToArray(string){

    return string.split(' ')
  
}

// Template Strings
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}

// Remove First and Last Character
function removeChar(str){
 
    return str.substring(1, str.length-1)
  
};

// Alan Partridge II - Apple Turnover
function apple(x){
    return x * x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

// Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
}