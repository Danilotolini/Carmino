function isValidExpression(expression: string): boolean {
    const states = { START: 0, NUMBER: 1, OPERATOR: 2 };
    let state = states.START;
    
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
        if (/\d/.test(char)) { 
            if (state === states.START || state === states.OPERATOR) {
                state = states.NUMBER;
            } else if (state === states.NUMBER) {
                continue;
            }
        } else if (/[\+\-\*\/]/.test(char)) { 
            if (state === states.NUMBER) {
                state = states.OPERATOR;
            } else {
                return false; 
            }
        } else {
            return false;
        }
    }
    
    return state === states.NUMBER; 
}

console.log(isValidExpression("12+4*5/2")); 
console.log(isValidExpression("12++4"));
