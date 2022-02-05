let vetor1 = [];
let vetor2 = [];
let carta1 = null;
let carta2 = null;
let img1 = null;
let img2 = null;
let jogadas = 0;
let numOfCards = start();
let blokcards = false;


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
    }   associaEDistribui(vetor1);
}
   
function associaEDistribui(vetor1){

    let vetorImg = ['bobrossparrot.gif','explodyparrot.gif',
    'fiestaparrot.gif','metalparrot.gif','revertitparrot.gif',
    'tripletsparrot.gif', 'unicornparrot.gif'];

    let vetorImpresso = [];
 
    for(let i = 0 ; i< vetor1.length; i++){
        vetor1[i] = vetorImg[vetor1[i]];
    }
    
    let cartas = document.querySelector(".cards");
    cartas.innerHTML = ' ';
    
    
    for( let i = 0; i<vetor1.length;i++){
       vetorImpresso[i] = vetor1[i];
    }
    

    for( let i = 0; i<vetor1.length;i++){
      vetorImpresso.push(vetor1[i]);
    }


    vetorImpresso.sort(comparador);
    vetor2 = vetorImpresso;

    for(let i = 0; i<vetorImpresso.length; i++){
        cartas.innerHTML = cartas.innerHTML +  `
        <div class="card" onclick="recebeCarta1(this, '${vetorImpresso[i]}')">
            <img src="img/front.png">
        </div>`
    }
    console.log(vetorImpresso);



}

function recebeCarta1(img, nomedacarta){


    if(blokcards == false){

    img.innerHTML = "<img src='img/"+nomedacarta+"'/>";


    if(carta1 == null){
        carta1=img;
        img1 = nomedacarta;
    }
    else{
        carta2 = img;
        img2 = nomedacarta;
    }

    verifica(img);
    jogadas = jogadas+1;

    }

}


function verifica(img){

    if((img1 && img2) != null){

        blokcards = true;
        if(img1 == img2){
            blokcards = false;
            img1 = null;
            img2 = null;
            carta1 = null;
            carta2 = null;
       
        }else{
            setTimeout(vira, 2000);
        }
    }

    function vira(img){
        let cartas = document.querySelector(".cards");
       
        blokcards = false;
        img1 = null;
        img2 = null;
        carta1.innerHTML ="<img src='img/front.png'/>";
        carta2.innerHTML ="<img src='img/front.png'/>";
        carta1 = null;
        carta2 = null;    
    }
}


function comparador() { 
	return Math.random() - 0.5; 
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
