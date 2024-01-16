// O ponto de (?)irá da a resposta 
// condição (?) -> true  (:) ->false;
const velocidade = 50;
const warn = 85;
const condição = velocidade >= warn ? console.log("Recebeu multa!") : console.log("continue andando!")

if(velocidade >= warn){
    console.log("Recebeu Multa!");
}else {
    console.log("Continue Andando!");
}