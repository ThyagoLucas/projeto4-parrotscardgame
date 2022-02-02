let vetor1 = [];
let vetor2 = [];
let numOfCards = start();

console.log(vetor1);
console.log(vetor2);
function start(){
    let numero = prompt("Digite");
    parseInt(numero);
    if((numero>3 && numero<15) && (numero%2 == 0)){
        numero = numero;
        gerarVetorAleatorio(numero);
    } else{
        start();
    }
}

function gerarVetorAleatorio(numCards){    
    let posicoes = numCards/2;
    let existe = false;

    for(let i=0; i<posicoes;){
        let a = random(0, 6);
        existe = false;

        if(i==0){
            vetor1[i] = a; 
            i++; 
        }
        if(i!=0){
            for(let j=0;j<(vetor1.length);j++){
                if(vetor1[i] == vetor1[j] || vetor1[j] == a){
                    existe = true;                    
                }
            }
                if(existe == false) {
                    vetor1[i] = a; 
                    i++;
                }
    }
    }

    associaVetor(vetor1);
}

function associaVetor(vetor1){

    let vetorImg = ['bobrossparrot.gif','explodyparrot.gif',
    'fiestaparrot.gif','metalparrot.gif','revertitparrot.gif',
    'tripletsparrot.gif', 'unicornparrot.gif'];

    for(let i = 0 ; i< vetor1.length; i++){

        vetor1[i] = vetorImg[i];
    }


    vetor2 = vetor1;
}


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function viraCard(){
    const vira = document.querySelector(".card");
    vira.classList.remove("face");
    vira.classList.add("back-face");
    desviraCard();
}

function desviraCard(){
    const desvira = document.querySelector(".card");
    desvira.classList.remove("back-face");
}

function relacionaCca(){
}


//Math.floor(Math.random(cards)*cards.length)

