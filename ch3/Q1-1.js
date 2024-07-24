class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    let temp = this.head;
    let pre = temp;
    if (!this.head) {
      return undefined;
    } else {
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let curHead = this.head;
      this.head = curHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return curHead;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  get(idx) {
    if (idx < 0 || idx > this.length) return null;
    let curCount = 0;
    let curNode = this.head;

    while (idx !== curCount) {
      curNode = curNode.next;
      curCount++;
    }
    return curNode;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);

    if (idx === 0) !!this.unshift(val);
    else {
      let newNode = new Node(val);
      let prevNode = this.get(idx - 1);
      let curNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = curNode;
      this.length++;
      return true;
    }
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let prevNode = this.get(idx - 1);
    let temp = prevNode.next;
    prevNode.next = temp.next;
    this.length--;
    return temp;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");

console.log("hi");
