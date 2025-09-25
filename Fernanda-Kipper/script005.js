console.log("Script carregado")

function mainFunction(){
    console.log("Main function")

    var h2 = document.createElement("h2")
    h2.innerText = "Breno Bonito"
    document.body.appendChild(h2)
    document.getElementById("mainBody").appendChild(h2)
}

mainFunction()