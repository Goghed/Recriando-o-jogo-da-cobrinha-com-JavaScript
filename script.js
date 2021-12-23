let canvas = document.getElementById("cobrinha");
let context = canvas.getContext("2d");
let box = 32;
let cobrinha = [];
cobrinha[0] = {
    x: 8 * box,
    y: 8 * box
}

let comeu = 0;

let direction = "Direita";
let comidinha = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < cobrinha.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    }
}

function criarComidinha(){
    context.fillStyle = "yellow";
    context.fillRect(comidinha.x, comidinha.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "Direita"){
        direction = "Esquerda";
    } 
    if(event.keyCode == 38 && direction != "Baixo"){
        direction = "Cima";
    } 
    if(event.keyCode == 39 && direction != "Esquerda"){
        direction = "Direita";
    } 
    if(event.keyCode == 40 && direction != "Cima"){
        direction = "Baixo";
    } 
}

function iniciarJogo(){

    for (i=1; i < cobrinha.length; i++){
        if(cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y){
            clearInterval(jogo);
            alert('Game Over :(    Você Comeu ' + comeu + ' comidinhas');            
        }
    }

    if(cobrinha[0].x > 15 * box && direction == "Direita"){
        cobrinha[0].x = 0;
    }
     
    if(cobrinha[0].x < 0 * box && direction == "Esquerda"){
        cobrinha[0].x = 16 * box;
    } 
    if(cobrinha[0].y < 0 * box && direction == "Cima"){
        cobrinha[0].y = 16 * box;
    } 
    if(cobrinha[0].y > 15 * box && direction == "Baixo"){
        cobrinha[0].y = 0;
    } 

    criarBG();
    criarCobrinha();
    criarComidinha();

    let cobrinhaX = cobrinha[0].x;
    let cobrinhaY = cobrinha[0].y;

    if(direction == "Direita"){
       cobrinhaX += box; 
    } 

    if(direction == "Esquerda"){
       cobrinhaX -= box; 
    } 

    if(direction == "Cima"){
       cobrinhaY -= box; 
    } 

    if(direction == "Baixo"){
       cobrinhaY += box; 
    } 

    if(cobrinhaX != comidinha.x || cobrinhaY != comidinha.y){
        cobrinha.pop();                
    }

    else{
        comidinha.x = Math.floor(Math.random() * 15 + 1) * box;        
        comidinha.y = Math.floor(Math.random() * 15 + 1) * box;
        comeu++;             
    }    

    let novaCabeca = {
        x: cobrinhaX,
        y: cobrinhaY
    }

    cobrinha.unshift(novaCabeca);

}

let jogo = setInterval(iniciarJogo, 100);

