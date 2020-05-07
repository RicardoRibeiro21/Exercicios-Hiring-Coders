//laço if
var nome = "Ricardo";

if (nome === "Ricardo") {
  console.log("Seu nome é este mesmo");
} else if (nome === "Ribeiro") {
  console.log("Você também serve");
} else {
  console.log("Seu não é este");
}

//Switch case
switch (nome) {
    case 'Ricardo':
        console.log("Seu primeiro nome.");
        break;
    case 'Ribeiro':
        console.log("Seu segundo nome");
        break;
    case 'Lopes':
        console.log("Seu terceiro nome");
        break;
    default:
        console.log("Você não é quem procuramos");
        break;
}