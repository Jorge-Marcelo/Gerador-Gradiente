/*
Autor: Jorge Marcelo
Data de Criação: 16/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando elementos atravez do DOM*/
let gerarBtn = document.getElementById("gerarGradiente");
let outputColor = document.getElementById("outputColor");

/*Cracteres hexdecimais para gerar o codugo da cor*/
let stringHexaDecimal = "0123456789abcdef";

/*Função que vai gerar uma cor aleatoria atravz do objeto Math*/
function corAleatoria(){
let codigoHexadecimal = "#"
for (let contador = 0; contador < 6; contador++){
codigoHexadecimal = codigoHexadecimal + stringHexaDecimal
[Math.floor(Math.random() * stringHexaDecimal.length)]
}
return codigoHexadecimal;
}

/*Função que vai gerar o gardiente baseado em duas cores aletorias*/
function gerarGradiente(){
let corPrimaria = corAleatoria();
let corSecunadria = corAleatoria();
let corTerciaria = corAleatoria();

let angulo = Math.floor(Math.random() * 360);
outputColor.style.background = 
`linear-gradient(${angulo}deg, 
${corPrimaria}, ${corSecunadria}, ${corTerciaria})`
}

/*Escutadpr de evento para botão*/
gerarBtn.addEventListener("click", gerarGradiente);

/*Gerar uma cor assim que carregar a pagina*/
window.onload = gerarGradiente;

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})