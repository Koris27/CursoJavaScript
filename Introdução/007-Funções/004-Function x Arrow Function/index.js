/*
1- Nome da função
2- Retorno 
3- Não tem Hoisnting
4- Arguments
*/
console.log(nomeFunction());// Aqui aconteceu um Hoisnting(independete de onde esteja sua função ele vai trocar a ordem de execução dentro do escopo sem erro)
function nomeFunction(){
    return "Paulo Roberto";
}


const nomeFunctionArrow = ()  => {
    return "Joao Victor";
}
console.log(nomeFunctionArrow());

const nomeFuncArrowReturn = () => "Ana Almeida";
console.log(nomeFuncArrowReturn());

/*Não vai funcionar para const 
console.log(nomeArrowHosting());
const nomeArrowHosting = () => {
return "Paulo Almeida";
} */

// Não funciona os Arguments
//const nomeFuncArrowArguments = () => {
 //   return arguments;
//};
//console.log(nomeFuncArrowArguments());

function nomeFuncArrowArguments(){
    return arguments;
};
console.log(nomeFuncArrowArguments("Isa"));


/*
5-O Arrow Function Não pode ser invocada com New-->(Instância algo,é mais utilizado para classes), pois ele não possui um constructor.
*/
function nomeNova(){
    return console.log("Moíses");
}
new nomeNova();

//const novaArrowFunc = () => {
 //   return console.log(123);
//}
//new novaArrowFunc();

/*
6- Contexto
Arrow Functions possuem this léxico enquanto o modelo normal possui this dinâmico.
Isso significa que arrow functions herdam o contexto local de onde foi declarado,
enquanto no modelo normal possui contexto associado ao objeto que ele está vinculado
no momento da chamada.
Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente com o contexto 
global, que no caso dos navegadores é window. */

const lanches = {
    cardapio:[
        {nome:"x-salada", preco:"R$30"},
        {nome:"x-Bacon", preco:"R$50"},
    ],
    meuPedidoFunc:function(select){
        return console.log(this.cardapio[select]);
    }
};
lanches .meuPedidoFunc(0);