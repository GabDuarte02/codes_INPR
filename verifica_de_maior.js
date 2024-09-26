const prompt = require('prompt-sync')({sigint: true});

console.log(">>VERIFICANDO SUA IDADE");

var idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
    console.log(">>Você é maior de idade.")
}