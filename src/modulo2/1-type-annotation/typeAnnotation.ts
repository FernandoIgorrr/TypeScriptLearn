/**
 * descrição: Uso de type annotation básico em TypeScript
 * data: 30/05/2023
 */

export { };

// Variável
let nome: string = 'Fernando Igor Dantas';
console.log(nome);

// Array (com matrizes unidimensionais e array propriamente dito)
let nomes1: string [] = ['Fernando Igor','Ana Maria','José Ramalho','Kirk Hammett','Chino Moreno'];
console.log("Matrizes: \n",nomes1);

let nomes2: Array<string> = ['Fernando Igor','Ana Maria','José Ramalho','Kirk Hammett','Chino Moreno'];
console.log("Arrays: \n",nomes2);

// Não importa, qual jeito você use, quando transpilado da no mesmo, basta conferir o arquivo typeAnnotations.js

// Objeto
let pessoa: {
    nome    :string,
    idade   :number,
    altura  :number,
}

pessoa = {nome: 'Fernando Igor',idade: 25,altura: 1.73};
console.log(pessoa);

// Função
function multiplicaNumeros(n1: number, n2: number){
    return n1 * n2;
}

console.log("Multiplicação: ",multiplicaNumeros(5,5));