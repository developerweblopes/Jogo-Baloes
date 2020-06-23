function addbola() {
    var bola = document.createElement("div")
    bola.setAttribute("class","bola")

    var p1 = Math.floor(Math.random() * 480) + 100
    var p2 = Math.floor(Math.random() * 360) + 100
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        
    }
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background:"+getRandomColor())
    bola.setAttribute("onclick","estourar(this)")
    

    document.body.appendChild(bola);
    pontuacao(1);
}
function estourar(elemento) {
    document.body.removeChild(elemento) 
    var cont = 1
    var baloes_estourados = document.getElementById("baloes_estourados").innerHTML;
    baloes_estourados = parseInt(baloes_estourados) + cont
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;
}

function iniciar(objeto) {
        var play = objeto.value 

        if(play == "Fácil") {
            setInterval(addbola, 1000) //1000 = 1s
        }else if(play == "Medio") {
            setInterval(addbola, 900) //1000 = 1s
        } else if(play == "Dificil"){
            setInterval(addbola, 700) //1000 = 1s
        }
    }

function pontuacao(acao) {
    var baloes_inteiros = document.getElementById("Baloes_Inteiros").innerHTML;
    var baloes_estourados = document.getElementById("baloes_estourados").innerHTML;
    document.getElementById("baloes_tela").innerHTML

    baloes_inteiros = parseInt(baloes_inteiros);

    baloes_inteiros = baloes_inteiros + acao;

    document.getElementById("Baloes_Inteiros").innerHTML = baloes_inteiros;
    document.getElementById("baloes_tela").innerHTML = baloes_inteiros - baloes_estourados

    if(document.getElementById("baloes_tela").innerHTML > 10 ) {
        alert("voce perdeu!!!!!!!!!!")
        
    }
}