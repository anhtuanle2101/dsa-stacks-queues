const Stack = require("./stack");

function balancedBrackets(str){
    let stk = new Stack();
    for(let i=0;i<str.length;i++){
        
        if (["{","}","[","]","(",")"].some(e=>e==str.charAt(i))){
            if (matchedBrackets(stk.peek(),str.charAt(i))){
                stk.pop();
            }
            else{
                stk.push(str.charAt(i));
            }
        }
    }
    return stk.isEmpty();
}

function matchedBrackets(a, b){
    if (!a || !b){
        return false;
    }
    return (a === "{" && b === "}")?true:((a === "[" && b === "]")?true:((a === "(" && b === ")")?true:false));
}

console.log(balancedBrackets("{{{}}}"));
console.log(balancedBrackets("[[}}{{()"));