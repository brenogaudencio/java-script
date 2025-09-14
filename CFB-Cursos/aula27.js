// function* perguntas(){
//     const nome=yield "Qual é o seu nome?"
//     const idade=yield "Qual é a sua idade?"
//     return "Seu nome é " + nome + ", sua idade é " + idade
// }
// const gen=perguntas()
// console.log(gen.next().value) // "Qual é o seu nome?"
// console.log(gen.next("Breno").value) // "Qual é seu nome?"
// console.log(gen.next("20").value) // "Qual é a sua idade?"

function* rodarId() {
    const esmirilhadeira = yield 'Vocês têm esmirilhadeira?'
    const furadeira = yield 'E furadeira, vocês têm furadeira?'
    return "Infelizmente não temos a " + esmirilhadeira + ", mas temos a " + furadeira + "."
}

const gen = rodarId()
console.log(gen.next().value) // "Vocês têm esmirilhadeira?"
console.log(gen.next("esmirilhadeira").value) // "E furadeira, vocês têm furadeira?"
console.log(gen.next("furadeira").value) // "Infelizmente não temos a esmirilhadeira, mas temos a furadeira."

function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const cont=contador()
for(let c of cont){
    console.log(c)
}