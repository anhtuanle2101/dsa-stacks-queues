const Stack = require("./stack");


function stringReversal(str){
    const stk = new Stack();
    for (let char of str){
        stk.push(char);
    }
    let result = "";
    while (stk.size>0){
        result+=stk.pop();
    }
    return result;
}

console.log(stringReversal("Hello World!"));