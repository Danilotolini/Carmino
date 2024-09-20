type Estado = 'q0' | 'q1' | 'q2';

class AFD {
    private transicoes: { [key in Estado]: { [key: string]: Estado } };

    constructor() {
        this.transicoes = {
            q0: {
                '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1',
                ' ': 'q0'
            },
            q1: {
                '+': 'q2', '-': 'q2', '*': 'q2', '/': 'q2',
                ' ': 'q1',
                '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1'
            },
            q2: {
                '0': 'q1', '1': 'q1', '2': 'q1', '3': 'q1', '4': 'q1', '5': 'q1', '6': 'q1', '7': 'q1', '8': 'q1', '9': 'q1',
                ' ': 'q2'
            }
        };
    }

    public validarExpressao(expressao: string): boolean {
        let estado: Estado = 'q0';

        for (const char of expressao) {
            if (this.transicoes[estado][char]) {
                estado = this.transicoes[estado][char];
            } else {
                return false; // Transição inválida
            }
        }

        return estado === 'q1'; // Aceita se terminar em q1
    }
}

// Exemplos de uso
const afd = new AFD();

console.log(afd.validarExpressao("3 + 5")); // true
console.log(afd.validarExpressao("12 - 4 * 2")); // true
console.log(afd.validarExpressao("+ 5")); // false
console.log(afd.validarExpressao("5 / 2 + 1")); // true
console.log(afd.validarExpressao("5 / + 3")); // false
