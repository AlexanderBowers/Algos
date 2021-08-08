/*
find the square root of a number using binary search

Binary Search: Divide and Conquer algo 
  -sorted array 
  -number 
  -divide the array 
  -
*/
const binarySearchSRT = (num) => {
    //make an array of numbers from 2 to number / 2
    //[2, 3, 4, 5, 6, 7, 8]
    //do Math.floor(array.length / 2)
    //if guess * guess < target
    //increment by 1 until it does
    //else
    //minus 1 until it does
    //return the num that does
    const theArray = []
    let iterator = 2
    while(theArray.length < num / 2){
     theArray.push(iterator)
     iterator += 1
    }
   
    let guess; 
    let min = 0
    let max = theArray.length - 1
     while (min <= max) {
       guess = Math.floor((max + min) / 2)
       let pow = guess * guess
   
       if (pow === num) {
         return guess
       } else if (pow < num) {
         min = guess + 1
       } else {
         max = guess - 1
       }
     }
   //  let middleIndex = Math.floor(theArray.length / 2)
   //  let guess = theArray[middleIndex] ** 2
   //  if (guess < num){
   //    while(guess < num){
   //      middleIndex += 1
   //      guess = theArray[middleIndex] ** 2
   //    }
   //  }else {
   //    while(guess > num){
   //      middleIndex -= 1
   //      guess = theArray[middleIndex] ** 2
   //    }
   //  }
   //  return theArray[middleIndex]
   }
   
   binarySearchSRT(16)
   