// Declaracoes e Variaveis
//var, let e const
//var xpto=10;
//console.log(xpto);
//var xpto = 20;
//console.log(xpto);
// var - pode redeclarar e acessar fora do escopo
// let nao pode redeclarar e nao consegue acessar fora do escopo
//if(true) {
    //var nome = "Fiap";
//} 
// console.log(nome)

// cost
// const taxaJuros = 0.85;
// taxaJuros = 0.50;
// console.log(taxaJuros);

// var exemplo1 = "Ola dev var";
// console.log(exemplo1);

// let exemplo2 = "Ola dev let";
// console.log(exemplo2);

// const exemplo3 = "Ola dev const";
// console.log(typeof exemplo3);

// let exemplo4 = 20;
// console.log(typeof exemplo4)

// let exemplo5 = true;
// console.log(typeof exemplo5);

// let exemplo6 = {nome: "Fiap"};
// console.log(exemplo6)

// let exemplo7 = ["Java", "Python", "C#"];
// console.log(exemplo7);
// // variavel indefinida
// let exemplo8;
// console.log(exemplo8);
// // variavel vazia
// let exemplo9 = null;
// console.log(exemplo9);

// OPERADORES ARITMETICOS

// const valor1=20;
// const valor2=10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// Operadores Logicos



// OPERADORES DE COMPARACAO

// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// console.log("O valor é:", valor2);


// exercicio 1
// const p = 100;
// const v = 10;
// const precoFinal = p - v;
// console.log("O preço final com desconto é:", precoFinal); 


// // exercicio  2 

// const usuarioLogado = 1;
// const token = 100;
// const transacaoAutorizada = usuarioLogado === 1 && token >=10;
// console.log("Transacao autorizada com sucesso", transacaoAutorizada);

// Estrutura condicional 

// if
// if(true) {
//     console.log("é Verdadeiro")
// } 

// // if/else

// let nome = "Fiap"

// if(nome=="fiap") {
//     console.log("nome verdadeiro")
// } else {
//     console.log("nome errado")
// }

// // if encadeado ou aninhado

// let idade = 61;

// if(idade <= 13) {
//     console.log("é uma crianca")
// } else if(idade > 13 && idade <=18) {
//     console.log("é um adolescente")
// } else if (idade > 18 && idade <= 59) {
//     console.log("é um adulto")
// } else {
//     console.log("é um idoso")
// }

// //  SWITCH CASE

// let times = "santos";

// switch(times) {
//     case "santos":
//         console.log("Um time idoso")
//         break;
//     case "sao paulo":
//         console.log("Time panetone")
//         break;
//     case "palmeiras":
//         console.log("Maior do brasil")
//         break;
//     case "corinthians":
//         console.log("time de bandido")
//         break;
//     default:
//         console.log("é tao ruim quanto a selecao brasileira")
// }

// // ternaria

// let salario = 100;
// let resultado = salario == 100 ? "Salario Certo":"Salario Errado"
// console.log(resultado)

// let usuario = "fiap";
// let userLogado = usuario === "fiap"?"Logado com sucesso":"usuario invalido";
// console.log(userLogado)

// function verificarParImpar(numero) {
//     return numero % 2 === 0 ?"PAR":"IMPAR";
// }

// console.log(verificarParImpar(4))

// Estrutura de repeticao (laco de repeticao)

// for - estrutura de repeticao utilizada quando sabemos previamente quantas vezes o codigo vai ser executado

// declaracao, operacao , incremento
for (let i=1; i<=5; i++){
console.log("Numero:", i)
}

// for para array

const linguagens = ["Java", "Python","C#","PHP"];

for (let i = 0; i< linguagens.length; i++) {
    console.log("Linguagem",i,":", linguagens[i]);
}

const tecnologias =["JS", "HTML", "CSS"];

for(const tech of tecnologias) {
    console.log("Estudando", tech);
}

const carros = {marca: "volks", modelo:"Fusca", ano: 1980};

for(let dados in carros){
    console.log(dados,":",carros[dados])
}