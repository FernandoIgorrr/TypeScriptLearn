/**
 * descrição: uso do tipo boolean (o primitivo)'
 * data: 30/05/2023
 */

// Exemplo 01

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

// Exemplo 02

let concluido: boolean = false;

if (!concluido) {
    console.log('Tarefa foi concluída com sucesso!')
} else {
    console.log('Tarefa Pendente!');
}