let vetor1 = [];
let carta1 = null;
let carta2 = null;
let img1 = null;
let img2 = null;
let jogadas = 0;
let terminou = null;
let inicio = setTimeout(start, 2800);

let tempo = true;
let seconds = 1;
let blokcards = false;
let blockcarta1 = true;


function start(){
    let numero = prompt("Digite o numero de cartas: numeros pares entre 4 e 14 :)");
    parseInt(numero);
    if((numero>3 && numero<15) && (numero%2 == 0)){
        numero = numero;
        terminou = numero;
        gerarVetorAleatorio(numero);
        relogio;

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

    //depois de embaralhado, coloca as cartas na tela
    for(let i = 0; i<vetorImpresso.length; i++){
        cartas.innerHTML = cartas.innerHTML +  `
        <figure class="card ini${i+1}" data-identifier="card" onclick="recebeCarta1(this, '${vetorImpresso[i]}')">
            <img src="img/front.png">
        </figure>`
        
    }
}

function recebeCarta1(img, nomedacarta){

    if(blokcards == false){
        img.innerHTML = "<img  data-identifier='front-face' src='img/"+nomedacarta+"'/>";
        
        if(blockcarta1==true){
            carta1=img;
            img1 = nomedacarta;
            jogadas++
            img.classList.add('block');
            blockcarta1 = false;        
        }else{
            carta2 = img;
            img2 = nomedacarta;
            blockcarta1 = true;
            jogadas++
            img.classList.add('block');
            verifica();
        }

        if(seconds == 1){
            relogio();
        }
        
        let mudaClic = document.querySelector(".jogadas");
        mudaClic.innerHTML = jogadas + ' jogadas'; 
        

    }
  
}

function verifica(){
   
    if((carta1 && carta2) != null){

        blokcards = true;

        if(img1 == img2){
         
            img1 = null;
            img2 = null;
            carta1 = null;
            carta2 = null;
            blokcards = false;
            terminou= terminou-2;
            if (terminou/2 == 0){
                tempo = false;
                seconds = seconds-1;
                setTimeout(reinicia, 1000);
                               
            }
       
        }else{
            setTimeout(vira, 1000);
        }
    }
}

function vira(){

    let cartas = document.querySelector(".cards");

    carta1.classList.remove('block');
    carta2.classList.remove('block');
    carta1.innerHTML ="<img data-identifier='back-face' src='img/front.png'/>";
    carta2.innerHTML ="<img data-identifier='back-face' src='img/front.png'/>";
    carta1 = null;
    carta2 = null;   
    img1 = null;
    img2 = null; 
    blokcards = false;
}

function reinicia(){
    
    alert("Voce ganhou em "+jogadas+" jogadas e " +seconds+ " segundos :)");

    let simOuNao = prompt("Deseja jogar novamente? Digite S ou N ");
    let naoquer = true
    if((simOuNao == 'S' || simOuNao == 's') && naoquer){
        document.location.reload();
    }else{
        alert("Se quiser jogar novamente atualize a pagina ;)");
        naoquer = false;
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

function relogio(){

    let time = document.querySelector(".time");
    
    if(tempo == true){
        time.innerHTML = seconds + ' s';
        seconds++;
        setTimeout(relogio, 1000);
    }
}