/* let age = 20

if(age >= 18){
console.log('Voce é um adulto')
}
else if(age >= 15){
    console.log('Voce é um adolecente')
}
else{
    console.log('Voce não é um adulto')
}
*/

let grade = prompt("Digite a nota do aluno: ");

if (grade > 100) {
  alert("Nota Invalida");
} else if (grade >= 90) {
  alert("Aluno nota A");
} else if (grade >= 80) {
  alert("Aluno nota B");
} else if (grade >= 70) {
  alert("Aluno nota C");
} else if (grade >= 60) {
  alert("Aluno nota D");
} else {
  alert("Aluno nota F");
}
