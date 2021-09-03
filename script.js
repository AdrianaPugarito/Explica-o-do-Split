let nome = 'Adriana Pugarito';
console.log(nome);

//usando método Split
console.log(nome.split(""));

console.log(nome.split(","));

//usando Concatenação de strings
console.log("Adriana" + " " + "Pugarito");

//usando espaço entre aspas simples separado por uma virgula, toma cada nome como um valor separado exemplo
console.log(nome.split(' '));


//usando dos nomes, deve ir separado por uma virgula, se deixamos espaço depois da virgula antes do segundo nome também va imprimir esse espaço senão e só tirar o espaço exemplo:
//let nome1 = 'Adriana Torres, Lucia Torres';
//podemos trocar a virgula por ponto e virgula no let ele tomara todo com um valor para imprimir valores separados e só colocar no console.log(nome1.split(';')) ele novamente entendera que saõ valores separados
//let nome1 = 'Adriana Torres;Lucia Torres';
let nome1 = 'Adriana Torres,Lucia Torres';
console.log(nome1.split(','));


let nome3 = 'Adriana lucia Pugarito Torres';
//guardar na data primer nome e primer apellido
primernome = '';
pimerapelido = '';
//para evitar esso
let resposta = nome3.split(' ');// aspas simples sem espaço va imprimir todo o nome separando as letras com aspas simples com espaço separa os nomes desde 0 ate 4
console.log(resposta);
//para imprimir só primernome e primerapelido, as [] contem a posição que tomo o nome segundo o parámetro que contem o split
primernome = resposta[0];
primerapelido = resposta[2];
console.log(primernome, primerapelido);

//agora quero que imprime o nome tirando alguma letra
let nome4 = 'Adriana Pugarito';
console.log(nome4.split('a')); //imprime tirando a letra "a"


//usando "for" que significa "para" e é usada para  exibir na tela a repetição de um comando, facilita o trabalho e evita muitos codigos
let nome5 = 'Adriana Pugarito';
eronome = '';
eroapelido = '';

let resposta1 = nome5.split(' ');

for (let i = 0; i < resposta1.length; i++){
  if (i == 0){
    ernome = resposta1[i];
  } else if (i == 2) {
    eroapelido = resposta1[i];
  }
}

console.log(eronome, eroapelido);





