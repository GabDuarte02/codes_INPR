const prompt = require("prompt-sync")({sigint: true});

console.log(">>CONVERTENDO NÚMEROS EM DIAS DA SEMANA");

var numero_digitado = Number(prompt("Digite um número: "));

if (numero_digitado > 7) {
    console.log("Esse valor é inválido")
}
else if (numero_digitado < 1){
    console.log("Esse valor é inválido")
}

else {
   if (numero_digitado == 1) {
    console.log("O dia digitado é domingo")
   }
   else if (numero_digitado == 2) {
    console.log("O dia digitado é segunda-feira")
   }
   else if (numero_digitado == 3) {
    console.log("O dia digitado é terça-feira")
   }
   else if (numero_digitado == 4) {
    console.log("O dia digitado é quarta-feira")
   }
   else if (numero_digitado == 5) {
    console.log("O dia digitado é quinta-feira")
   }
   else if (numero_digitado == 6) {
    console.log("O dia digitado é sexta-feira")
   }
   else if (numero_digitado == 7) {
    console.log("O dia digitado é sábado")
   }

}
}
