function Enviar() {
  
    var resposta = "1"


    var text = ""
    
    if(EnviarPergunta.value == resposta) {

    text= ("Voce ACERTOU!")
    } else {
    text= ("Voce ERROU!")
    }


  document.getElementById("textarea").innerHTML=text
}