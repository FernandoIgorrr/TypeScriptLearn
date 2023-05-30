"use strict";
/**
 * descrição: Uso de type annotation básico em TypeScript
 * data: 30/05/2023
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Variável
let nome = 'Fernando Igor Dantas';
console.log(nome);
// Array (com matrizes unidimensionais e array propriamente dito)
let nomes1 = ['Fernando Igor', 'Ana Maria', 'José Ramalho', 'Kirk Hammett', 'Chino Moreno'];
console.log("Matrizes: \n", nomes1);
let nomes2 = ['Fernando Igor', 'Ana Maria', 'José Ramalho', 'Kirk Hammett', 'Chino Moreno'];
console.log("Arrays: \n", nomes2);
// Não importa, qual jeito você use, quando transpilado da no mesmo, basta conferir o arquivo typeAnnotations.js
// Objeto
let pessoa;
pessoa = { nome: 'Fernando Igor', idade: 25, altura: 1.73 };
console.log(pessoa);
// Função
function multiplicaNumeros(n1, n2) {
    return n1 * n2;
}
console.log("Multiplicação: ", multiplicaNumeros(5, 5));
