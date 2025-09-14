// 3 principais estruturas de repetição em JavaScript

// 1.for
// - Inicializacao: let i = 0 -> variavel de controler
// Condição de parada: i < 10 -> enquanto essa condicao for verdadeira o loop continua

for(let pi = 10; pi >= 3; pi--) {
    console.log("valor igual:",pi);
}

console.log("--------------");

let i = 0;
while(i <= 3){
    console.log("Executando loop:", i );
    i++;
}