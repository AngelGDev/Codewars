// Odd or Even?
function oddOrEven(array) {
    if(array.length < 1){
      return 'even'
    } else{
      return array.reduce((acc, num) => acc + num) % 2 == 0? 'even' : 'odd'
    }
    
  }

//   Counting sheep...
function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(val => val == true ? count++ : count = count)
    return count
  }

//   Convert number to reversed array of digits

function digitize(n) {
    return (''+n).split('').reverse().map(Number)
  }

//   Maximum Product 
function adjacentElementsProduct(array) {
    let max = -Infinity
   for(let i = 0; i<array.length; i++){
     if(array[i] * array[i+1] > max){
       max = array[i] * array[i+1]
     }
   }
   return max
 }

//  Is there a vowel in there?
function isVow(arr){
    let a = 97,
        e = 101,
        i = 105,
        o = 111,
        u = 117
    return arr.map(val => {
      if(val == a){
        return 'a'
      }else if(val == e){
        return 'e'
      }else if(val == i){
        return 'i'
      }else if(val == o){
        return 'o'
      }else if(val == u){
        return 'u'
      }else{
        return val
      }
    })
  }