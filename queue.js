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
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
      return undefined;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size+=1;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first){
      throw new Error("The queue is empty");
    }
    if (this.size===1){
      const temp = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return temp.val;
    }
    let temp = this.first;
    this.first = temp.next;
    this.size-=1;
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (this.size===0)?true:false;
  }
}

module.exports = Queue;
