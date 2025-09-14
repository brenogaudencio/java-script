let idades =[20, 9, 30, 35, 40]

//Void = quando a função não retorna nada
//Return = quando a função retorna algo
let somaDasIdades = 0;
for(let i = 0; i < idades.length; i++){
    let idade = idades [i];
    console.log(idade, verificaSeEMaiorDeIdade(idade));
    somaDasIdades = somarIdades(idade, somaDasIdades);
}

console.log("Soma das idades: ", somaDasIdades);

function verificaSeEMaiorDeIdade(idade){
    return idade >= 18;
}
function somarIdades(idade, somatorio){
    return idade + somatorio;
}