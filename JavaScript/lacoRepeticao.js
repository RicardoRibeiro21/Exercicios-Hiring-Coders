//For
var numeroSorteado = 10;

var tabuada = 7;

//tabuada
console.log("Utilizando For: ");
for (var i = 0; i < 100; i++) {    
    console.log("Valor de " + tabuada + ' x ' + i + ' = ' + tabuada * i);
}

for (let i = 0; i < array.length; i++) {
    if (numeroSorteado === i) {
        console.log("O número  foi sorteado");
        break;
    }    
}

console.log("Utilizando While:");

var achou = false;
var possivelValor = 0;
while(!achou) {
    possivelValor += 1;
    if(numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log("Não é o número sorteado " + numeroSorteado);
    }
}