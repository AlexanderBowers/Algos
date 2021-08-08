/*
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

input:  document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
*/


//returns list of all unique words in it and number of occurrences
//split the string into an array
//create a newArray
//forEach word of sentenceArray
//if it is not in newArray, add it and with a 1
//else map through array to find the index where it's located and + 1 to occurrences

let document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

function wordEngine(sentence) {
  sentence = sentence.split(' ')
  let uniqueArray = []
  sentence.forEach(word => {
    word = word.toLowerCase().replace(/[^A-Za-z]/ig, "")

    //note: doesn't work. need a way to map through uniqueArray to detect the word.
    //right now it's only checking at the surface level

    if(uniqueArray.includes(word) == false){
      uniqueArray.push([word, 1])
    } else {
    return uniqueArray.map(wordCount => {
      if (wordCount[0] == word){
        return [word, wordCount[1] += 1]
      }
    })
    }
  })
  console.log(uniqueArray[0][0] == uniqueArray[10][0])
  return uniqueArray
}

wordEngine(document)


//sorted by number of occurences in descending order
//create counter = newArray[0][0]
//loop from 1 => array.length - 1
//if newArray[increment][1] > counter
//newArray.splice(0, 0, newArray[increment]) => send the max to the front
//newArray.splice(increment, 1) => removes new max from its original position
