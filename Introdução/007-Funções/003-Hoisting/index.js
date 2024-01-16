// Obs:Hoisting é: O var que oculta seus Bugs por debaixo dos panos, o mesmo serve para o function.
// Veja o exemplo:
console.log(soma()); // Aqui devria dar um erro, pois ele está antes da funcionalidade.
console.log(x)
function soma(){
    return 1+1;
} 
var x = 10;

// Já no let e Arrow vai dar erro. Veja o exemplo abaixo:
console.log(soma());
let soma = () => {
    return 1+1;
};
