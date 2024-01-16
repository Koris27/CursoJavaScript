/*
O que é uma função?
É um conjunto de instruções que executa uma tarefa ou calcula um valor.
Como é constituído um Function?
1°: function, 2°: Dar o nome da function, 3°: () --> Argumentos, 4°:{} --> onde será digitado o bloco de Código
Toda Function tem "return; específico" ele para a função onde é chamado
*/
// 1- Functions(bloco de código) declaration
function isValidDeclaratin(){
  //  const soma = 1+2;
    //if(soma === 3){
      //  return true;
    }
    //return false;
//} 
// console.log(isValidDeclaratin());// (()) é obrigatório 
// 2- Functions expressin, criado a partir de uma nomenclatura
const isValidExpression = function(){
    return false;
};
//console.log(isValidExpression())

// 3- Arrow Functions, jeito mais limpo.
const isValidArrow = () => {
    const multiplicação = 2 *2;
    return multiplicação;
}
console.log(isValidArrow());
