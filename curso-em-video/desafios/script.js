function carregar() {//crio a funcao carregar()
    const msg = document.getElementById('msg')//crio a variavel que chama a div da mensagem
    const img = document.getElementById('imagem')// crio a variavel que chama a imagem
    const data = new Date()//variavel pra identificar a hora do dia 
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`// mensagem na tela com a hora do dia
    if (hora >= 0 && hora < 12) {//combinacao multipla 
        img.src = 'imagens/manha.jpg'//chama a imagem de acordo com a resposta da hora
        document.body.style.background = '#e2c380ff'//css pra mudar o fundo da tela de acordo com o resultado da combinacao multipla
    }else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#de8c28ff'
    }else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#39393aff'
    }
}