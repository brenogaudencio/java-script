// Break: encerra a execução do loop.

// Continue: continua a execução do loop, pulando para a próxima iteração.

let n=0
let max=1000

while(n<max){
    console.log("Breno - " + n)
    if(n>10){
        break
    }
    n++
}
console.log("Fim do loop")