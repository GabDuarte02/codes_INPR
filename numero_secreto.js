const prompt = require ('prompt-sync')({sigint: true});

console.log (">>TENTE ADIVINHAR O NÚMERO SECRETO!")

var numero_secreto = Number(7)
var numero_tentativa = Number(prompt("Digite um número: "));

if (numero_tentativa == numero_secreto) {
    console.log(">>Parabéns, você adivinhou!")
}
else {
    console.log (">>Tente novamente.")
}