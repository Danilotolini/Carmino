function isValidExpression(expression) {// para verificar se a expressão matematica é válida
    var states = { START: 0, NUMBER: 1, OPERATOR: 2 }; // start = inicio, number = numero encontrado, operator = +,-,*,/ encontrado
    var state = states.START;
    var parenthesesCount = 0; // contar parênteses
    for (var i = 0; i < expression.length; i++) {
        var char = expression[i];
        if (/\s/.test(char)) { // ignora caracteres que são espaço
            continue;
        }
        // Verifica números
        if (/\d/.test(char)) { 
            if (state === states.START || state === states.OPERATOR) {
                state = states.NUMBER; // estado para mudar para número
            }
            else if (state === states.NUMBER) {
                continue; // se é um número ele continua
            }
        }
        // Verifica operadores
        else if (/[\+\-\*\/]/.test(char)) {
            if (state === states.NUMBER) {
                state = states.OPERATOR; // estado que muda para operador (+, -, *, /)
            }
            else {
                return false; // se não tiver número antes do operador retorna false
            }
        }
        // Verifica parênteses
        else if (char === '(') {
            if (state === states.START || state === states.OPERATOR) {
                parenthesesCount++; // conta parênteses abertos
            }
            else {
                return false; // Parêntese aberto em posição inválida
            }
        }
        else if (char === ')') {
            if (state === states.NUMBER && parenthesesCount > 0) {
                parenthesesCount--; // Conta parênteses fechados
            }
            else {
                return false; // Parêntese fechado em posição inválida
            }
        }
        else {
            return false; // Caractere inválido
        }
    }
    return state === states.NUMBER && parenthesesCount === 0; /* o estado final é number ou seja termina com número,
     o contado de parênteses é 0 */
}
console.log(isValidExpression("12 + 4 * (5 / 2)")); // true
console.log(isValidExpression("12 + (4 * 5 / 2")); // false
