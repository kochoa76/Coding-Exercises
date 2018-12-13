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

  // Merge Sort Algorithm: 

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
