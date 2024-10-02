const prompt = require('prompt-sync')({sigint: true});

console.log(">>VERIFICANDO SUA IDADE");

var idade_usuario = Number(prompt("Digite a sua idade: "));

if (idade_usuario >= 18) {
    console.log("Você é maior de idade.")
}

else {
    console.log("Você é menor de idade.")
}