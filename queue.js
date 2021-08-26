/** Node: node for a queue. */

class Node{
  constructor(val, next=null){
    this.val = val;
    this.next = next;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get size(){
    return this._size;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.size = 0;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
