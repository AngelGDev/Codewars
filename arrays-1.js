// My head is at the wrong end!
function fixTheMeerkat(arr) {
    return arr.reverse()
   }

//    Sum Mixed Array
function sumMix(x){
    return x.map(x=>Number(x)).reduce((acc, value)=> acc + value)
  }

//   Swap Values
function swapValues(args) { 
    //     var args = Array.prototype.slice.call(arguments); added parameter args 
        var temp = args[0];
        args[0] = args[1];
        args[1] = temp;
    }

//   pick a set of first elements
function first(arr, n) {
    if(n==0){
      return []
    }else if(n>1){
      return arr.slice(0, n)
    }else{
      return arr.slice(0,1)
    }
    
  }

//   Abbreviate a Two Word Name
function abbrevName(name){

    return name.split(' ').map(name=>name.charAt(0).toUpperCase()).join('.')
  
  }