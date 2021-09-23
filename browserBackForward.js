const Stack = require("./stack");

class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

class Browser{
    constructor(val = null){
        this.back = new Stack();
        this.forward = new Stack();
        this.current = val;
    }
    addSite(val){
        const newNode = new Node(val);
        if (!this.current){
            this.current = newNode;
        }
        this.back.push(this.current);
        this.current = newNode;
        console.log(sample.current);
    }
    backSite(){
        if (!this.current){
            return;
        }
        if (this.back.size===0){
            return;
        }
        this.forward.push(this.current);
        this.current = this.back.pop();
    }
    forwardSite(){
        if (!this.current){
            return;
        }
        if (this.forward.size===0){
            return;
        }
        this.back.push(this.current);
        this.current = this.forward.pop();
    }
}

const sample = new Browser();
sample.addSite('Google');
sample.addSite('Yahoo');
sample.addSite('Ebay');
sample.backSite();
console.log(sample.current);
sample.forwardSite();
console.log(sample.current);
sample.addSite('Apple');