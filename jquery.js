const botão = document.querySelector('.botao');
let saudação = document.querySelector('.saudacao')

botão.addEventListener("click", saudar);

function saudar() {
    saudação.innerHTML = "Olá, seja bem vindo ao site do meu trabalho da faculdade! Aproveite seu tempo aqui para aprender um pouco mais sobre mim e não hesite em procurar por easter eggs!";
        setTimeout(() => {
            saudação.innerHTML = "";
        }, 5000);
}