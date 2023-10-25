// geração do valor aleatório
    var y = Math.floor(Math.random() * 10 + 1);

// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
var x = document.getElementById("guessField").value;
 
if(x == y)
{
    alert("INCRIVÉL!!!" +playername+", você acertou com"
            + guess + "tentativa(s)!");
            guess = 1;
}

    else if(x > y)
    {
        guess++;
        alert("Opa, resposta errada!!! O número tem que ser menor");
    }
    else
    {
        guess++;
        alert("Opa, resposta errada!!! O número tem que ser maior");
    }

    function playAgain(){
        y = Math.floor(Math.random() * 10 + 1);
    }