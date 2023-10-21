// Uma lista pra guardar todos os emojis
const emojis = [
"😺",
"😺",
"🦝",
"🦝",
"🦊",
"🦊",
"🐵",
"🐵",
"🦁",
"🦁",
"🐯",
"🐯",
"🐶",
"🐶",
"🐮",
"🐮"

]; 

 // Guarda os emojis que forem sendo abertos no jogo
let openCards = [];

// Embaralhar os emojis para misturar elemebntos repetidos
let shuffleEmojis = emojis.sort(()=>(Math.random()> 0.5 ? 2 : -1));

// Vamos percorrer todos os cards e embaralha-los
for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div"); // Cria um elemento div
    box.className = "item"; // O elementos "item" é uma classe criada no CSS para ser usada agora
    box.innerHTML = shuffleEmojis[i]; // É a variavel do laço (for) que vai irerar sobre os emojis
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box) // Vai jogar na (div class="game") 

}

// Configurando os eventos de click nos itens
function handleClick(){
    if(openCards.length < 2){
       this.classList.add("boxOpen");
       openCards.push(this); // Guarda no vetor as duas carta escolhidas
    }
    // Comparar se as duas carta escolhidas foram iguais
    if(openCards.length == 2){
        setTimeout(checkMath, 500);
    }
    console.log(openCards);
}

// Condição de vitória do jogo
// Ao acertar a combinação dos cards elas fica a mostra 
// Na sequecia é só esolher novas cartas 
function checkMath(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; //depois da esolha das duas da um reset no jogo 

    // Condição para verificar se todas as cartas já foram viradas
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Voce venceu !")
    }

}