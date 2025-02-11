//Armazenar nota do aluno
var nota1 = 7;
var nota2 = 13;
var nota3 = 5;

//Verificar se as notas estão dentro do intervalo válido
while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Por gentileza, insira notas válidas entre o e 10."); //Resposta caso haja notas que fujam do intervalo definido
    return; //Acaba o código, caso o "while" seja verdadeiro
}

// Calcular a média das notas
var media = (nota1 + nota2 + nota3) / 3;

//Verificar se o aluno foi ou não aprovado
var mediaMinima = 7; 
var situacao = (media >= mediaMinima ) ? "Aprovado, parabéns!" :
"Reprovado, não foi dessa vez! :(";

//Exibir resultado
console.log("Média do aluno:" + media.toFixed (2)); //Exibir a média com 2 casas decimais 
console.log("Situação do Aluno:" + situacao); //Resposta sobre aprovação ou reprovação