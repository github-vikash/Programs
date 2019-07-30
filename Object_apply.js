var numbers = [5, 6, 2, 3, 7,'11'];
var max = Math.max.apply(null, numbers);


console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;
  
    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
      var submin = Math.min.apply(null, 
                                  arr.slice(i, Math.min(i+QUANTUM, len)));
      min = Math.min(submin, min);
    }
    console.log(min)
    return min;
  }
  
  var min = minOfArray([5, 6, 2, 3, 7]);

  console.log(min)