//string
let nome = "Breno";
console.log("Olá " + nome + "!");

//number
let idade = 20;
console.log("Voce tem " + idade + " anos?");

//boolean 
const eMaiorDeIdade = idade >= 18;
console.log("É maior de idade? " + eMaiorDeIdade);

//undefined
let telefone 
        console.log("Telefone: "+telefone)
    if(telefone){
        console.log("Telefone: " + telefone)
}else{
        console.log("Telefone nao indentificado")
}

//null
let endereco = null;
console.log("Endereço: "+endereco)
console.log("Multiplicação: "+ endereco * 2);

//null e undefined sao tratados como false em contextos booleanos
//strings e numeros sao tratados como true em contextos booleanos (exceto o numero 0 e a string vazia "")
 

//Coerção de tipos
let numero = 1;
let numeroString = String(numero);

let string = "1";
let stringNumero = Number(string);

console.log(typeof numero + ", " +typeof numeroString);
console.log(typeof string + ", " + typeof stringNumero);

const pi = 3.14;
console.log("Valor de pi:", pi)

console.log("é igual?", 1 === "1" ? "igual" : "diferente");



// == => compara valor com coerção de tipos
// === => compara valor sem coerção de tipos (recomendado)
let count = 0
console.log("é igual?", 1 == "1" ? "igual" : "diferente");

if( 1 == "1"){
    console.log("1 é igual a '1'")
}else{
    console.log("1 é diferente de '1'")
}    