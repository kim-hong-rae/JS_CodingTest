class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
      this.length--;
      return shiftedNode;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== idx) {
        count++;
        current = current.next;
      }
      return curNode;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== idx) {
        count--;
        current = current.prev;
      }
    }
    return current;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx <= 0 || idx >= this.length) {
      return false;
    }
    if (idx === 0) {
      return !!this.shift(val);
    }
    if (idx === this.length) {
      return !!this.push(val);
    } else {
      let newNode = new Node(val);
      let foundNode = this.get(idx - 1);
      let foundNextNode = foundNode.next;
      foundNode.next = newNode;
      newNode.prev = foundNode;
      newNode.next = foundNextNode;
      foundNextNode.prev = newNode;
      this.length++;
      return true;
    }
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    if ((idx = this.length - 1)) return this.pop();
    else {
      let removedNode = this.get(index);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }
}
let list = new DoublyLinkedList();
list.push("hi");
list.push("there");
list.push("hongrae");
console.log(list.unshift("Hermione"));
