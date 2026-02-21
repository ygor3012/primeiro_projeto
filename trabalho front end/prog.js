document.getElementById("matricular").addEventListener("click", function() {
    this.innerText = "Matrícula realizada!";
});

document.getElementById("matricular").addEventListener("click", function(){
    this.style.backgroundColor = "blue";
});

document.getElementById("saiba").addEventListener("click", function(){
    document.getElementById("info").style.display = "block"
});

document.getElementById("matricular").addEventListener("click",function(){
    document.getElementById("feita").style.display = "block"
});

const botao = document.getElementById("matricular");
const frase = document.getElementById("feita");

let ativo = false;

botao.addEventListener("click", function() {

    if (!ativo) {

        botao.innerText = "Matrícula realizada!";
        botao.style.backgroundColor = "blue";
        frase.style.display = "block";
        ativo = true;

    } else {

        botao.innerText = "MATRICULAR-ME";
        botao.style.backgroundColor = "";
        frase.style.display = "none";
        ativo = false;

    }

});

const botaoSaiba = document.getElementById("saiba");
const info = document.getElementById("info");

let mostrando = false;

botaoSaiba.addEventListener("click", function(){

    if (!mostrando) {
        info.style.display = "block";
        mostrando = true;
    } else {
        info.style.display = "none";
        mostrando = false;
    }
});


document.getElementById("escuro").addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

