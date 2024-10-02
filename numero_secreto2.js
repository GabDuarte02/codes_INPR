const prompt = require ("prompt-sync")({sigint: true});

console.log(">>TENTE ADIVINHAR O NÚMERO SECRETO!")

var numero_secreto = Number(5);
var numero_tentativa = Number(prompt("Digite um número: "));

if (numero_tentativa > 10) {
    console.log("Valor inválido.")
}
else if (numero_tentativa < 0){
    console.log("Valor inválido.")
}
else{
    if (numero_tentativa == numero_secreto){
        console.log("Acertou!!")
    }
    
    else if (numero_tentativa < numero_secreto){
        console.log ("Errou! Seu chute foi baixo demais.")
    }
    else {
        console.log("Errou! Seu chute foi alto demais.")
    }   
}
