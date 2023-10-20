const state ={
    // As views são variaveis que vão alterar elementos visuais na tela 
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),

    },
    values:{
        timeId: null,
        countDownTimeId: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
};

// Tocar audio de click no Ralph
// Vai ser chamado no evento de listener
function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2; // Volume do audio
    audio.play();

}

// Função para controlar o tempo restante de uma jiogada 
function countDown(){
    state.values.currentTime--; // decrementa o tempo restante
    state.view.timeLeft.textContent = state.values.currentTime; // altera o tempo restante na barra no time left 
    // Verificar se o tempo acabou
    if(state.values.currentTime <= 0){
        
        alert("Game over !!" + state.values.result);

    }
}

// Limpa todos os quadrados para que não tenho nenhum inimigo ao iniciar
function randonSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
        
    });

    // Sorteando um número aleatório
    let randomNumber = Math.floor(Math.random() * 9);
    let randonSquare = state.view.squares[randomNumber];
    randonSquare.classList.add("enemy");
    state.values.hitPosition = randonSquare.id;

}

// Essa função vai mover o Ralph de 1 em 1 segundo de lugar 
function moveEnemy(){
    // em um intervalo de tempo vai ser chamada a função randomSquare, tempo de 1 segundo
    state.values.timerID = setInterval(randonSquare,state.values.gameVelocity);

}

// Função que vai ficar ouvindo alguma ação de click
function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            if(square.id === state.values.hitPosition){
                state.values.result ++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null; 
                playSound();

            }
        });
    });
}

// Função que inicia outras funçoes automaticamente
function init(){
    moveEnemy()
    addListenerHitBox()
    
    
}
// Chama a funcção inicial
init();