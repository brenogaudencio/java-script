var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas!`)
if (hora > 0 && hora < 6) {
    console.log('boa madrugada')
}else if (hora > 6 && hora < 12) {
    console.log('bom dia')
}else if (hora > 12 && hora < 19) {
    console.log('boa tarde')
}else {
    console.log('boa noite')
}
