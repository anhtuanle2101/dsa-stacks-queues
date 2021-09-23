/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
      return undefined;
    };
    newNode.next = this.first;
    this.first = newNode;
    this.size+=1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first){
      throw Error("The stack is empty");
    }
    if (this.size===1){
      const tempNode = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return tempNode.val;
    }
    const tempNode = this.first;
    this.first = tempNode.next;
    this.size-=1;
    return tempNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size===0)?true:false;
  }
}

module.exports = Stack;
