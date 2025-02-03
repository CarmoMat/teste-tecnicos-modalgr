const readline = require('readline'); 

console.log("### Bem vindo a questão 3! ###\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarFraseEntrada() {
    rl.question('Digite a frase: ', (fraseEntrada) => {
        if (fraseEntrada.trim() === "") {
            console.log("Você não digitou nenhuma frase. Tente novamente.");
            perguntarFraseEntrada();
        } else {
            const palavras = fraseEntrada.split(/\s+/);
            const quantidadePalavras = palavras.filter(palavra => palavra !== "").length;

            console.log(`Frase digitada: ${fraseEntrada}`);
            console.log(`Quantidade de palavras: ${quantidadePalavras}`);

            rl.close();
        }
    });
}

perguntarFraseEntrada();
