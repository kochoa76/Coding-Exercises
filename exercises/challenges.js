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
