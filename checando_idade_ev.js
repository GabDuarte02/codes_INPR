const prompt = require("prompt-sync")({sigint: true});

console.log("*verificar idade*");

var idade_usario = Number(prompt("digite sua idade: "));

if (idade_usario >= 18) {
    console.log("maior de idade")
}

else {
    console.log("menor de idade")
}