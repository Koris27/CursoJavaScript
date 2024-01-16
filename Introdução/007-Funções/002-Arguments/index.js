function soma(num1,num2)/*--> Argumentos ou parâmetros*/{
    if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2;
}
return "Você passou dados errado";
}
console.log(soma(soma(1,4), soma(1,4))); // Podemos usar uma função dentro de outra função.
// Typeof esse operador é usado  para encontrar o tipo de dados de uma Variável no JavaScript

const subtracao = (num4 = 0,num5 = 0) =>/*Arrow function*/ {
    if(typeof num4 ==="number" && typeof num5 ==="number"){
        return num4 - num5;
    }
    
    return "Você digitou o valor errado"
};
console.log(subtracao(1,2));

