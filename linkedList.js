class SinglyLinkedList {
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    push(value){
      //initialize a new node for every value that is pushed in
      let newNode = new Node(value)
      //if there is no head, assign the head and tail to be the newNode
      if(this.head == null){
        this.head = newNode
        this.tail = newNode
      } else{
        //otherwise, create a link from the tail to a new point
        //assign the tail to that point we made
        this.tail.next = newNode
        this.tail = newNode
      }
      this.length++
      return this.length
    }
    pop(){
        //if there is no head, return undefined 
        if(this.head == null){
          return undefined
        }
        //initialize two variables. The first variable will represent/assigned to this.head
        let current = this.head
        //the second will be assigned to the new variable, 
        let newTail = current
        //while the current.next is not equal to null[x], 
        //assign the newTail to be the current [x] 
        // the looping works by assigning the current = current.next 
        while (current.next != null){
          newTail = current
          current = current.next
        }
        //assign the this.tail to be the newTail 
        this.tail = newTail
        //assign the .next value to be null 
        this.tail.next = null
        //decrement the length
        this.length-- 
        //if the length of the list is 0, reassign the head and tail to be null. 
        //alternatively return undefined 
        if (this.length == 0){
          this.head = null
          this.tail = null
        }
        //return the popped item off 
        return current
      }
    
  
  
  }