function findDup(array){
    let dup =[]
    let obj = {}
    for( var i = 0; i < array.length; i++){
        if(!obj[array[i]]){
            obj[array[i]] = 1;
        } else {
        dup.push(array[i])
        }
       }
return dup
    }


  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        console.log('first iteration: ', array[i],'second iteration: ', array[j]);
        if(array[j].indexOf(i) >= 0) {
          console.log(array[j].indexOf(i))
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }


  Refactored ANSWER:
   function order(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }

  An isogram is a word that has no repeating letters, consecutive or non-consecutive.
  Implement a function that determines whether a string that contains only letters is an isogram.
  Assume the empty string is an isogram. Ignore letter case.

    function isIsogram(str){
      const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

      if (strArr != null) {
            return false;
        } else {
          return true;
      }

    }

  Refactored Answer:

    function isIsogram(str){
    return !/(\w).*\1/i.test(str)
  }

  Refactored Answer:
  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }

  Refactored Answer:

  function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }

  //insertion sort
  // Big O = n^2

  function findMinAndRemove(array){
      let min = array[0];
      let minIndex = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min){
          min = array[i];
          minIndex = i;
        }
    }
      array.splice(minIndex, 1)
      return min
  }

  function insertionSort(array){
    let newMin;
    let sorted = []
    while( array != 0) {
      let newMin = findMinAndRemove(array)
      sorted.push(newMin)
    }
    return sorted;
  }



// Merge Sort Algorithm
// Big O = n log(n)
  function findMinAndRemoveSorted(array){
    return array.shift()
  }

  function merge(firstHalf, secondHalf){
      let sorted = []


      while(firstHalf.length !=0 && secondHalf.length != 0) {
        if(firstHalf[0] < secondHalf[0]) {
          let currentMin = findMinAndRemoveSorted(firstHalf)
          sorted.push(currentMin)
      } else {
          let currentMin = findMinAndRemoveSorted(secondHalf)
          sorted.push(currentMin)
      }
    }
      return sorted.concat(firstHalf).concat(secondHalf)

  }

  function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;

    if(array.length < 2){
      return array
    } else {
     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted;
  }

  // Recursion problems:

  function printString(word){
    console.log(word[0]);

    if(word.length > 1){
      let subword = word.substring(1, word.length)
      printString(subword)
  } else {
    return true;
  }
}


  function reverseString(word){

    if (word.length < 2) {
      return word;
    } else {
      return reverseString(word.substring(1)) + word[0]
    }

  }

  function isPalindrome(sentence){

    if (sentence.length < 2) {
      return true;
    } else if( sentence[sentence.length -1] === sentence[0]) {
        return isPalindrome(sentence.substring(1, sentence.length - 1))
    } else {
      return false;
    }
  }


  function addUpTo(array, index) {
    if (index) {
  	return array[index] + addUpTo(array, --index)
  }else {
  	return array[index]
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}


function findShort(s){
 const sortedArray = s.split(' ').sort(function (a, b){
      return a.length - b.length

  })
  return sortedArray[0].length

}

// //There is a bus moving in the city, and it takes and drop some people in each bus stop.
//
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//
// Take a look on the test cases.
//
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  var ppl=0;
  for(var i=0; i < busStops.length; i++){

       ppl += busStops[i][0];
      ppl -= busStops[i][1]
  }
  return ppl;
};
//reduce methods:
const number = (busStops) => busStops.reduce((accumulator, [on, off]) => accumulator + on - off, 0);

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
//
function maskify(cc) {
  // remove all numbers except for last four,
  //count the amount of numbers those are
  //add in # that many times,
  //rejoin the string
  poundArray = []
  arrayLength = cc.length - 4
   for (let i=0; i< arrayLength; i++ ) {
     var regex = /^[a-zA-Z0-9]/
      poundArray.push(cc[i].replace(regex, '#'))
    }
  return poundArray.join('') + cc.split('').slice(-4).join('')

}

// return masked string
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


// binary trees problems
function inOrder(currentNode) {
    if(currentNode.left) {
      inOrder(currentNode.left)
    }
      console.log(currentNode.data)
    if(currentNode.right) {
      inOrder(currentNode.right)
    }

}

function findOrAdd(currentNode, newNode){
  if(currentNode.data == newNode.data){
    return true
  }
  if(newNode.data < currentNode.data){
    if(currentNode.left){
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode
    }
  }

  if(newNode.data > currentNode.data){
    if(currentNode.right){
      return findOrAdd(currentNode.right, newNode)
    } else {
      return currentNode.right = newNode
    }
  }
}

function max(currentNode) {
  if(currentNode.right){
    return max(currentNode.right)
  } else {
    return currentNode
  }
}

function min(currentNode){
  if(currentNode.left){
    return min(currentNode.left)
  } else {
    return currentNode
  }
}

function validParentheses(parens){
   var length = parens.length / 2;

  for (var i = 0; i <= length; ++i) {
    parens = parens.replace('()', '');
  }

  return parens == '';
  // if in dividing parenthesis string by two there are '()' a valid parenthesis string,
  //then replace it with '' so that if at the end the string is == '' then the response will be true.
  //if the response has a lagging '(' that means it does not == '' and thus the string is false.
}
