// importar no início
const readline = require('readline-sync');

// exemplo de uso
const nome = readline.question("Digite seu nome: ");
console.log("Olá,", nome);

// função menu
function menu() {
  console.log("\n[1] Cadastrar  [2] Listar  [0] Sair");
  return readline.question("> ").trim();
}

console.log("Opção escolhida:", menu());

