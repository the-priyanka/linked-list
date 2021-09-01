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
    return this.head
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

// list.deleteNode(2)

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
  // console.log(slow.data)
}

// list.findMiddle()


// *************************************************************************************
// Question: Given a singly linked list. Find the nth node from the end of the given list. 

linkedList.prototype.nthNodeFromEnd = function (nthNode) {
  let curr = this.head
  let prev = curr

  if (this.head == null) {
    console.log("This list does not exist.")
  }

  for (let i = 0; i < nthNode; i++) {
    if (curr != null) {
      curr = curr.next
    }
    else {
      console.log("This node are not present in the linked list.")
    }
  }

  while (curr != null) {
    prev = prev.next
    curr = curr.next
  }

  // console.log(prev)
}

// list.nthNodeFromEnd(4)


// ***********************************************
// finding loop in the list
linkedList.prototype.isLoopFound = function () {
  let fast = this.head
  let slow = fast

  if (this.head == null) {
    console.log("This list does not exist.")
  }

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return true
    }
  }
  return false
}

// list.insertAtBeginning(1)
// list.insertAtEnd(2)
// list.insertAtEnd(3)
// list.insertAtEnd(4)
// list.insertAtEnd(5)
// list.insertAtEnd(6)
// list.insertAtEnd(7)
// list.insertAtEnd(8)
// console.log(list)
// list.head.next.next.next.next = list.head.next.next

let pri = list.isLoopFound()
// console.log(pri)


// **********************************************
// Question: Given a linked list, ends in a cycle. Find the starting in the loop. 

linkedList.prototype.startingOfLoop = function () {
  let slow = this.head
  let fast = slow
  let isLoopFound = false

  if (this.head == null) {
    console.log("This list does not exist.")
  }

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      isLoopFound = true
      break
    }
  }

  if (isLoopFound) {
    slow = this.head
    while (slow != fast) {
      slow = slow.next
      fast = fast.next
    }
  }
  // console.log(slow.data)
}
list.insertAtBeginning(1)
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(4)
list.insertAtEnd(5)
list.insertAtEnd(6)
list.insertAtEnd(7)
list.insertAtEnd(8)
// console.log(list)
list.head.next.next.next.next.next.next = list.head.next.next

// list.startingOfLoop()
// console.log(pri)


// **************************************************************
// Reverse linkedList list 
linkedList.prototype.reverseList = function (head) {
  let prev = null
  let next = null
  let crr = head

  while (crr != null) {
    next = crr.next
    crr.next = prev
    prev = crr
    crr = next
  }
  head  = prev
  return this.head
}

let p = list.reverseList()
console.log(p)