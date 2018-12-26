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

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);


function checkEvenOdd(numbers){
	 let arrayOfNumbers = numbers.split(' ')
    let numArray = arrayOfNumbers.filter(num => num.trim() != '')
	let integerArr = numArray.map(num => parseInt(num))

	let evenCount =0
	let oddCount =0
	for (let i=0; i< integerArr.length; i++){
		if (integerArr[i]%2 ==0){
			evenCount += 1
        } else if (integerArr[i]%2 ===1){
			oddCount += 1
        }
    }
	if(evenCount>oddCount){
		return 'even'
    } else {
		return 'odd'
    }
}

function iqTest(numbers){
    let arrayOfNumbers = numbers.split(' ')
    let numArray = arrayOfNumbers.filter(num => num.trim() != '')
	let integerArr = numArray.map(num => parseInt(num))


  if (checkEvenOdd(numbers) === 'even'){
	  return numIndex= integerArr.findIndex(function(num){
		  return !(num%2 ===0)
      }) + 1
  } else if (checkEvenOdd(numbers) === 'odd'){
    return numIndex = integerArr.findIndex(function(num){
      return !(num%2 === 1)
    }) + 1

  }
}

//alternate answers

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});

  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

// Example

console.log(dupl("abcde")); //  -> 0 # no characters repeats more than once
console.log(dupl("aabbcde")); //  -> 2 # 'a' and 'b'
console.log(dupl("aabbcdeB")); //  -> 2 # 'a' and 'b'
console.log(dupl("indivisibility")); //  -> 1 # 'i'
console.log(dupl("Indivisibilities")); //  -> 2 # 'i' and 's'
console.log(dupl("aa11")); //  -> 2 # 'a' and '1'

function dupl(str) {
  str = str.toLowerCase();
 var dups = [];
 for (var i=0; i<str.length; i++) {
   if (str.indexOf(str[i])!== i) {
     if (!dups.includes(str[i])) {
       dups.push(str[i]);

     }
   }
 }
 return dups.length;
}

// Other Solutions

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

function duplicateCount(text) {
  var dup = [];
  text.toLowerCase().split('').forEach(function(v, i, arr) {if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);});
  return dup.length;
}


function duplicateCount(str){
	let dups = []
	let newStr = str.toLowerCase().split('').sort()
	for (var i=0; i <newStr.length; i++){
		if (newStr[i] === newStr[i+1]){
			if(!dups.includes(newStr[i])){
				dups.push(newStr[i])
        }
    }
   }
	return dups.length
}

// duplicateCount('Indivisibility')
// 1
