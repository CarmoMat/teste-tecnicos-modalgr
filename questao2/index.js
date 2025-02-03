const readline = require('readline');

console.log("### Bem-vindo a questão 2! ###\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarValorMulta() {
    rl.question('Qual o valor da multa por dia (em R$)? ', (valorMulta) => {
        valorMulta = valorMulta.replace(",", ".");
        valorMulta = parseFloat(valorMulta);

        if (isNaN(valorMulta)) {
            console.log("Por favor, insira um valor numérico válido.");
            perguntarValorMulta();
        } else {
            perguntarDiasAtraso(valorMulta);
        }
    });
}

function perguntarDiasAtraso(valorMulta) {
    rl.question('Quantos dias de atraso? ', (diasAtraso) => {
        diasAtraso = parseInt(diasAtraso);

        if (isNaN(diasAtraso)) {
            console.log("Por favor, insira um número válido de dias.");
            perguntarDiasAtraso(valorMulta);
        } else {
            let valorTotal = valorMulta * diasAtraso;

            if (valorTotal < 1) {
                console.log("O valor total da multa foi ajustado para o valor mínimo de R$ 1,00.");
                valorTotal = 1 * diasAtraso;
            }

            console.log(`O valor total da multa é R$ ${valorTotal.toFixed(2)}`);

            rl.close();
        }
    });
}

perguntarValorMulta();
