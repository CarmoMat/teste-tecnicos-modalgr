const readline = require('readline'); 

console.log("### Bem-vindo a questão 4! ###\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarVetores() {
    const numeros = [];
    const multiplosDe3 = [];
    const naoMultiplosDe3 = [];

    for (let i = 0; i < 50; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros.push(numeroAleatorio);

        if (numeroAleatorio % 3 == 0) {
            multiplosDe3.push(numeroAleatorio);
        } else {
            naoMultiplosDe3.push(numeroAleatorio);
        }
    }

    console.log(`Números gerados: ${numeros}\n`);
    console.log(`Múltiplos de 3: ${multiplosDe3}\n`);
    console.log(`Não múltiplos de 3: ${naoMultiplosDe3}\n`);

    rl.close();
}

gerarVetores();
