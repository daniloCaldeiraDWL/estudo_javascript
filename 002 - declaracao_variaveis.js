// Variáveis - Exemplos práticos. 

// Tipos e usos:
// const: para valores que não mudam, como o nome de uma pessoa.
// let: para valores que podem mudar, como a idade de uma pessoa.
// var: é uma forma mais antiga de declarar variáveis, mas é recomendável usar const ou let para evitar problemas de escopo.

const nome = "Danilo";
let idade = 29;

console.log(nome);
console.log(idade);

// imprimindo a frase: "O Usuario Danilo tem 29 anos de idade."
console.log(`O Usuario ${nome} tem ${idade} anos de idade.`);

// Objetos e arrays:
console.log("\nEstudo de Objetos e Arrays em JavaScript:");
const pessoa = {
    nome: "Danilo",
    idade: 28,
    profissao: "Analista de Sistemas"
};

pessoa.idade = 29; // Atualizando a idade
pessoa.nome = "Danilo Martins Caldeira"; // Atualizando o nome

console.log(pessoa);

// Operações simples com variáveis:
let a = 10;