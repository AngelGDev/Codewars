// The Feast of Many Beasts
function feast(beast, dish) {
    if(beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length -1) == dish.charAt(dish.length -1)){
      return true
    }else{
      return false
    }
  }
//   Fake Binary
function fakeBin(x){
    return x.split('').map(num => num >= 5? 1 : 0).join('')
  }
//   A Strange Trip to the Market
function isLockNessMonster(s) {
    if(s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')){
      return true
    }else{
      return false
    }
  }
//   Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
//   Name Shuffler
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }