const prompt = require ("prompt-sync")({sigint: true});

console.log(">>VERIFICANDO: É PAR OU IMPAR?");

var numero = Number(prompt("Digite um número: "));

if (numero%2 == 0){
    console.log("Seu número é par.")
}
else {
    console.log("Seu número é impar.")
}