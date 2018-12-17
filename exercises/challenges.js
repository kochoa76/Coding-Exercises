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

<<<<<<< HEAD

function findShort(s){
 const sortedArray = s.split(' ').sort(function (a, b){
      return a.length - b.length

  })
  return sortedArray[0].length

}
=======
let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let lastNode = {name: 'charlie', next: null}
let linkedList = 'whana'
let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}

  function getName(node) {
      return node.name
  }

  function headNode(linkedList, collection) {
    return collection[linkedList]
  }

  function next(node, collection) {
    let nextNode = node.next

    return collection[`${nextNode}`]
  }

  function nodeAt(index, linkedList, collection) {
    let currentNode = collection[linkedList]
      for(let i=0; i < index; i++) {
        currentNode = next(currentNode, collection)
      }
    return currentNode
  }

  function addressAt(index, linkedList, collection) {
      if(index === 0) {
        return linkedList
      } else {
        return nodeAt(index-1, linkedList, collection).next
      }

  }

  function indexAt(node, collection, linkedList) {
        let currentIndex =0;
        let currentNode = headNode(linkedList, collection)

        while (currentNode != node) {
            currentIndex++
            currentNode = next(currentNode, collection)
        }
        return currentIndex++
  }

  function insertNodeAt(index, newAddress, linkedList, collection) {
        let previousNode = nodeAt(index -1 , linkedList, collection)
        let subsequentNode = nodeAt(index, linkedList, collection)

        let previousNodeIdx = indexAt(previousNode, collection, linkedList)
        let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)

        let previousNodeAddress= addressAt(previousNodeIdx, linkedList, collection)
        let subsequentNodeAddress = addressAt(subsequentNodeIdx, linkedList, collection)
        previousNode.next = newAddress
        let newNode = collection[newAddress]
        newNode.next = subsequentNodeAddress
  }

  function deleteNodeAt(index, linkedList, collection) {
      let previousNode;
      let currentNode = headNode(linkedList, collection)
      for( let i =0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection)
      }
      previousNode.next = currentNode.next
  }
>>>>>>> 83d35fd8b3baed55a25cc6f4e1c9e27c0c3b4073
