console.log("This is my list Insertion project.")

class Node {
  constructor(data, next = null) {
    this.data = data,
      this.next = next
  }
}

class linkedList {
  constructor() {
    this.head = null
  }
}

let list = new linkedList()

// inserting at the beginning of linked list*****************
linkedList.prototype.insertAtBeginning = function (data) {
  let newNode = new Node(data)
  newNode.next = this.head
  this.head = newNode

  return this.head
}

// Inserting at the end of a linked list************************
linkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data)
  if (!this.head) {
    newNode.next = null
    head = tail
  }

  let tail = this.head
  while (tail.next !== null) {
    tail = tail.next
  }
  tail.next = newNode
  return tail.head
}

// Inserting after a specific node********************** 
linkedList.prototype.getAt = function (key, index) {
  let tail = this.head
  if (tail == null) {
    console.log("The node con not be exist.")
  }
  else {
    while (tail.data != index) {
      tail = tail.next
    }
    if (tail == null) {
      console.log("Node does not exist")
    }

    let temp = new Node(key)
    temp.next = tail.next
    tail.next = temp
  }
}
list.insertAtBeginning(1)
list.insertAtBeginning(2)
list.insertAtBeginning(3)
list.insertAtBeginning(4)
list.insertAtEnd(5)
list.insertAtEnd(6)
list.getAt(7, 5)

console.log(list)


// *****************************************************************
// Utility code for deleting a node out of the linked list

linkedList.prototype.deleteNode = function (key) {
  let h = this.head
  let prev = null

  if (h == null) {
    console.log("This code is not exist.")
  }
  if (h.data == key) {
    head = h.next
    return
  }
  while (h != null && h.data != key) {
    prev = h
    h = h.next
  }
  if (h == null) {
    console.log("This key is not present in the list.")
  }
  prev.next = h.next
}

list.deleteNode(2)

// *****************************************************************
// Utility code for getting middle of the linked list 

// Question: Given a linkedList list, Find middle of a linkedList list

linkedList.prototype.findMiddle = function () {
  let fast
  let slow
  fast = this.head
  slow = fast

  if (this.head == null) {
    console.log("This is not exist.")
  }

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  console.log(slow.data)
}

list.findMiddle()

