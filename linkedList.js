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
  
  
  }